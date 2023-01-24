import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import VideoPlayer from './video-player/video-player';
import {redirectToRoute} from '../../store/action';
import {filmProp} from '../props-types';
import {Patch} from '../../const';

const TIME_OUT = 1000;

const CardImage = ({film, onClick}) => {
  const {id, name, previewImage} = film;

  const handleFilmCardClick = () => onClick(id);

  return <>
    <div className="small-movie-card__image">
      <img
        onClick={handleFilmCardClick}
        src={previewImage} alt={name} width="280" height="175"
      />
    </div>
    <h3 className="small-movie-card__title">
      <Link to="#" onClick={handleFilmCardClick} className="small-movie-card__link">{name}</Link>
    </h3>
  </>;
};

const CardVideo = ({film}) => {
  const {previewVideoLink, posterImage} = film;

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleChangeIsVideoLoaded = (isLoaded) => {
    setIsVideoLoaded(isLoaded);
  };

  return <VideoPlayer
    src={previewVideoLink}
    poster={posterImage}
    isVideoLoaded={isVideoLoaded}
    onChangeIsLoaded ={handleChangeIsVideoLoaded}
    isPlaying={true}
    isMuted={true}
  />;
};

const FilmCard = (props) => {
  const {film, onMouseEnter, onMouseLeave, isPreviewMode} = props;

  const dispatch = useDispatch();

  const onCardClick = (id) => {
    dispatch(redirectToRoute(`${Patch.FILMS}/${id}`));
  };

  const [isNeedClearTimeout, setIsNeedClearTimeout] = useState(false);

  let timer = null;
  const handleMouseEnter = () => {
    timer = setTimeout(() => onMouseEnter(film), TIME_OUT);
  };

  const handleMouseLeave = () => onMouseLeave();

  useEffect(() => {
    setIsNeedClearTimeout(true);

    return () => {
      setIsNeedClearTimeout(false);
      clearTimeout(timer);
    };
  });

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>

      {isPreviewMode
        ? <CardVideo film={film} />
        : <CardImage film={film} onClick={onCardClick}/>
      }
    </article>
  );
};

// CardImage.defaultProps = {
//   onClick: () => {},
// };

FilmCard.propTypes = {
  film: filmProp,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isPreviewMode: PropTypes.bool.isRequired,
};

CardImage.propTypes = {
  film: filmProp,
  onClick: PropTypes.func.isRequired,
};

CardVideo.propTypes = {
  film: filmProp,
};

export default FilmCard;
