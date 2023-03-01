import {
  loadFilms,
  loadFilm,
  loadPromoFilm,
  loadComments,
  loadFavoriteFilms,
  requireAuthorization,
  loadUserData,
  redirectToRoute,
} from './action';
import {adaptFilmToClient, adaptUserToClient} from './adapter';
import {AuthorizationStatus, AdditionalUrl, Patch, AddFavoriteFetchType} from '../const';

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.FILMS)
    .then(({data}) => {
      const films = data.map((item) => adaptFilmToClient(item));
      dispatch(loadFilms(films));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`${AdditionalUrl.FILMS}/promo`)
    .then(({data}) => {
      const film = adaptFilmToClient(data);
      dispatch(loadPromoFilm(film));
    })
    .catch(() => {})
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${AdditionalUrl.FILMS}/${id}`)
    .then(({data}) => {
      const film = adaptFilmToClient(data);
      dispatch(loadFilm(film));
    })
    .catch(() => dispatch(redirectToRoute(Patch.MAIN)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${AdditionalUrl.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(loadComments(data));
    })
    .catch(() => {})
);

export const fetchAddComment = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${AdditionalUrl.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => dispatch(loadComments(data)))
    .catch(() => {})
);

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.FAVORITE)
    .then(({data}) => {
      const films = data.map((item) => adaptFilmToClient(item));
      dispatch(loadFavoriteFilms(films));
    })
);

export const fetchAddFavoriteFilm = (id, status, fetchType) => (dispatch, _getState, api) => (
  api.post(`${AdditionalUrl.FAVORITE}/${id}/${status}`)
    .then(({data}) => {
      const film = adaptFilmToClient(data);

      switch (fetchType) {
        case AddFavoriteFetchType.FILM:
          dispatch(loadFilm(film));
          break;

        case AddFavoriteFetchType.PROMO_FILM:
          dispatch(loadPromoFilm(film));
          break;

        default:
          throw new Error(`Unknown switch case expression: '${fetchType}'!`);
      }
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.LOGIN)
    .then(({data}) => {
      const user = adaptUserToClient(data);
      dispatch(loadUserData(user));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(AdditionalUrl.LOGIN, {email, password})
    .then(({data}) => {
      const user = adaptUserToClient(data);
      dispatch(loadUserData(user));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(Patch.MAIN)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.LOGOUT)
    .then(() => dispatch(loadUserData({})))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);
