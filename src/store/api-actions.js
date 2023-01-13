import {loadFilms, loadFilm, loadComments, requireAuthorization, redirectToRoute} from './action';
import {adaptFilmToClient} from './adapter';
import {AuthorizationStatus, AdditionalUrl, Patch} from '../const';

const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.FILMS)
    .then(({data}) => {
      const films = data.map((item) => adaptFilmToClient(item));
      dispatch(loadFilms(films));
    })
);

const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${AdditionalUrl.FILMS}/${id}`)
    .then(({data}) => {
      const film = adaptFilmToClient(data);
      dispatch(loadFilm(film));
    })
    .catch(() => dispatch(redirectToRoute(Patch.MAIN)))
);

const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${AdditionalUrl.COMMENTS}/${id}`)
    .then(({data}) => {
      // const comments = data.map((item) => adaptCommentsToClient(item));
      dispatch(loadComments(data));
    })
    .catch(() => {})
);

const fetchComment = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${AdditionalUrl.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => dispatch(loadComments(data)))
    .catch(() => {})
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(AdditionalUrl.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(Patch.MAIN)))
);

const logout = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.LOGOUT)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export {fetchFilms, fetchFilm, fetchComments, fetchComment, checkAuth, login, logout};
