import React from "react";

import comments from "../../mocks/comments";

import {filmProp, commentProp, commentsProp} from "../props-types";

const Review = (props) => {
  const {filmComment} = props;
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

const ReviewsCol = (props) => {
  const {filmComments} = props;

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

const Reviews = (props) => {
  const {film} = props;
  const filmComments = comments.filter((comment) => comment.user.id === film.id);

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
  film: filmProp,
};

Review.propTypes = {
  filmComment: commentProp,
};

ReviewsCol.propTypes = {
  filmComments: commentsProp,
};

export default Reviews;
