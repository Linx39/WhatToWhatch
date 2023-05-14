import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import {fetchChangeFilmStatus} from '../../../store/api-actions';
import {getAuthorizationStatus} from '../../../store/user-data/selectors';
import {redirectToRoute} from '../../../store/action';
import {AuthorizationStatus, AppRoute} from '../../../const';
import {filmProp} from '../../../props-types';

const FavoriteButton = ({film, onLoadData}) => {
  const {id, isFavorite} = film;
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const handleChangeFilmStatus = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      dispatch(redirectToRoute((AppRoute.LOGIN)));
      return;
    }

    dispatch(fetchChangeFilmStatus(id, +!isFavorite, onLoadData));
  };

  return (
    <button onClick={handleChangeFilmStatus} className='btn btn--list movie-card__button' type='button'>
      <svg viewBox='0 0 19 20' width='19' height='20'>
        {isFavorite
          ? <use xlinkHref="#in-list"></use>
          : <use xlinkHref="#add"></use>
        }
      </svg>
      <span>My list</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  film: filmProp,
  onLoadData: PropTypes.func.isRequired,
};

export default FavoriteButton;
