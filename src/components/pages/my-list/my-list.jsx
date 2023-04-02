import React from 'react';

import Header from '../../common-components/header/header';
import MoviesList from '../../common-components/movies-list/movies-list';
import Footer from '../../common-components/footer/footer';
import LoadingPage from '../info-page/loading-page/loading-page';
import ErrorPage from '../info-page/error-page/error-page';
import {fetchFavoriteFilms} from '../../../store/api-actions';
import {useFetchData} from '../../hoocks/use-fetch-data';
import {AdditionalClassName} from '../../../const';

const MyList = () => {
  const [
    {favoriteFilms},
    {isDataLoaded, isFetchingError, isNotFoundError}
  ] = useFetchData({fetchFavoriteFilms});

  if (!isDataLoaded && !isFetchingError) {
    return (
      <LoadingPage />
    );
  }

  if (isFetchingError && !isNotFoundError) {
    return (
      <ErrorPage />
    );
  }

  // if (isNotFoundError) {
  //   return (
  //     <NotFoundPage />
  //   );
  // }

  return (
    <div className="user-page">
      <Header additionalClassName={AdditionalClassName.HEADER.USER_PAGE}>
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList films={favoriteFilms} count={favoriteFilms.length} />
      </section>

      <Footer />
    </div>
  );
};

export default MyList;
