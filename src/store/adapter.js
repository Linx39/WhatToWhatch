export const adaptFilmToClient = (film) => ({
  id: film.id,
  name: film.name,
  posterImage: film.poster_image,
  previewImage: film.preview_image,
  backgroundImage: film.background_image,
  backgroundColor: film.background_color,
  videoLink: film.video_link,
  previewVideoLink: film.preview_video_link,
  description: film.description,
  rating: film.rating,
  scoresCount: film.scores_count,
  director: film.director,
  starring: film.starring,
  runTime: film.run_time,
  genre: film.genre,
  released: film.released,
  isFavorite: film.is_favorite,
});

export const adaptFilmsToClient = (films) => films.map((film) => adaptFilmToClient(film));

export const adaptUserToClient = (user) => ({
  id: user.id,
  email: user.email,
  name: user.name,
  avatarUrl: user.avatar_url,
});
