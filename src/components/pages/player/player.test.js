import React from 'react';
import {screen} from '@testing-library/react';

import Player from './player';
import {renderWithProviders} from '../../../test-utils/render-with-providers';
import {mockState} from '../../../test-utils/mock-state';

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: jest.fn(() => () => {})
}));

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
  renderWithProviders(<Player />, mockState);

  expect(screen.getByText(/Exit/i)).toBeInTheDocument();
});

