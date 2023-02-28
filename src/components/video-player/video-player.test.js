import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {act} from 'react-dom/test-utils';

import VideoPlayer from './video-player';

describe(`Test VideoPlayer`, () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
  });

  const mockVideoRef = {
    current: null,
  };
  const mockSrcPath = `mock-src-path`;
  const mockPosterPath = `mock-poster-path`;

  it(`VideoPlayer should render correctly`, () => {
    render(
        <VideoPlayer
          videoRef={mockVideoRef}
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

  it(`VideoPlayer should play video when data is loaded`, () => {
    const onChangeIsLoaded = jest.fn();
    render(
        <VideoPlayer
          videoRef={mockVideoRef}
          src={mockSrcPath}
          poster={mockPosterPath}
          isVideoLoaded={true}
          isPlaying={true}
          isFullScreen={false}
          isMuted={false}
          onChangeIsLoaded ={onChangeIsLoaded}
        />
    );

    const videoElement = screen.getByTestId(`test-video-player`);

    act(() => {
      fireEvent(videoElement, new Event(`canplaythrough`));
    });
    expect(onChangeIsLoaded).toBeCalled();
  });
});
