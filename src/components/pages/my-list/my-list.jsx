import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import InfoPage from '../info-page/info-page';
import Header from '../../common-components/header/header';
import MoviesList from '../../common-components/movies-list/movies-list';
import Footer from '../../common-components/footer/footer';
import {fetchFavoriteFilms} from '../../../store/api-actions';
import {AdditionalClassName, FetchingStatus} from '../../../const';

const MyList = () => {
  const {favoriteFilms, isFavoriteFilmsLoading} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);

  if (isFavoriteFilmsLoading) {
    return <InfoPage fetchingStatus={FetchingStatus.LOADING} />;
  }

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
