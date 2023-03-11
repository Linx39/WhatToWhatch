import React from 'react';
import PropTypes from 'prop-types';

import {getTimeInHoursMinutesSeconds} from '../../component-utils';

const getProgressValue = (durationVideo, currentTime) => {
  const progressValue = (durationVideo && currentTime)
    ? currentTime * 100 / durationVideo
    : `0`;

  return progressValue;
};


const getTimeTemplate = (time) => {
  const {hours, minutes, seconds} = getTimeInHoursMinutesSeconds(time);

  const h = hours !== 0 ? `${hours}:` : ``;
  const m = minutes.lenght === 1 ? `0${minutes}:` : `${minutes}:`;
  const s = seconds.lenght === 1 ? `0${seconds}` : `${seconds}`;

  return `${h}${m}${s}`;
};

const PlayerControls = (props) => {
  const {
    isPlaying,
    isVideoLoaded,
    duration,
    currentTime,
    onPlayPauseButtonClick,
    onFullScreenButtonClick
  } = props;
  const progressValue = getProgressValue(duration, currentTime);

  return (
    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value={progressValue} max="100"></progress>
          <div className="player__toggler" style={{left: `${progressValue}%`}}>Toggler</div>
        </div>

        {currentTime &&
          <div className="player__time-value">
            {getTimeTemplate(duration - currentTime)}
          </div>
        }
      </div>

      <div className="player__controls-row">
        <button onClick={onPlayPauseButtonClick} type="button" className="player__play">
          {(!isPlaying && isVideoLoaded) &&
            <>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </>
          }

          {(isPlaying && isVideoLoaded) &&
            <>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </>
          }
        </button>

        <div className="player__name">Transpotting</div>

        <button onClick={onFullScreenButtonClick} type="button" className="player__full-screen">
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  );
};

PlayerControls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isVideoLoaded: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  onPlayPauseButtonClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
};

export default PlayerControls;
