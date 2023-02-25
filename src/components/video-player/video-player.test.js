import React from 'react';
import {render, screen} from '@testing-library/react';

import VideoPlayer from './video-player';

window.HTMLMediaElement.prototype.play = () => {};
window.HTMLMediaElement.prototype.pause = () => {};

it(`'VideoPlayer' should render correctly`, () => {
  const mockSrcPath = `mock-src-path`;
  const mockPosterPath = `mock-poster-path`;

  render(
      <VideoPlayer
        src={mockSrcPath}
        poster={mockPosterPath}
        isVideoLoaded={true}
        isPlaying={true}
        isFullScreen={false}
        isMuted={false}
        onChangeIsLoaded ={jest.fn()}
      />
  );

  expect(screen.getByTestId(`test-video-player`)).toBeInTheDocument();
});
