import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import LoadingPage from './loading-page';
import {InfoText} from '../../../../const';

const mockStore = configureStore({});

it(`LoadingPage should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <LoadingPage />
        </Router>
      </Provider>
  );

  expect(screen.getByText(new RegExp(`${InfoText.LOADING}`, `i`))).toBeInTheDocument();
});