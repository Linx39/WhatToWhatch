import React from 'react';
import PropTypes from 'prop-types';

import {fetchComment} from '../../../store/api-actions';

const RATING_COUNT = 10;
const STAR = `star`;

const Star = ({rating, onChange}) => {
  return (
    <>
      <input onChange={onChange} className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating} />
      <label className="rating__label" htmlFor={`star-${rating}`}>{`Rating ${rating}`}</label>
    </>
  );
};

const Stars = ({onChange}) => {
  return new Array(RATING_COUNT).fill(null).map((item, i) => {
    return (
      <Star
        key={`${STAR}${i}`}
        rating={i + 1}
        onChange={onChange}
      />
    );
  });
};

const AddReviewForm = ({id}) => {
  const [userForm, setUserForm] = React.useState({
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
    console.log (`Вау!`);
    fetchComment(id, userForm.rating, userForm.comment);
    // .then(() => setUserForm({...userForm, rating: 0, comment: ``}));
  };

  return (
    <div className="add-review">
      <form onSubmit={handleSubmit} action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <Stars onChange={handleRatingChange} />
          </div>
        </div>

        <div className="add-review__text">
          <textarea onChange={handleCommentChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
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

Star.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddReviewForm;
