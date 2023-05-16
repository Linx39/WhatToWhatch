import React from 'react';

import Header from '../../../common-components/header/header';
import MovieCardBig from '../../../common-components/movie-card-big/movie-card-big';
import MovieCardPoster from '../../../common-components/movie-card-poster/movie-card-poster';
import MovieCardMeta from '../../../common-components/movie-card-meta/movie-card-meta';
import PlayButton from '../../../common-components/play-button/play-button';
import FavoriteButton from '../../../common-components/favorite-button/favorite-button';
import {loadPromoFilm} from '../../../../store/app-data/app-data';
import {filmProp} from '../../../../props-types';

const PromoFilm = ({film}) => {

  return (
    <section className='movie-card'>
      <MovieCardBig film={film} />

      <h1 className="visually-hidden">WTW</h1>

      <Header isLogoClickable={false} />

      <div className='movie-card__wrap'>
        <div className='movie-card__info'>
          <MovieCardPoster film={film} />

          <div className='movie-card__desc'>
            <MovieCardMeta film={film} />

            <div className='movie-card__buttons'>
              <PlayButton film={film}/>

              <FavoriteButton film={film} onLoadData={loadPromoFilm} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PromoFilm.propTypes = {
  film: filmProp,
};

export default PromoFilm;
