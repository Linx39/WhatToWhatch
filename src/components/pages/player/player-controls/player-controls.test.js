import React from 'react';
import {screen, render, fireEvent} from '@testing-library/react';

import PlayerControls from './player-controls';

describe(`Test PlayerControls`, () => {
  const name = `fakeName`;

  it(`PlayerControls should render correctly`, () => {
    render(
        <PlayerControls
          name={name}
          isPlaying={true}
          isVideoLoaded={true}
          duration={50}
          currentTime={15}
          onPlayPauseButtonClick={jest.fn()}
          onFullScreenButtonClick={jest.fn()}
        />
    );

    expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
    expect(screen.getByText(/Pause/i)).toBeInTheDocument();
    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
    expect(screen.queryByText(/Play/i)).not.toBeInTheDocument();
  });

  it(`When user click 'Play Pause' should be call onPlayPauseButtonClick`, () => {
    const onPlayPauseButtonClick = jest.fn();

    render(
        <PlayerControls
          name={name}
          isPlaying={true}
          isVideoLoaded={true}
          duration={50}
          currentTime={15}
          onPlayPauseButtonClick={onPlayPauseButtonClick}
          onFullScreenButtonClick={jest.fn()}
        />
    );

    const playPauseButton = screen.getByText((/Pause/i));
    fireEvent.click(playPauseButton);
    expect(onPlayPauseButtonClick).toBeCalled();
  });

  it(`When user click 'Full screen' should be call onFullScreenButtonClick`, () => {
    const onFullScreenButtonClick = jest.fn();

    render(
        <PlayerControls
          name={name}
          isPlaying={true}
          isVideoLoaded={true}
          duration={50}
          currentTime={15}
          onPlayPauseButtonClick={jest.fn()}
          onFullScreenButtonClick={onFullScreenButtonClick}
        />
    );

    const fullScreenButton = screen.getByText((/Full screen/i));
    fireEvent.click(fullScreenButton);
    expect(onFullScreenButtonClick).toBeCalled();
  });
});
