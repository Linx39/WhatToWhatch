import React from 'react';
import PropTypes from 'prop-types';

import AddReviewButton from '../add-review-button/add-review-button';
import PlayButton from '../../../common-components/play-button/play-button';
import FavoriteButton from '../../../common-components/favorite-button/favorite-button';
import {loadFilm} from '../../../../store/action';
import {filmProp} from "../../../../props-types";
import {AuthorizationStatus} from '../../../../const';

const MovieCardDesc = ({film, authorizationStatus}) => {
  const {name, genre, released} = film;

  const handleLoadFilm = (data) => loadFilm(data);

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

          <FavoriteButton film={film} onLoadData={handleLoadFilm} />

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
