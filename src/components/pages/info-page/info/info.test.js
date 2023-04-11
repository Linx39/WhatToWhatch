import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Info from './info';

const mockStore = configureStore({});

it(`Info should render correctly`, () => {
  const store = mockStore({});
  const history = createMemoryHistory();
  const infoText = `mock-infoText`;
  const linkTo = `mock-Path`;
  const linkText = `mock-linkText`;

  render(
      <Provider store={store}>
        <Router history={history}>
          <Info
            infoText={infoText}
            linkTo={linkTo}
            linkText={linkText}
          />
        </Router>
      </Provider>
  );

  expect(screen.getByText(new RegExp(`${infoText}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${linkText}`, `i`))).toBeInTheDocument();
});
