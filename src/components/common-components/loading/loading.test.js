import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import Loading from './loading';

const mockStore = configureStore({});

it(`'Loading' should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <Loading />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Loading .../i)).toBeInTheDocument();
});
