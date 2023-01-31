import React from 'react';
import PropTypes from 'prop-types';

import {getTimeInHoursMinutesSeconds} from '../../component-utils';

const getFormatedTimeTemplate = (time) => {
  const {hours, minutes, seconds} = getTimeInHoursMinutesSeconds(time);

  const h = hours !== 0 ? `${hours}:` : ``;
  const m = minutes.lenght === 1 ? `0${minutes}:` : `${minutes}:`;
  const s = seconds.lenght === 1 ? `0${seconds}` : `${seconds}`;

  return `${h}${m}${s}`;
};

const getProgressValue = (durationVideo, currentTime) => {
  const progressValue = (durationVideo && currentTime)
    ? currentTime * 100 / durationVideo
    : `0`;

  return progressValue;
};

const PlayerControls = ({name, durationVideo, currentTime, isVideoLoaded, isPlaying, onButtonPlayClick, onButtonFullScreenClick}) => {
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
        <button onClick={onButtonPlayClick} type="button" className="player__play">
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

        <button onClick={onButtonFullScreenClick} type="button" className="player__full-screen">
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
  durationVideo: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  isVideoLoaded: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onButtonPlayClick: PropTypes.func,
  onButtonFullScreenClick: PropTypes.func,
};

export default PlayerControls;
