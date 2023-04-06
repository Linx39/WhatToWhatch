import React from 'react';

import MyListPage from './my-list-page/my-list-page';
import InfoPage from '../info-page/info-page';
import {fetchFavoriteFilms} from '../../../store/api-actions';
import {useFetchData} from '../../hoocks/use-fetch-data';

const MyList = () => {
  const [
    {favoriteFilms},
    {isDataLoaded, isFetchingError, isNotFoundError}
  ] = useFetchData({fetchFavoriteFilms});

  return (
    <>
      {isDataLoaded
        ? <MyListPage
          favoriteFilms={favoriteFilms}
        />
        : <InfoPage
          isDataLoaded={isDataLoaded}
          isFetchingError={isFetchingError}
          isNotFoundError={isNotFoundError}
        />
      }
    </>
  );
};

export default MyList;
