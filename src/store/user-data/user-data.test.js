import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {
  initialState,
  userDataReducer,
  requireAuthorization,
  loadUserData
} from './user-data';
import {
  checkAuth,
  login,
  logout
} from '../api-actions';
import {ApiPath, AuthorizationStatus} from '../../const';
import {adaptUserToClient} from '../adapter';
import {mockUser} from '../../test-utils/test-data';

const api = createAPI(() => {});

describe(`Reducer 'user' should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(userDataReducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should update authorizationStatus to 'auth'`, () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH, user: {}};
    const requireAuthorizationAction = {
      type: requireAuthorization.type,
      payload: AuthorizationStatus.AUTH
    };

    expect(userDataReducer(state, requireAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH, user: {}});
  });

  it(`Reducer should update user data`, () => {
    const state = {authorizationStatus: AuthorizationStatus.AUTH, user: {}};
    const loadUserDataAction = {
      type: loadUserData.type,
      payload: mockUser
    };

    expect(userDataReducer(state, loadUserDataAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH, user: mockUser});
  });
});

describe(`Async operation work correctly`, () => {
  const fakeAdaptUserToClient = jest.fn((data) => adaptUserToClient(data));

  it(`Should make a correct API call for get to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();


    apiMock
      .onGet(ApiPath.LOGIN)
      .reply(200, mockUser);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: requireAuthorization.type,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: loadUserData.type,
          payload: fakeAdaptUserToClient(mockUser),
        });
      });
  });

  it(`Should make a correct API call for post to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `fake@fake.ru`, password: `12345`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(ApiPath.LOGIN)
      .reply(200, {fake: true});

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: requireAuthorization.type,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: loadUserData.type,
          payload: fakeAdaptUserToClient(mockUser),
        });
      });
  });

  it(`Should make a correct API call for get to /logout`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onGet(ApiPath.LOGOUT)
      .reply(200);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: requireAuthorization.type,
          payload: AuthorizationStatus.NO_AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: loadUserData.type,
          payload: {},
        });
      });
  });

});
