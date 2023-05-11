import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import RatingStars from '../rating-stars/rating-stars';
import {fetchAddComment} from '../../../../store/api-actions';
import {redirectToRoute} from '../../../../store/action';
import {filmProp} from '../../../../props-types';
import {ReviewSetting, AppRoute} from '../../../../const';

const MessageText = {
  ERROR_SUBMITING: `Comment was not added, please try again`,
  SUBMITING: `Submiting...`
};

const AddReviewForm = ({film}) => {
  const {id} = film;
  const [userForm, setUserForm] = useState({rating: ReviewSetting.RATING.DEFAULT, comment: ``});
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isErrorSubmiting, setIsErrorSubmiting] = useState(false);
  const dispatch = useDispatch();

  const handleRatingChange = (evt) => setUserForm({...userForm, rating: evt.target.value});
  const handleCommentChange = (evt) => setUserForm({...userForm, comment: evt.target.value});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSubmiting(true);

    dispatch(fetchAddComment(id, userForm))
      .then((errorResponseStatus) => {
        if (errorResponseStatus) {
          setIsSubmiting(false);
          setIsErrorSubmiting(true);
          return;
        }

        dispatch(redirectToRoute(`${AppRoute.FILMS}/${id}`));
      });
  };

  const {rating, comment} = userForm;

  const isCommentCorrect = comment.length >= ReviewSetting.TEXT_LENGTH.MIN && comment.length <= ReviewSetting.TEXT_LENGTH.MAX;

  const isAddReviewButtonDisabled = !rating || !isCommentCorrect || isSubmiting;

  return (
    <div className="add-review">
      <form onSubmit={handleSubmit} action="#" className="add-review__form">
        <div className="rating">
          <RatingStars
            ratingValue={+rating}
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
              disabled={isAddReviewButtonDisabled}
            >
              Post
            </button>
          </div>
        </div>

        {isSubmiting && <p className="add-review__textarea">{MessageText.SUBMITING}</p>}

        {isErrorSubmiting && <p className="add-review__textarea">{MessageText.ERROR_SUBMITING}</p>}
      </form>
    </div>
  );
};

AddReviewForm.propTypes = {
  film: filmProp,
};

export default AddReviewForm;
