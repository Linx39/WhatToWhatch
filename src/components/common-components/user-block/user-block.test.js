import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import UserBlock from './user-block';
import user from '../../../mock/user';
import {AuthorizationStatus} from '../../../const';

const mockStore = configureStore({});

describe(`Test UserBlock`, () => {
  it(`If user authorized should render 'UserBlockAvatar'`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user
      },
    });
    const history = createMemoryHistory();

    render(
        <Provider store={store}>
          <Router history={history}>
            <UserBlock />
          </Router>
        </Provider>
    );

    expect(screen.getByAltText(/User avatar/i)).toBeInTheDocument();
  });

  it(`If user not authorized should render 'UserBlockSignIn'`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });
    const history = createMemoryHistory();

    render(
        <Provider store={store}>
          <Router history={history}>
            <UserBlock />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
