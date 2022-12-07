const adaptToClient = (film) => {
  const adaptedProperties = {
    posterImage: film.poster_image,
    previewImage: film.preview_image,
    backgroundImage: film.background_image,
    backgroundColor: film.background_color,
    videoLink: film.video_link,
    previewVideoLink: film.preview_video_link,
    scoresCount: film.scores_count,
    runTime: film.run_time,
    isFavorite: film.is_favorite
  };

  const adaptedFilm = {...film, ...adaptedProperties};

  delete adaptedFilm.poster_image;
  delete adaptedFilm.preview_image;
  delete adaptedFilm.background_image;
  delete adaptedFilm.background_color;
  delete adaptedFilm.video_link;
  delete adaptedFilm.preview_video_link;
  delete adaptedFilm.scores_count;
  delete adaptedFilm.run_time;
  delete adaptedFilm.is_favorite;

  return adaptedFilm;
};

const adaptToServer = (film) => {
  const adaptedProperties = {
    'film_info': {
      'age_rating': film.ageRating,
      'alternative_title': film.alternativeTitle,
      'genre': film.genres,
      'release': {
        'date': film.releaseDate,
        'release_country': film.country,
      },
      'total_rating': film.rating,
      'actors': film.actors,
      'description': film.description,
      'director': film.director,
      'poster': film.poster,
      'runtime': film.runtime,
      'title': film.title,
      'writers': film.writers,
    },
    'user_details': {
      'watchlist': film.watchlist,
      'already_watched': film.watched,
      'watching_date': film.watchingDate,
      'favorite': film.favorite,
    },
  };

  const adaptedFilm = {...film, ...adaptedProperties};

  delete adaptedFilm.ageRating;
  delete adaptedFilm.alternativeTitle;
  delete adaptedFilm.genres;
  delete adaptedFilm.releaseDate;
  delete adaptedFilm.country;
  delete adaptedFilm.rating;
  delete adaptedFilm.actors;
  delete adaptedFilm.description;
  delete adaptedFilm.director;
  delete adaptedFilm.poster;
  delete adaptedFilm.runtime;
  delete adaptedFilm.title;
  delete adaptedFilm.writers;
  delete adaptedFilm.watchlist;
  delete adaptedFilm.watched;
  delete adaptedFilm.watchingDate;
  delete adaptedFilm.favorite;

  return adaptedFilm;
};

export {adaptToClient, adaptToServer};
