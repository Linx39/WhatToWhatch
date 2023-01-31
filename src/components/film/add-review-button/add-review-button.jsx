import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {redirectToRoute} from '../../../store/action';
import {Patch} from '../../../const';
import {filmProp} from '../../props-types';

const AddReviewButton = ({film}) => {
  const dispatch = useDispatch();
  const onRedirectToRoute = (url) => dispatch(redirectToRoute(url));

  const {id} = film;

  const handleAddReviewClick = () => onRedirectToRoute(`${Patch.FILMS}/${id}/review`);

  return (
    <Link to="#"
      onClick={handleAddReviewClick}
      className="btn movie-card__button"
    >
      Add review
    </Link>
  );
};

AddReviewButton.propTypes = {
  film: filmProp,
};

export default AddReviewButton;
