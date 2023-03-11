import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import ErrorPage from './error-page';

const mockStore = configureStore({});

it(`Loading should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <ErrorPage />
        </Router>
      </Provider>
  );

  expect(screen.getByText(/Loading .../i)).toBeInTheDocument();
});
