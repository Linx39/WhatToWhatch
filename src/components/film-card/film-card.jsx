import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import CardImage from './card-image/card-image';
import CardVideo from './card-video/card-video';
import {resetOnDefaultFilmInfo, resetLoadedFilm} from '../../store/action';
import {redirectToRoute} from '../../store/action';
import {filmProp} from '../props-types';
import {Patch} from '../../const';

const FilmCard = (props) => {
  // console.log (`FilmCard`);
  const dispatch = useDispatch();
  const onResetLoadedFilm = () => dispatch(resetLoadedFilm());
  const onResetOnDefaultFilmInfo = () => dispatch(resetOnDefaultFilmInfo());
  const onRedirectToRoute = (url) => dispatch(redirectToRoute(url));

  const {film, isVideoMode, onMouseEnter, onMouseLeave} = props;

  const handleCardClick = (id) => {
    onResetLoadedFilm();
    onResetOnDefaultFilmInfo();
    onRedirectToRoute(`${Patch.FILMS}/${id}`);
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

export default memo(FilmCard);
