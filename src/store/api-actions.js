import {ActionCreator} from "./action";
import {adaptToClient} from "./adapter";
import {AuthorizationStatus, Url} from "../const";

const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(Url.FILMS)
    .then(({data}) => {
      const films = data.map((item) => adaptToClient(item));
      dispatch(ActionCreator.loadFilms(films));
    })
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export {fetchFilms, checkAuth, login};
