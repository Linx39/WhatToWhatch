import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import SignIn from './sign-in';
import {AuthorizationStatus} from '../../../const';

const mockStore = configureStore({});

it(`SignIn should render correctly`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });
  const history = createMemoryHistory();

  render(
      <Provider store={store}>
        <Router history={history}>
          <SignIn />
        </Router>
      </Provider>
  );

  expect(screen.getAllByText(/Sign in/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/Sign in/i)[1]).toBeInTheDocument();
  expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
});
