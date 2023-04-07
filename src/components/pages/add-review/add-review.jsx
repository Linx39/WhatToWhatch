import React from 'react';
import {useParams} from 'react-router-dom';

import AddReviewPage from './add-review-page/add-review-page';
import InfoPage from '../info-page/info-page';
import {fetchFilm} from '../../../store/api-actions';
import {useFetchData} from '../../hoocks/use-fetch-data';

const AddReview = () => {
  const {id} = useParams();
  const [
    {film},
    {isDataLoaded, isFetchingError, isNotFoundError}
  ] = useFetchData({fetchFilm, id});

  return (
    <>
      {isDataLoaded
        ? <AddReviewPage
          film={film}
        />
        : <InfoPage
          isFetchingError={isFetchingError}
          isNotFoundError={isNotFoundError}
        />
      }
    </>
  );
};

export default AddReview;
