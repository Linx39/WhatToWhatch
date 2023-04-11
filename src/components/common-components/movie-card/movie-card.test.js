import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import MovieCard from './movie-card';
import films from '../../../mock/films';

const mockStore = configureStore({});

describe(`Test MovieCard`, () => {
  const history = createMemoryHistory();
  const film = films[3];
  const {id} = film;

  it(`MovieCard should render correctly`, () => {
    render(
        <Provider store={mockStore({})}>
          <Router history={history}>
            <MovieCard
              film={film}
              isVideoMode={false}
              onMouseEnter={jest.fn()}
              onMouseLeave={jest.fn()}
            />
          </Router>
        </Provider>
    );

    expect(screen.getByTestId(new RegExp(`test-film-card-${id}`, `i`))).toBeInTheDocument();
  });
});
