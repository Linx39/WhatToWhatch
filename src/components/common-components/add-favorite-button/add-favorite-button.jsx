import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import {fetchAddFavoriteFilm} from '../../../store/api-actions';
import {redirectToRoute} from '../../../store/action';
import {AuthorizationStatus, Patch} from '../../../const';
import {filmProp} from '../../props-types';

const AddFavoriteButton = ({film, isPromo}) => {
  const {authorizationStatus} = useSelector((state) => state.USER);

  const dispatch = useDispatch();
  const onRedirectToRoute = (url) => dispatch(redirectToRoute(url));
  const onAddFavoriteFilm = (id, status) => dispatch(fetchAddFavoriteFilm(id, status, isPromo));

  const {id, isFavorite} = film;

  const handleAddFavoriteFilm = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      onRedirectToRoute(Patch.LOGIN);
      return;
    }

    onAddFavoriteFilm(id, Number(!isFavorite));
  };

  return (
    <button onClick={handleAddFavoriteFilm} className='btn btn--list movie-card__button' type='button'>
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

AddFavoriteButton.propTypes = {
  film: filmProp,
  isPromo: PropTypes.bool,
};

export default AddFavoriteButton;
