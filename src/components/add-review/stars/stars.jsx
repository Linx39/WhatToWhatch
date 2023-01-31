import React from 'react';
import PropTypes from 'prop-types';

import {RATING_MAX} from '../../../const';

const Stars = ({ratingValue, onChange}) => {
  return (
    <div className="rating__stars">
      {new Array(RATING_MAX)
        .fill(null)
        .map((item, index) => {
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
        })
      }
    </div>
  );
};

Stars.propTypes = {
  ratingValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Stars;
