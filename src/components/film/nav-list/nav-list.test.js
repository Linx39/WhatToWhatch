import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import NavList from './nav-list';
import {NavItem} from '../../../const';
const mockStore = configureStore({});
// jest.spyOn(redux, `useDispatch`);

it(`'NavList' should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <NavList activeNavItem={NavItem.DETAILS} onClick={() => {}}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Overview/i)).toBeInTheDocument();
  expect(screen.getByText(/Details/i)).toBeInTheDocument();
  expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
});
