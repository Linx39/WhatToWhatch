export const adaptFilmToClient = (user) => {
  const adaptedProperties = {
    posterImage: user.poster_image,
    previewImage: user.preview_image,
    backgroundImage: user.background_image,
    backgroundColor: user.background_color,
    videoLink: user.video_link,
    previewVideoLink: user.preview_video_link,
    scoresCount: user.scores_count,
    runTime: user.run_time,
    isFavorite: user.is_favorite
  };

  const adaptedFilm = {...user, ...adaptedProperties};

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

export const adaptUserToClient = (user) => {
  const adaptedProperties = {
    avatarUrl: user.avatar_url,
  };

  const adaptedUser = {...user, ...adaptedProperties};

  delete adaptedUser.avatar_url;

  return adaptedUser;
};

// const adaptToServer = (user) => {
//   const adaptedProperties = {
//     'film_info': {
//       'age_rating': user.ageRating,
//       'alternative_title': user.alternativeTitle,
//       'genre': user.genres,
//       'release': {
//         'date': user.releaseDate,
//         'release_country': user.country,
//       },
//       'total_rating': user.rating,
//       'actors': user.actors,
//       'description': user.description,
//       'director': user.director,
//       'poster': user.poster,
//       'runtime': user.runtime,
//       'title': user.title,
//       'writers': user.writers,
//     },
//     'user_details': {
//       'watchlist': user.watchlist,
//       'already_watched': user.watched,
//       'watching_date': user.watchingDate,
//       'favorite': user.favorite,
//     },
//   };

//   const adaptedFilm = {...user, ...adaptedProperties};

//   delete adaptedFilm.ageRating;
//   delete adaptedFilm.alternativeTitle;
//   delete adaptedFilm.genres;
//   delete adaptedFilm.releaseDate;
//   delete adaptedFilm.country;
//   delete adaptedFilm.rating;
//   delete adaptedFilm.actors;
//   delete adaptedFilm.description;
//   delete adaptedFilm.director;
//   delete adaptedFilm.poster;
//   delete adaptedFilm.runtime;
//   delete adaptedFilm.title;
//   delete adaptedFilm.writers;
//   delete adaptedFilm.watchlist;
//   delete adaptedFilm.watched;
//   delete adaptedFilm.watchingDate;
//   delete adaptedFilm.favorite;

//   return adaptedFilm;
// };
