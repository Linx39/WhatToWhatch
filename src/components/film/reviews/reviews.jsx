import React from "react";

import Review from "../review/review";
import {commentsProp} from "../../props-types";

const COLUMNS_COUNT = 2;

// const ReviewsCol = ({comments}) => {
//   return (
//     <div className="movie-card__reviews-col">
//       {comments.map((comment) => {
//         return (
//           <Review
//             key={comment.id}
//             filmComment={comment}
//           />
//         );
//       })}
//     </div>
//   );
// };

const Reviews = ({comments}) => {
  const length = comments.length;
  const commentsCount = Math.ceil(length / COLUMNS_COUNT);

  return (
    <div className="movie-card__reviews movie-card__row">
      {new Array(COLUMNS_COUNT).fill(null).map((value, index) => {
        const filmComments = comments.slice(commentsCount * index, commentsCount * (index + 1));

        return (
          <div key={`col-${index}`} className="movie-card__reviews-col">
            {filmComments.map((comment) => {

              return (
                <Review
                  key={comment.id}
                  filmComment={comment}
                />
              );
            })}
          </div>
        );
      })
      }
      {/* <ReviewsCol comments={comments.slice(0, commentsInColumnsCount)} />
      <ReviewsCol comments={comments.slice(commentsInColumnsCount, length)} /> */}
    </div>
  );

};

Reviews.propTypes = {
  comments: commentsProp,
};

// ReviewsCol.propTypes = {
//   comments: commentsProp,
// };

export default Reviews;
