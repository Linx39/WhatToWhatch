import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import Stars from '../stars/stars';
import {filmProp} from '../../props-types';
import {fetchAddComment} from '../../../store/api-actions';
import {redirectToRoute} from '../../../store/action';
import {RATING_MAX, ReviewTextLength, Patch} from '../../../const';

const AddReviewForm = ({film}) => {
  const dispatch = useDispatch();
  const onAddComment = (id, userForm) => dispatch(fetchAddComment(id, userForm));
  const onRedirectToRoute = (url) => dispatch(redirectToRoute(url));

  const {id} = film;

  const onSubmit = (userForm) => {
    onAddComment(id, userForm);
    onRedirectToRoute(`${Patch.FILMS}/${id}`);
  };

  const [userForm, setUserForm] = useState({
    rating: RATING_MAX,
    comment: ``
  });

  const handleRatingChange = (evt) => {
    setUserForm({...userForm, rating: evt.target.value});
  };

  const handleCommentChange = (evt) => {
    setUserForm({...userForm, comment: evt.target.value});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(userForm);
  };

  const {rating, comment} = userForm;

  return (
    <div className="add-review">
      <form onSubmit={handleSubmit} action="#" className="add-review__form">
        <div className="rating">
          <Stars
            ratingValue={Number(rating)}
            onChange={handleRatingChange}
          />
        </div>

        <div className="add-review__text">
          <textarea
            value={comment}
            onChange={handleCommentChange}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text">
          </textarea>

          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={rating === 0 || comment.length < ReviewTextLength.MIN || comment.length > ReviewTextLength.MAX}
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
