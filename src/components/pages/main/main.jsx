import React from 'react';

import MainPage from './main-page/main-page';
import InfoPage from '../info-page/info-page';
import {fetchFilms, fetchPromoFilm} from '../../../store/api-actions';
import {useFetchData} from '../../hoocks/use-fetch-data';

const Main = () => {
  const [
    {films, promoFilm},
    {isDataLoaded, isFetchingError, isNotFoundError}
  ] = useFetchData({fetchFilms, fetchPromoFilm});

  return (
    <>
      {isDataLoaded
        ? <MainPage
          films={films}
          promoFilm={promoFilm}
        />
        : <InfoPage
          isFetchingError={isFetchingError}
          isNotFoundError={isNotFoundError}
        />
      }
    </>
  );
};

export default Main;
