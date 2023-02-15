import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import VideoPlayer from './video-player';
import films from '../../../mock/films';

const mockStore = configureStore({});
// jest.spyOn(redux, `play`);

it(`'VideoPlayer' should render correctly`, () => {
  const {videoLink, previewImage} = films[3];
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <VideoPlayer
            src={videoLink}
            poster={previewImage}
            isVideoLoaded={true}
            isPlaying={true}
            isFullScreen={false}
            isMuted={false}
            onChangeIsLoaded ={() => {}}
            onGetDuration={() => {}}
            onChangeCurrentTime={() => {}}
          />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByTestId(`test-video-player`)).toBeInTheDocument();
});
