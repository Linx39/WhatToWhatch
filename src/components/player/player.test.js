import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import Player from './player';
import films from '../../mock/films';

const mockStore = configureStore({});
jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);
// jest.spyOn(redux, `play`);

it(`'Player' should render correctly`, () => {
  const film = films[6];
  const store = mockStore({
    DATA: {
      film,
      isFilmLoaded: true,
    },
  });
  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Player />
        </Router>
      </redux.Provider>
  );


  expect(screen.getByText(/Exit/i)).toBeInTheDocument();
});
