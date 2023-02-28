import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Player from './player';
import films from '../../mock/films';
import {Patch} from '../../const';

const mockStore = configureStore({});
jest.mock(`../video-player/video-player-with-utils`, () => {
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

let history;
let store;

describe(`Test Player`, () => {
  const film = films[6];
  beforeAll(() => {
    history = createMemoryHistory();
    history.push(Patch.PLAYER);
    store = mockStore({
      DATA: {
        film,
        isFilmLoaded: true,
      },
    });
  });

  it(`Player should render correctly`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <Player />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });
});
