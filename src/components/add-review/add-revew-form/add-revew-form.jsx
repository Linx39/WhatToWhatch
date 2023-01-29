import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import {fetchAddComment} from '../../../store/api-actions';

const RATING_MAX = 10;

const Stars = ({ratingValue, onChange}) => {
  return (
    <div className="rating__stars">
      {new Array(RATING_MAX).fill(null).map((item, index) => {
        const value = index + 1;
        const id = `star-${value}`;

        return (
          <React.Fragment key={id}>
            <input
              value={value}
              onChange={onChange}
              checked={value === ratingValue}
              className="rating__input"
              id={id}
              type="radio"
              name="rating"
            />
            <label
              className="rating__label"
              htmlFor={id}>
              {`Rating ${value}`}
            </label>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const AddReviewForm = ({id}) => {
  const dispatch = useDispatch();

  const onSubmit = (userForm) => {
    dispatch(fetchAddComment(id, userForm));
  };

  const [userForm, setUserForm] = useState({
    rating: 0,
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
    setUserForm({rating: 0, comment: ``});
  };

  return (
    <div className="add-review">
      <form onSubmit={handleSubmit} action="#" className="add-review__form">
        <div className="rating">
          {/* <div className="rating__stars"> */}
            <Stars
              ratingValue={Number(userForm.rating)}
              onChange={handleRatingChange}
            />
          {/* </div> */}
        </div>

        <div className="add-review__text">
          <textarea
            value={userForm.comment}
            onChange={handleCommentChange}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text">
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

AddReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
};

Stars.propTypes = {
  ratingValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddReviewForm;
