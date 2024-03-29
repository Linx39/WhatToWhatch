import React, {memo, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import CardImage from '../card-image/card-image';
import CardVideo from '../card-video/card-video';
import {redirectToRoute} from '../../../store/action';
import {filmProp} from '../../../props-types';
import {AppRoute} from '../../../const';

const TIME_OUT = 1000;

const MovieCardSmall = ({film, isVideoMode, onMouseEnter, onMouseLeave}) => {
  const dispatch = useDispatch();
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => onMouseEnter(film), TIME_OUT);
  };

  const handleMouseLeave = () => {
    onMouseLeave();
    clearTimeout(timerRef.current);
  };

  const handleMouseClick = () => dispatch(redirectToRoute((`${AppRoute.FILMS}/${film.id}`)));

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <article className="small-movie-card catalog__movies-card" data-testid={`test-film-card-${film.id}`}>
      {isVideoMode
        ?
        <CardVideo
          film={film}
        />
        :
        <CardImage
          film={film}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
        />
      }
    </article>
  );
};

MovieCardSmall.propTypes = {
  film: filmProp,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isVideoMode: PropTypes.bool.isRequired,
};

export default memo(MovieCardSmall);
