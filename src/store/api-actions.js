import {ActionCreator} from './action';
import {adaptFilmToClient} from './adapter';
import {AuthorizationStatus, AdditionalUrl, Patch} from '../const';

const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.FILMS)
    .then(({data}) => {
      const films = data.map((item) => adaptFilmToClient(item));
      dispatch(ActionCreator.loadFilms(films));
    })
);

const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${AdditionalUrl.FILMS}/${id}`)
    .then(({data}) => {
      const film = adaptFilmToClient(data);
      dispatch(ActionCreator.loadFilm(film));
    })
    .catch(() => dispatch(ActionCreator.redirectToRoute(Patch.MAIN)))
);

const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${AdditionalUrl.COMMENTS}/${id}`)
    .then(({data}) => {
      // const comments = data.map((item) => adaptCommentsToClient(item));
      dispatch(ActionCreator.loadComments(data));
    })
    .catch(() => {})
);

const fetchComment = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${AdditionalUrl.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
    .catch(() => {})
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(AdditionalUrl.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(Patch.MAIN)))
);

const logout = () => (dispatch, _getState, api) => (
  api.get(AdditionalUrl.LOGOUT)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export {fetchFilms, fetchFilm, fetchComments, fetchComment, checkAuth, login, logout};
