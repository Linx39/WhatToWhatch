import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import CardImage from './card-image/card-image';
import CardVideo from './card-video/card-video';
import {resetOnDefaultFilmInfo} from '../../store/action';
import {redirectToRoute} from '../../store/action';
import {filmProp} from '../props-types';
import {Patch} from '../../const';

const FilmCard = (props) => {
  const {film, isVideoMode, onMouseEnter, onMouseLeave} = props;

  const dispatch = useDispatch();

  const handleCardClick = (filmId) => {
    dispatch(resetOnDefaultFilmInfo());
    dispatch(redirectToRoute(`${Patch.FILMS}/${filmId}`));
  };

  return (
    <article className="small-movie-card catalog__movies-card">
      {isVideoMode
        ?
        <CardVideo
          film={film}
        />
        :
        <CardImage
          film={film}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={handleCardClick}
        />
      }
    </article>
  );
};

FilmCard.propTypes = {
  film: filmProp,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isVideoMode: PropTypes.bool.isRequired,
};

export default FilmCard;
