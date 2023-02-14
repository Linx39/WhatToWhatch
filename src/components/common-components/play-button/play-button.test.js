import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import PlayButton from './play-button';
import film from '../../../mock/film';

const mockStore = configureStore({});
jest.spyOn(redux, `useDispatch`);

it(`'PlayButton' should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <PlayButton film={film} />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Play/i)).toBeInTheDocument();
});
