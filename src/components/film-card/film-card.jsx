import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import VideoPlayer from '../video-player/video-player';

import {filmProp} from '../props-types';
import {Patch} from '../../const';

const TIME_OUT = 1000;

const CardImage = (props) => {
  const {film} = props;
  const {id, name, previewImage} = film;

  return <>
    <div className="small-movie-card__image">
      <img src={previewImage} alt={name} width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <Link to={`${Patch.FILMS}/${id}`} className="small-movie-card__link">{name}</Link>
    </h3>
  </>;
};

const CardVideo = (props) => {
  const {film} = props;
  const {previewVideoLink, posterImage} = film;

  return <VideoPlayer
    src={previewVideoLink}
    poster={posterImage}
    isPlaying={true}
    isMute={true}
  />;
};

const FilmCard = (props) => {
  const {film, onMouseEnter, onMouseLeave, isPreviewMode} = props;

  // const [isNeedClearTimeout, setIsNeedClearTimeout] = useState(false);

  // const handleMouseEnter = () => onMouseEnter(film);

  let timer = null;
  const handleMouseEnter = () => {
    timer = setTimeout(() => onMouseEnter(film), TIME_OUT);
  };

  const handleMouseLeave = () => onMouseLeave();

  useEffect(() => {
    // setIsNeedClearTimeout(true);

    return () => {
      // setIsNeedClearTimeout(false);
      clearTimeout(timer);
    };
  });

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>

      {isPreviewMode
        ? <CardVideo film={film} />
        : <CardImage film={film} />
      }
    </article>
  );
};

FilmCard.propTypes = {
  film: filmProp,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isPreviewMode: PropTypes.bool.isRequired,
};

CardImage.propTypes = {
  film: filmProp,
};

CardVideo.propTypes = {
  film: filmProp,
};

export default FilmCard;
