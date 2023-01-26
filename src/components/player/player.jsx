import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import VideoPlayer from './video-player/video-player';
import Loading from '../common-components/loading/loading';
import {fetchFilm} from '../../store/api-actions';
import {redirectToBack} from '../../store/action';
import {formatTime} from '../component-utils';

const Player = () => {
  const {film} = useSelector((state) => state.DATA);

  const [isFilmLoaded, setIsFilmLoaded] = useState(false);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [durationVideo, setDurationVideo] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const dispatch = useDispatch();

  const onLoadFilm = (id) => {
    dispatch(fetchFilm(id))
      .then(() => setIsFilmLoaded(true));
  };

  const onRedirectToBack = () => {
    dispatch(redirectToBack);
  };

  const filmId = Number(useParams().id);

  useEffect(() => {
    if (!isFilmLoaded) {
      onLoadFilm(filmId);
    }
  }, [filmId, isFilmLoaded]);

  if (!isFilmLoaded) {
    return (
      <Loading />
    );
  }

  const {name, posterImage, videoLink} = film;

  const handleButtonExitClick = () => {
    // setIsPlaying(false);
    // goBack();
    onRedirectToBack();
  };

  const handleChangeIsVideoLoaded = (isLoaded) => {
    setIsVideoLoaded(isLoaded);
  };

  const handleGetDuration = (duration) => {
    setDurationVideo(duration);
  };

  const handleGetCurrentTime = (time) => setCurrentTime(time);

  const handleButtonPlayClick = () => setIsPlaying(!isPlaying);
  const handleButtonFullScreenClick = () => setIsFullScreen(!isFullScreen);

  const getProgressValue = () => {
    const progressValue = (durationVideo && currentTime)
      ? currentTime * 100 / durationVideo
      : `0`;

    return progressValue;
  };

  const getElapsedTimeTemplate = (time) => {
    const {hours, minutes, seconds} = formatTime(time);

    const h = hours !== 0 ? `${hours}:` : ``;
    const m = minutes.lenght === 1 ? `0${minutes}:` : `${minutes}:`;
    const s = seconds.lenght === 1 ? `0${seconds}` : `${seconds}`;

    return `${h}${m}${s}`;
  };

  return <React.Fragment>
    <div className="player">
      <VideoPlayer
        src={videoLink}
        poster={posterImage}
        isVideoLoaded={isVideoLoaded}
        isPlaying={isPlaying}
        isFullScreen={isFullScreen}
        isMuted={false}
        onChangeIsLoaded ={handleChangeIsVideoLoaded}
        onGetDuration={handleGetDuration}
        onChangeCurrentTime={handleGetCurrentTime}
      />

      <button type="button" className="player__exit" onClick={handleButtonExitClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={getProgressValue()} max="100"></progress>
            <div className="player__toggler" style={{left: `${getProgressValue()}%`}}>Toggler</div>
          </div>
          {
            currentTime &&
            <div className="player__time-value">{getElapsedTimeTemplate(durationVideo - currentTime)}</div>
          }

        </div>

        <div className="player__controls-row">
          <button onClick={handleButtonPlayClick} type="button" className="player__play">
            {
              (!isPlaying && isVideoLoaded) &&
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>
            }

            {
              (isPlaying && isVideoLoaded) &&
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>
            }
          </button>

          <div className="player__name">{name}</div>

          <button onClick={handleButtonFullScreenClick} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  </React.Fragment>;
};

export default Player;
