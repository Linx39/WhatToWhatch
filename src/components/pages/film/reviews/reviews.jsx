import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Review from '../review/review';
import InfoMessage from '../../../common-components/info-message/info-message';
import {fetchComments} from '../../../../store/api-actions';
import {
  getComments,
  getIsCommentsLoading,
  getCommentsError,
} from '../../../../store/app-data/selectors';
import {resetLoadedComments} from '../../../../store/app-data/app-data';
import {filmProp} from '../../../../props-types';
import {InfoText} from '../../../../const';

const COLUMNS_COUNT = 2;

const Reviews = ({film}) => {
  const {id} = film;
  const comments = useSelector(getComments);
  const isCommentsLoading = useSelector(getIsCommentsLoading);
  const commentsError = useSelector(getCommentsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(id));

    return () => {
      dispatch(resetLoadedComments());
    };
  }, [dispatch]);

  const length = comments.length;
  const commentsCount = Math.ceil(length / COLUMNS_COUNT);

  return (
    <div className="movie-card__reviews movie-card__row">
      {isCommentsLoading && <InfoMessage text={InfoText.LOADING} />}

      {commentsError && <InfoMessage text={InfoText.SERVER_ERROR} />}

      {(!isCommentsLoading && !commentsError) &&
        new Array(COLUMNS_COUNT).fill(null).map((value, index) => {
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
  film: filmProp,
};

export default Reviews;
