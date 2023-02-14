import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import UserBlockNoSign from './user-block-no-sign';

const mockStore = configureStore({});
jest.spyOn(redux, `useDispatch`);

it(`'UserBlockNoSign' should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <UserBlockNoSign />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
});
