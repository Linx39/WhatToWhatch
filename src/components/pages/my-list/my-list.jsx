import React from 'react';

import InfoPage from '../info-page/info-page';
import Header from '../../common-components/header/header';
import MoviesList from '../../common-components/movies-list/movies-list';
import Footer from '../../common-components/footer/footer';
import {useFetchData} from '../../hoocks/use-fetch-data';
import {fetchFavoriteFilms} from '../../../store/api-actions';
import {AdditionalClassName} from '../../../const';

const MyList = () => {
  const [
    {favoriteFilms},
    isDataLoaded,
    fetchingStatus
  ] = useFetchData({fetchFavoriteFilms});

  return (
    <>
      {isDataLoaded
        ? <div className="user-page">
          <Header additionalClassName={AdditionalClassName.HEADER.USER_PAGE}>
            <h1 className="page-title user-page__title">My list</h1>
          </Header>

          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <MoviesList films={favoriteFilms} count={favoriteFilms.length} />
          </section>

          <Footer />
        </div>

        : <InfoPage fetchingStatus={fetchingStatus} />
      }
    </>
  );
};

export default MyList;
