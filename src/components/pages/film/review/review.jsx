import React from 'react';

import {commentProp} from '../../../../props-types';
import {formatDateInMMMMDDYYYY} from '../../../../utils';

const Review = ({filmComment}) => {
  const {user, rating, comment, date} = filmComment;
  const {name} = user;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime="{date}">{formatDateInMMMMDDYYYY(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

Review.propTypes = {
  filmComment: commentProp,
};

export default Review;
