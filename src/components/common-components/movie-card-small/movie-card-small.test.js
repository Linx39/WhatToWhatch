import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import MovieCardSmall from './movie-card-small';
import {mockFilms} from '../../../mock/mock-films';

const mockStore = configureStore({});

it(`MovieCardSmall should render correctly`, () => {
  const history = createMemoryHistory();
  const mockFilm = mockFilms[3];
  const {id} = mockFilm;

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <MovieCardSmall
            film={mockFilm}
            isVideoMode={false}
            onMouseEnter={jest.fn()}
            onMouseLeave={jest.fn()}
          />
        </Router>
      </Provider>
  );

  expect(screen.getByTestId(new RegExp(`test-film-card-${id}`, `i`))).toBeInTheDocument();
});
