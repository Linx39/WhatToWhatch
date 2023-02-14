import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import Logo from './logo';

const mockStore = configureStore({});
jest.spyOn(redux, `useDispatch`);

it(`'Logo' should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <Logo isAddClass={true} isClickable={false} />
        </Router>
      </redux.Provider>
  );

  expect(screen.getAllByText(/W/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/W/i)[1]).toBeInTheDocument();
  expect(screen.getByText(/T/i)).toBeInTheDocument();
});
