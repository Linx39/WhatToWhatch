import React from 'react';

import PlayButton from '../../../common-components/play-button/play-button';
import AddFavoriteButton from '../../../common-components/add-favorite-button/add-favorite-button';
import {filmProp} from '../../../../props-types';
import {AddFavoriteFetchType} from '../../../../const';

const PromoFilm = ({film}) => {
  const {name, posterImage, genre, released} = film;

  return (
    <div className='movie-card__wrap'>
      <div className='movie-card__info'>
        <div className='movie-card__poster'>
          <img src={posterImage} alt={`${name} poster`} width='218' height='327' />
        </div>

        <div className='movie-card__desc'>
          <h2 className='movie-card__title'>{name}</h2>
          <p className='movie-card__meta'>
            <span className='movie-card__genre'>{genre}</span>
            <span className='movie-card__year'>{released}</span>
          </p>

          <div className='movie-card__buttons'>
            <PlayButton film={film}/>

            <AddFavoriteButton film={film} fetchType={AddFavoriteFetchType.PROMO_FILM} />
          </div>
        </div>
      </div>
    </div>
  );
};

PromoFilm.propTypes = {
  film: filmProp,
};

export default PromoFilm;
