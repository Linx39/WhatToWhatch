import {
  loadFilms,
  loadFilm,
  loadPromoFilm,
  loadComments,
  loadFavoriteFilms,
  requireAuthorization,
  loadUserData,
} from './action';
import {adaptFilmToClient, adaptUserToClient} from './adapter';
import {AuthorizationStatus, AdditionalUrl} from '../const';

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
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${AdditionalUrl.FILMS}/${id}`)
    .then(({data}) => {
      const film = adaptFilmToClient(data);
      dispatch(loadFilm(film));
    })
    .catch(() => {
      dispatch(loadFilm(null));
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${AdditionalUrl.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(loadComments(data));
    })
    .catch(() => {
      dispatch(loadComments([]));
    })
);

export const fetchAddComment = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${AdditionalUrl.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => {
      dispatch(loadComments(data));
    })
);

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.FAVORITE)
    .then(({data}) => {
      const films = data.map((item) => adaptFilmToClient(item));
      dispatch(loadFavoriteFilms(films));
    })
);

export const fetchChangeFilmStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`${AdditionalUrl.FAVORITE}/${id}/${status}`)
    .then(({data}) => adaptFilmToClient(data))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.LOGIN)
    .then(({data}) => {
      const user = adaptUserToClient(data);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserData(user));
    })
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(AdditionalUrl.LOGIN, {email, password})
    .then(({data}) => {
      const user = adaptUserToClient(data);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserData(user));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.LOGOUT)
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
      dispatch(loadUserData({}));
    })
);
