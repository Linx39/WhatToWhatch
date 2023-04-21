import {
  loadFilms,
  loadFilm,
  loadPromoFilm,
  loadComments,
  loadFavoriteFilms,
  requireAuthorization,
  loadUserData,
  setErrorAuthorization,
} from './action';
import {adaptFilmToClient, adaptUserToClient} from './adapter';
import {AuthorizationStatus, AdditionalUrl, ResponseStatus} from '../const';

const getErrorStatus = (err) => err.response ? err.response.status : ResponseStatus.SERVER_ERROR;

const adaptFilmsToClient = (data) => data.map((item) => adaptFilmToClient(item));

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.FILMS)
    .then(({data}) => {
      dispatch(loadFilms({data: adaptFilmsToClient(data)}));
    })
    .catch((err) => {
      dispatch(loadFilms({error: getErrorStatus(err)}));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`${AdditionalUrl.FILMS}/promo`)
    .then(({data}) => {
      dispatch(loadPromoFilm({data: adaptFilmToClient(data)}));
    })
    .catch((err) => {
      dispatch(loadPromoFilm({error: getErrorStatus(err)}));
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${AdditionalUrl.FILMS}/${id}`)
    .then(({data}) => {
      dispatch(loadFilm({data: adaptFilmToClient(data)}));
    })
    .catch((err) => {
      dispatch(loadFilm({error: getErrorStatus(err)}));
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${AdditionalUrl.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(loadComments({data}));
    })
    .catch((err) => {
      dispatch(loadComments({error: getErrorStatus(err)}));
    })
);

export const fetchAddComment = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${AdditionalUrl.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => {
      dispatch(loadComments({data}));
    })
);

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.FAVORITE)
    .then(({data}) => {
      dispatch(loadFavoriteFilms({data: adaptFilmsToClient(data)}));
    })
    .catch((err) => {
      dispatch(loadFavoriteFilms({error: getErrorStatus(err)}));
    })
);

export const fetchChangeFilmStatus = (id, status, loadData) => (dispatch, _getState, api) => (
  api.post(`${AdditionalUrl.FAVORITE}/${id}/${status}`)
    .then(({data}) => {
      dispatch(loadData({data: adaptFilmToClient(data)}));
    })
    .catch(() => {})
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserData(adaptUserToClient(data)));
    })
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

export const login = (user) => (dispatch, _getState, api) => (
  api.post(AdditionalUrl.LOGIN, user)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserData(adaptUserToClient(data)));
    })
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.LOGOUT)
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
      dispatch(loadUserData({}));
    })
);
