import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

import CardVideo from './card-video';
import films from '../../../mock/films';

jest.mock(`../../../components/film-card/video-player/video-player`, () => {
  const mockAudioPlayer = () => <>This is mock VideoPlayer</>;
  mockAudioPlayer.displayName = `MockAudioPlayer`;
  return {
    __esModule: true,
    default: () => {
      return mockAudioPlayer();
    }
  };
});

it(`'CardVideo' should render correctly`, () => {
  const film = films[8];
  const {id} = film;
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <CardVideo film={film} />
      </Router>
  );

  expect(screen.getByTestId(new RegExp(`test-card-video-${id}`, `i`))).toBeInTheDocument();
});
