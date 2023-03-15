import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import MovieCard from './film-card';
import films from '../../mock/films';

const mockStore = configureStore({});

describe(`Test MovieCard`, () => {
  const film = films[3];
  const {id} = film;

  it(`MovieCard should render correctly`, () => {
    render(
        <Provider store={mockStore({})}>
          <MovieCard
            film={film}
            isVideoMode={false}
            onMouseEnter={jest.fn()}
            onMouseLeave={jest.fn()}
          />
        </Provider>
    );

    expect(screen.getByTestId(new RegExp(`test-film-card-${id}`, `i`))).toBeInTheDocument();
  });
});
