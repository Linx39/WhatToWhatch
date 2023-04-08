import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Footer from './footer';

const mockStore = configureStore({});

it(`Footer should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Footer isLogoClickable={true} />
        </Router>
      </Provider>
  );

  expect(screen.getByTestId(`test-logo`)).toBeInTheDocument();
  expect(screen.getAllByText(/W/)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/W/)[1]).toBeInTheDocument();
  expect(screen.getByText(/T/)).toBeInTheDocument();
  expect(screen.getByText(/© 2019 What to watch Ltd./i)).toBeInTheDocument();
});
