import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import InfoPage from './info-page';

const mockStore = configureStore({});

it(`InfoPage should render correctly`, () => {
  const history = createMemoryHistory();
  const infoText = `mock-infoText`;
  const linkTo = `mock-Path`;
  const linkText = `mock-linkText`;

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <InfoPage
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
