import React from 'react';
import PropTypes from 'prop-types';

import AddReviewButton from '../add-review-button/add-review-button';
import PlayButton from '../../common-components/play-button/play-button';
import AddFavoriteButton from '../../common-components/add-favorite-button/add-favorite-button';
import {filmProp} from "../../props-types";
import {AuthorizationStatus, AddFavoriteFetchType} from '../../../const';

const MovieCardDesc = ({film, authorizationStatus}) => {
  const {name, genre, released} = film;

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__desc">
        <h2 className="movie-card__title">{name}</h2>
        <p className="movie-card__meta">
          <span className="movie-card__genre">{genre}</span>
          <span className="movie-card__year">{released}</span>
        </p>

        <div className="movie-card__buttons">
          <PlayButton film={film}/>

          <AddFavoriteButton film={film} fetchType={AddFavoriteFetchType.FILM} />

          {
            authorizationStatus === AuthorizationStatus.AUTH
            &&
            <AddReviewButton film={film}/>
          }
        </div>
      </div>
    </div>
  );
};

MovieCardDesc.propTypes = {
  film: filmProp,
  authorizationStatus: PropTypes.string.isRequired,
};

export default MovieCardDesc;
