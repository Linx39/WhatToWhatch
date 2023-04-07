import React from 'react';
import {useDispatch} from 'react-redux';

import {redirectToRoute} from '../../../store/action';
import {Patch} from '../../../const';
import {filmProp} from '../../../props-types';

const PlayButton = ({film}) => {
  const {id} = film;
  const dispatch = useDispatch();
  const handlePlayButtonClick = () => dispatch(redirectToRoute((`${Patch.PLAYER}/${id}`)));

  return (
    <button onClick={handlePlayButtonClick} className='btn btn--play movie-card__button' type='button'>
      <svg viewBox='0 0 19 19' width='19' height='19'>
        <use xlinkHref='#play-s'></use>
      </svg>
      <span>Play</span>
    </button>
  );
};

PlayButton.propTypes = {
  film: filmProp,
};

export default PlayButton;
