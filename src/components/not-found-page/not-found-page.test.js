import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import NotFoundPage from './not-found-page';
import {AuthorizationStatus} from '../../const';
import user from '../../mock/user';

const mockStore = configureStore({});

it(`'NotFoundPage' should render correctly`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
      user,
    },
  });
  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <NotFoundPage />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
  expect(screen.getByText(/Вернуться на главную/i)).toBeInTheDocument();
});
