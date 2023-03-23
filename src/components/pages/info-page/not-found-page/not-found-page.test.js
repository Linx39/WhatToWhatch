import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import NotFoundPage from './not-found-page';

const mockStore = configureStore({});

it(`NotFoundPage should render correctly`, () => {
  const store = mockStore({});
  const history = createMemoryHistory();

  render(
      <Provider store={store}>
        <Router history={history}>
          <NotFoundPage />
        </Router>
      </Provider>
  );

  expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
  expect(screen.getByText(/Вернуться на главную/i)).toBeInTheDocument();
});