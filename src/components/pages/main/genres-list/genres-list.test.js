import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import GenresList from './genres-list';
import films from '../../../../mock/films';
import {GENRE_DEFAULT} from '../../../../const';

const mockStore = configureStore({});

it(`GenresList should render correctly`, () => {
  const store = mockStore({
    DATA: {
      films,
    },
    FILMS_ACTIONS: {
      activeGenre: GENRE_DEFAULT,
    },
  });

  const history = createMemoryHistory();

  render(
      <Provider store={store}>
        <Router history={history}>
          <GenresList />
        </Router>
      </Provider>
  );

  expect(screen.getByText(new RegExp(`${films[0].genre}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${films[2].genre}`, `i`))).toBeInTheDocument();
});
