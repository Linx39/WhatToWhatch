import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {initialState, userData} from './user-data';
import {ActionType} from '../action';
import {checkAuth, login, logout} from '../api-actions';
import {AdditionalUrl, AuthorizationStatus} from '../../const';
import {adaptUserToClient} from '../adapter';

const api = createAPI(() => {});

describe(`Reducer 'user' should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(userData(undefined, {}))
      .toEqual(initialState);
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

  it(`Reducer should update user data`, () => {
    const state = {authorizationStatus: AuthorizationStatus.AUTH, user: {}};
    const loadUserDataAction = {
      type: ActionType.LOAD_USER_DATA,
      payload: {fake: true}
    };

    expect(userData(state, loadUserDataAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH, user: {fake: true}});
  });
});

describe(`Async operation work correctly`, () => {
  const fakeResponse = {fake: true};
  const fakeAdaptUserToClient = jest.fn((data) => adaptUserToClient(data));

  it(`Should make a correct API call for get to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();


    apiMock
      .onGet(AdditionalUrl.LOGIN)
      .reply(200, fakeResponse);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_USER_DATA,
          payload: fakeAdaptUserToClient(fakeResponse),
        });
      });
  });

  it(`Should make a correct API call for post to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `fake@fake.ru`, password: `12345`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(AdditionalUrl.LOGIN)
      .reply(200, {fake: true});

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_USER_DATA,
          payload: fakeAdaptUserToClient(fakeResponse),
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
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.NO_AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_USER_DATA,
          payload: {},
        });
      });
  });

});
