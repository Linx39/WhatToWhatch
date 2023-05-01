import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import ErrorPage from './error-page';
import {InfoText} from '../../../../const';

const mockStore = configureStore({});

it(`ErrorPage should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <ErrorPage />
        </Router>
      </Provider>
  );

  expect(screen.getByText(new RegExp(`${InfoText.SERVER_ERROR}`, `i`))).toBeInTheDocument();
});
