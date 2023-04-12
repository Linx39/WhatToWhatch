import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Player from './player';
import films from '../../../mock/films';

const mockStore = configureStore({});
jest.mock(`../player/video-player/video-player`, () => {
  const mockVideoPlayer = () => <>This is mock VideoPlayer</>;
  mockVideoPlayer.displayName = `MockVideoPlayer`;
  return {
    __esModule: true,
    default: () => {
      return mockVideoPlayer();
    }
  };
});
jest.mock(`../player/player-controls/player-controls`, () => {
  const mockPlayerControls = () => <>This is mock PlayerControls</>;
  mockPlayerControls.displayName = `MockPlayerControls`;
  return {
    __esModule: true,
    default: () => {
      return mockPlayerControls();
    }
  };
});

it(`Player should render correctly`, () => {
  const film = films[6];
  const history = createMemoryHistory();
  const store = mockStore({
    DATA: {
      film,
      isFilmLoaded: true,
    },
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <Player />
        </Router>
      </Provider>
  );

  expect(screen.getByText(/Exit/i)).toBeInTheDocument();
});

