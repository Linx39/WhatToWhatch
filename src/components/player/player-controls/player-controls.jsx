import React from 'react';
import PropTypes from 'prop-types';

import {getProgressValue, getFormatedTimeTemplate} from '../../component-utils';

const PlayerControls = (props) => {
  const {
    name,
    isPlaying,
    isVideoLoaded,
    durationVideo,
    currentTime,
    onPlayPauseButtonClick,
    onFullScreenButtonClick
  } = props;
  const progressValue = getProgressValue(durationVideo, currentTime);

  return <React.Fragment>
    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value={progressValue} max="100"></progress>
          <div className="player__toggler" style={{left: `${progressValue}%`}}>Toggler</div>
        </div>

        {currentTime &&
        <div className="player__time-value">
          {getFormatedTimeTemplate(durationVideo - currentTime)}
        </div>}
      </div>

      <div className="player__controls-row">
        <button onClick={onPlayPauseButtonClick} type="button" className="player__play">
          {(!isPlaying && isVideoLoaded) &&
          <>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </>}

          {(isPlaying && isVideoLoaded) &&
          <>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#pause"></use>
            </svg>
            <span>Pause</span>
          </>}
        </button>

        <div className="player__name">{name}</div>

        <button onClick={onFullScreenButtonClick} type="button" className="player__full-screen">
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>

  </React.Fragment>;
};

PlayerControls.propTypes = {
  name: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isVideoLoaded: PropTypes.bool.isRequired,
  durationVideo: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  onPlayPauseButtonClick: PropTypes.func,
  onFullScreenButtonClick: PropTypes.func,
};

export default PlayerControls;
