import React from 'react';
import PropTypes from 'prop-types';

const RATING_COUNT = 10;
const STAR = `star`;

const Star = (props) => {
  const {rating, onChange} = props;

  return (
    <>
      <input onChange={onChange} className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating} />
      <label className="rating__label" htmlFor={`star-${rating}`}>{`Rating ${rating}`}</label>
    </>
  );
};

const Stars = (props) => {
  const {onChange} = props;

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

const AddReviewForm = () => {
  const [userForm, setUserForm] = React.useState({
    rating: 0,
    comment: ``
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log (`Вау!`);
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setUserForm({...userForm, [name]: value});
    console.log (userForm);
  };

  return (
    <div className="add-review">
      <form onSubmit={handleSubmit} action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <Stars onChange={handleFieldChange} />
          </div>
        </div>

        <div className="add-review__text">
          <textarea onChange={handleFieldChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

Star.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddReviewForm;
