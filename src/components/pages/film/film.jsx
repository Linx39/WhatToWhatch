import React from 'react';
import {useParams} from 'react-router-dom';

import FilmPage from './film-page/film-page';
import InfoPage from '../info-page/info-page';
import {fetchFilms, fetchFilm, fetchComments} from '../../../store/api-actions';
import {useFetchData} from '../../hoocks/use-fetch-data';

const Film = () => {
  const {id} = useParams();
  const [
    {films, film, comments},
    {isDataLoaded, isFetchingError, isNotFoundError}
  ] = useFetchData({fetchFilms, fetchFilm, fetchComments, id});

  return (
    <>
      {isDataLoaded
        ? <FilmPage
          films={films}
          film={film}
          comments={comments}
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

export default Film;
