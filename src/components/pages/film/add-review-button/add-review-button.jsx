import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {redirectToRoute} from '../../../../store/action';
import {filmProp} from '../../../../props-types';
import {Patch} from '../../../../const';

const AddReviewButton = ({film}) => {
  const {id} = film;
  const dispatch = useDispatch();
  const handleAddReviewClick = () => dispatch(redirectToRoute((`${Patch.FILMS}/${id}/review`)));

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
