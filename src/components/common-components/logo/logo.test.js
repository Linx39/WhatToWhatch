import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Logo from './logo';

const mockStore = configureStore({});

it(`Logo should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Logo isActive={true} className={``} />
        </Router>
      </Provider>
  );

  expect(screen.getByTestId(`test-logo`)).toBeInTheDocument();
  expect(screen.getAllByText(/W/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/W/i)[1]).toBeInTheDocument();
  expect(screen.getByText(/T/i)).toBeInTheDocument();
});
