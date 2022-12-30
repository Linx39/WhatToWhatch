import React from "react";

import {commentProp, commentsProp} from "../../props-types";

const Review = ({filmComment}) => {
  const {user, rating, comment, date} = filmComment;
  const {name} = user;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime="{date}">{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

const ReviewsCol = ({filmComments}) => {
  return (
    <div className="movie-card__reviews-col">
      {filmComments.map((filmComment) => {
        return (
          <Review
            key={filmComment.id}
            filmComment={filmComment}
          />
        );
      })}
    </div>
  );
};

const Reviews = ({filmComments}) => {
  const length = filmComments.length;
  const halfLength = Math.ceil(length / 2);

  return (
    <div className="movie-card__reviews movie-card__row">
      <ReviewsCol filmComments={filmComments.slice(0, halfLength)} />
      <ReviewsCol filmComments={filmComments.slice(halfLength, length)} />
    </div>
  );

};

Reviews.propTypes = {
  filmComments: commentsProp,
};

Review.propTypes = {
  filmComment: commentProp,
};

ReviewsCol.propTypes = {
  filmComments: commentsProp,
};

export default Reviews;
