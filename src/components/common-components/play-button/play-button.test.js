import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import PlayButton from './play-button';
import films from '../../../mock/films';

const mockStore = configureStore({});

it(`PlayButton should render correctly`, () => {
  const film = films[6];

  render(
      <Provider store={mockStore({})}>
        <PlayButton film={film} />
      </Provider>
  );

  expect(screen.getByText(/Play/i)).toBeInTheDocument();
});
