import React from 'react';
import {render, screen} from '@testing-library/react';

import VideoPlayer from './video-player';

it(`VideoPlayer should render correctly`, () => {
  window.HTMLMediaElement.prototype.play = jest.fn(() => ({catch: () => {}}));
  window.HTMLMediaElement.prototype.pause = jest.fn();
  const mockSrcPath = `mock-src-path`;
  const mockPosterPath = `mock-poster-path`;

  render(
      <VideoPlayer
        src={mockSrcPath}
        poster={mockPosterPath}
        isMuted={false}
        isPlaying={true}
        isFullScreen={false}
        isVideoLoaded={true}
        onChangeIsVideoLoaded ={jest.fn()}
        onGetDuration={jest.fn()}
        onChangeCurrentTime={jest.fn()}
        onChangeIsPlaying={jest.fn()}
      />
  );

  expect(screen.getByTestId(`test-video-player`)).toBeInTheDocument();
});
