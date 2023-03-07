import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import Stars from '../stars/stars';
import {filmProp} from '../../props-types';
import {fetchAddComment} from '../../../store/api-actions';
import {redirectToRoute} from '../../../store/action';
import {ReviewTextLength, Patch} from '../../../const';

const AddReviewForm = ({film}) => {
  const dispatch = useDispatch();
  const onAddComment = (id, userForm) => dispatch(fetchAddComment(id, userForm));
  const onRedirectToRoute = (url) => dispatch(redirectToRoute(url));

  const [userForm, setUserForm] = useState({
    rating: null,
    comment: ``
  });

  const [isSubmiting, setIsSubmiting] = useState(false);

  const {id} = film;

  const handleRatingChange = (evt) => {
    setUserForm({...userForm, rating: evt.target.value});
  };

  const handleCommentChange = (evt) => {
    setUserForm({...userForm, comment: evt.target.value});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSubmiting(true);

    onAddComment(id, userForm)
      .then(() => {
        setIsSubmiting(false);
        onRedirectToRoute(`${Patch.FILMS}/${id}`);
      })
      .catch(() => {
        setIsSubmiting(false);
      });
  };

  const {rating, comment} = userForm;

  return (
    <div className="add-review">
      <form onSubmit={handleSubmit} action="#" className="add-review__form">
        <div className="rating">
          <Stars
            ratingValue={Number(rating)}
            onChange={handleRatingChange}
            isSubmiting={isSubmiting}
          />
        </div>

        <div className="add-review__text">
          <textarea
            value={comment}
            onChange={handleCommentChange}
            disabled={isSubmiting}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            data-testid="review"
          >
          </textarea>

          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={
                !rating ||
                comment.length < ReviewTextLength.MIN ||
                comment.length > ReviewTextLength.MAX ||
                isSubmiting
              }
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

AddReviewForm.propTypes = {
  film: filmProp,
};

export default AddReviewForm;
