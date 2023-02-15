import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import PlayButton from './play-button';
import films from '../../../mock/films';

const mockStore = configureStore({});
jest.spyOn(redux, `useDispatch`);

it(`'PlayButton' should render correctly`, () => {
  const film = films[6];
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
