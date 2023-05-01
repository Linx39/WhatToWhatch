import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import PlayButton from './play-button';
import {mockFilms} from '../../../mock/mock-films';

const mockStore = configureStore({});

it(`PlayButton should render correctly`, () => {
  const mockFilm = mockFilms[6];

  render(
      <Provider store={mockStore({})}>
        <PlayButton film={mockFilm} />
      </Provider>
  );

  expect(screen.getByText(/Play/i)).toBeInTheDocument();
});
