import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {userData} from './user-data';
import {ActionType} from '../action';
import {checkAuth, login, logout} from '../api-actions';
import {AdditionalUrl, Patch, AuthorizationStatus} from '../../const';

const api = createAPI(() => {});

describe(`Reducer 'user' should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(userData(undefined, {}))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH, user: {}});
  });

  it(`Reducer should update authorizationStatus to 'auth'`, () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH, user: {}};
    const requireAuthorizationAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    };

    expect(userData(state, requireAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH, user: {}});
  });

});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call for get to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(AdditionalUrl.LOGIN)
      .reply(200, {fake: true});

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_USER_DATA,
          payload: {fake: true},
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API call for post to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(AdditionalUrl.LOGIN)
      .reply(200, {fake: true});

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_USER_DATA,
          payload: {fake: true},
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: Patch.MAIN,
        });
      });
  });

  it(`Should make a correct API call for get to /logout`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onGet(AdditionalUrl.LOGOUT)
      .reply(200);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_USER_DATA,
          payload: {},
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.NO_AUTH,
        });
      });
  });

});
