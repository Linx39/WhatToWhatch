import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import PlayerControls from './player-controls';
import films from '../../../mock/films';

const mockStore = configureStore({});

it(`'PlayerControls' should render correctly`, () => {
  const {name} = films[3];
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <PlayerControls
            name={name}
            durationVideo={50}
            currentTime={15}
            isVideoLoaded={true}
            isPlaying={true}
            onButtonPlayClick={() => {}}
            onButtonFullScreenClick={() => {}}
          />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
  // expect(screen.getByText(/Play/i)).toBeInTheDocument();
  expect(screen.getByText(/Pause/i)).toBeInTheDocument();
  expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
});
