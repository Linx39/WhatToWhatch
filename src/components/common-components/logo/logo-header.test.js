import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import LogoHeader from './logo-header';

const mockStore = configureStore({});

it(`LogoHeader should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <LogoHeader isActive={true} />
        </Router>
      </Provider>
  );

  expect(screen.getByTestId(`test-logo`)).toBeInTheDocument();
  expect(screen.getAllByText(/W/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/W/i)[1]).toBeInTheDocument();
  expect(screen.getByText(/T/i)).toBeInTheDocument();
});
