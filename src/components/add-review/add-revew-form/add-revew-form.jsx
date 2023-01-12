import React, {useState} from 'react';
import PropTypes from 'prop-types';

const RATING_COUNT = 10;

const Stars = ({onChange, ratingValue}) => {
  return new Array(RATING_COUNT).fill(null).map((item, i) => {
    const value = i + 1;
    return (
      <React.Fragment key={`star${value}`}>
        <input
          value={value}
          onChange={onChange}
          checked={value === ratingValue}
          className="rating__input"
          id={`star-${value}`}
          type="radio"
          name="rating"
        />
        <label
          className="rating__label"
          htmlFor={`star-${value}`}>
          {`Rating ${value}`}
        </label>
      </React.Fragment>
    );
  });
};

const AddReviewForm = ({id, onSubmit}) => {
  const [userForm, setUserForm] = useState({
    rating: RATING_COUNT,
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
    onSubmit(id, userForm);
    setUserForm({rating: RATING_COUNT, comment: ``});
  };

  return (
    <div className="add-review">
      <form onSubmit={handleSubmit} action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <Stars
              ratingValue={Number(userForm.rating)}
              onChange={handleRatingChange}
            />
          </div>
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
  onSubmit: PropTypes.func.isRequired,
};

Stars.propTypes = {
  ratingValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddReviewForm;
