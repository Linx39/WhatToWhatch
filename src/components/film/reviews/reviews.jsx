import React from "react";
import PropTypes from 'prop-types';

import Review from "../review/review";
import {commentProp} from "../../props-types";

const COLUMNS_COUNT = 2;

const Reviews = ({comments}) => {
  const length = comments.length;
  const commentsCount = Math.ceil(length / COLUMNS_COUNT);

  return (
    <div className="movie-card__reviews movie-card__row">
      {new Array(COLUMNS_COUNT).fill(null).map((value, index) => {
        const filmComments = comments.slice(commentsCount * index, commentsCount * (index + 1));

        return (
          <div key={`col-${index}`} className="movie-card__reviews-col" data-testid={`test-col-${index}`}>
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
      })
      }
    </div>
  );

};

Reviews.propTypes = {
  comments: PropTypes.arrayOf(commentProp).isRequired,
};

export default Reviews;
