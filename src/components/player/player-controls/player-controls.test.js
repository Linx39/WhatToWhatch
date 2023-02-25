import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PlayerControls from './player-controls';

let name;

describe(`Test PlayerControls`, () => {
  beforeAll(() => {
    name = `fakeName`;
  });
  it(`PlayerControls should render correctly`, () => {
    render(
        <PlayerControls
          name={name}
          durationVideo={50}
          currentTime={15}
          isVideoLoaded={true}
          isPlaying={true}
          onPlayPauseButtonClick={jest.fn()}
          onFullScreenButtonClick={jest.fn()}
        />
    );

    expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
    expect(screen.getByText(/Pause/i)).toBeInTheDocument();
    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
    expect(screen.queryByText(/Play/i)).not.toBeInTheDocument();
  });

  it(`When user click 'Play Pause' should be call playPauseButtonClicklHandle`, () => {
    const playPauseButtonClicklHandle = jest.fn();

    render(
        <PlayerControls
          name={name}
          durationVideo={50}
          currentTime={15}
          isVideoLoaded={true}
          isPlaying={true}
          onPlayPauseButtonClick={playPauseButtonClicklHandle}
          onFullScreenButtonClick={jest.fn()}
        />
    );

    const playPauseButton = screen.getByText((/Pause/i));

    fireEvent.click(playPauseButton);
    expect(playPauseButtonClicklHandle).toBeCalled();
  });

  it(`When user click 'Full screen' should be call fullScreenButtonClicklHandle`, () => {
    const fullScreenButtonClicklHandle = jest.fn();

    render(
        <PlayerControls
          name={name}
          durationVideo={50}
          currentTime={15}
          isVideoLoaded={true}
          isPlaying={true}
          onPlayPauseButtonClick={jest.fn()}
          onFullScreenButtonClick={fullScreenButtonClicklHandle}
        />
    );

    // const fullScreenButton = screen.getByText((/Full screen/i));

    fireEvent.click(screen.getByText((/Full screen/i)));
    expect(fullScreenButtonClicklHandle).toBeCalled();
  });
});
