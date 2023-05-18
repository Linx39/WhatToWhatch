import React from 'react';
import PropTypes from 'prop-types';

import {ReviewSetting} from '../../../../const';
import './rating-stars.css';

const RatingStars = ({ratingValue, onChange, isSubmiting}) => {
  return (
    <div className="rating__stars">
      {new Array(ReviewSetting.RATING.MAX + 1)
        .fill(null)
        .map((item, index) => {
          const value = index;
          const id = `star-${value}`;

          return (
            <React.Fragment key={id}>
              <input
                value={value}
                onChange={onChange}
                checked={value === ratingValue}
                disabled={isSubmiting}
                className="rating__input"
                id={id}
                type="radio"
                name="rating"
              />
              <label
                className="rating__label"
                htmlFor={id}
              >
                Rating {value}
              </label>
            </React.Fragment>
          );
        })
      }
    </div>
  );
};

RatingStars.propTypes = {
  ratingValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  isSubmiting: PropTypes.bool.isRequired,
};

export default RatingStars;
