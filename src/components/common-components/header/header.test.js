import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Header from './header';

const mockStore = configureStore({});

it(`Header should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Header
            additionalClassName={``}
            isLogoClickable={true}
            isUserBlock={false}
          />
        </Router>
      </Provider>
  );

  expect(screen.getByTestId(`test-logo`)).toBeInTheDocument();
  expect(screen.getAllByText(/W/)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/W/)[1]).toBeInTheDocument();
  expect(screen.getByText(/T/)).toBeInTheDocument();
});
