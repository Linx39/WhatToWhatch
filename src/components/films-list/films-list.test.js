import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import FilmsList from './films-list';
import films from '../../mock/films';

const mockStore = configureStore({});

it(`'FilmsList' should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <FilmsList films={films} count={10}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByTestId(`test-film-list`)).toBeInTheDocument();
});
