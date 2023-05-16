import {
  loadFilms,
  loadFilm,
  loadPromoFilm,
  loadComments,
  loadFavoriteFilms,
} from './app-data/app-data';
import {
  requireAuthorization,
  loadUserData,
} from './user-data/user-data';
import {adaptFilmToClient, adaptFilmsToClient, adaptUserToClient} from './adapter';
import {AuthorizationStatus, ApiPath, ResponseStatus} from '../const';

const getErrorResponseStatus = (err) => err.response ? err.response.status : ResponseStatus.SERVER_ERROR;

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(ApiPath.FILMS)
    .then(({data}) => {
      dispatch(loadFilms({data: adaptFilmsToClient(data)}));
    })
    .catch((err) => {
      dispatch(loadFilms({error: getErrorResponseStatus(err)}));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`${ApiPath.FILMS}/promo`)
    .then(({data}) => {
      dispatch(loadPromoFilm({data: adaptFilmToClient(data)}));
    })
    .catch((err) => {
      dispatch(loadPromoFilm({error: getErrorResponseStatus(err)}));
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiPath.FILMS}/${id}`)
    .then(({data}) => {
      dispatch(loadFilm({data: adaptFilmToClient(data)}));
    })
    .catch((err) => {
      dispatch(loadFilm({error: getErrorResponseStatus(err)}));
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiPath.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(loadComments({data}));
    })
    .catch((err) => {
      dispatch(loadComments({error: getErrorResponseStatus(err)}));
    })
);

export const fetchAddComment = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${ApiPath.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => {
      dispatch(loadComments({data}));
    })
    .catch((err) => getErrorResponseStatus(err))
);

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(ApiPath.FAVORITE)
    .then(({data}) => {
      dispatch(loadFavoriteFilms({data: adaptFilmsToClient(data)}));
    })
    .catch((err) => {
      dispatch(loadFavoriteFilms({error: getErrorResponseStatus(err)}));
    })
);

export const fetchChangeFilmStatus = (id, status, loadData) => (dispatch, _getState, api) => (
  api.post(`${ApiPath.FAVORITE}/${id}/${status}`)
    .then(({data}) => {
      dispatch(loadData({data: adaptFilmToClient(data)}));
    })
    .catch(() => {})
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiPath.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserData(adaptUserToClient(data)));
    })
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

export const login = (user) => (dispatch, _getState, api) => (
  api.post(ApiPath.LOGIN, user)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserData(adaptUserToClient(data)));
    })
    .catch((err) => getErrorResponseStatus(err))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(ApiPath.LOGOUT)
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
      dispatch(loadUserData({}));
    })
);
