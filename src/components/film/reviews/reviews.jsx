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

const ReviewsCol = ({comments}) => {
  return (
    <div className="movie-card__reviews-col">
      {comments.map((comment) => {
        return (
          <Review
            key={comment.id}
            filmComment={comment}
          />
        );
      })}
    </div>
  );
};

const Reviews = ({comments}) => {
  const length = comments.length;
  const halfLength = Math.ceil(length / 2);

  return (
    <div className="movie-card__reviews movie-card__row">
      <ReviewsCol comments={comments.slice(0, halfLength)} />
      <ReviewsCol comments={comments.slice(halfLength, length)} />
    </div>
  );

};

Reviews.propTypes = {
  comments: commentsProp,
};

Review.propTypes = {
  filmComment: commentProp,
};

ReviewsCol.propTypes = {
  comments: commentsProp,
};

export default Reviews;
