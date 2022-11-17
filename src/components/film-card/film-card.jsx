import React from 'react';
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
      <img src={previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <Link to={`${Patch.FILMS}${id}`} className="small-movie-card__link">{name}</Link>
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

const Card = (props) => {
  const {film, isPreview} = props;

  if (isPreview) {
    return <CardVideo film={film} />;
  }

  return <CardImage film={film} />;
};

const FilmCard = (props) => {
  const {film, onMouseEnter, onMouseLeave, isPreview} = props;

  let timer = null;

  const handleMouseEnter = () => {
    timer = setTimeout(() => onMouseEnter(film), TIME_OUT);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer);
    onMouseLeave();
  };

  return (
    <article className="small-movie-card catalog__movies-card"

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>

      <Card film={film} isPreview={isPreview}/>
    </article>
  );
};

FilmCard.propTypes = {
  film: filmProp,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isPreview: PropTypes.bool.isRequired,
};

CardImage.propTypes = {
  film: filmProp,
};

CardVideo.propTypes = {
  film: filmProp,
};

Card.propTypes = {
  film: filmProp,
  isPreview: PropTypes.bool.isRequired,
};

export default FilmCard;
