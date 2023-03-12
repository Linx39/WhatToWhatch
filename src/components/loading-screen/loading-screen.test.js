import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import LoadingScreen from './loading-screen';

const mockStore = configureStore({});

it(`LoadingScreen should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <LoadingScreen />
        </Router>
      </Provider>
  );

  expect(screen.getByText(/Loading .../i)).toBeInTheDocument();
});
