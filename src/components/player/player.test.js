import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

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
const id = 6;
const film = films[id];
let history;
let store;

describe(`Test PlayerControls`, () => {
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

  it(`When user click 'Exit' should be redirect`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route exact path={Patch.PLAYER}>
                <Player/>
              </Route>
              <Route exact path={`${Patch.FILMS}/${id}`}>
                <h1>Mock App Screen</h1>
              </Route>
            </Switch>
          </Router>
        </Provider>
    );

    fireEvent.click(screen.getByText(/Exit/i));

    expect(screen.getByText(/Mock App Screen/i));// не работает, нужно ли вообще?
  });
});
