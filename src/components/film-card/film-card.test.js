import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import FilmCard from './film-card';
import films from '../../mock/films';

const mockStore = configureStore({});
jest.spyOn(redux, `useDispatch`);

it(`'FilmCard' should render correctly`, () => {
  const film = films[3];
  const {id} = film;
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <FilmCard film={film} isVideoMode={false} onMouseEnter={() => {}} onMouseLeave={() => {}} />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByTestId(new RegExp(`test-film-card-${id}`, `i`))).toBeInTheDocument();
});
