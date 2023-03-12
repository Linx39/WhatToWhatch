import React, {useState, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import VideoPlayerWithUtils from '../video-player/video-player-with-utils';
import PlayerControls from './player-controls/player-controls';
import LoadingScreen from '../loading-screen/loading-screen';
import ErrorScreen from '../error-screen/error-screen';
import NotFoundPage from '../not-found-page/not-found-page';
import {fetchFilm} from '../../store/api-actions';
import {redirectToRoute} from '../../store/action';
import {Patch} from '../../const';

const Player = () => {
  const {film, isFilmLoaded} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();
  const onLoadFilm = (id) => dispatch(fetchFilm(id));
  const onRedirectToRoute = (url) => dispatch(redirectToRoute(url));

  const videoRef = useRef();

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const paramsId = Number(useParams().id);

  const [isErrorLoading, setIsErrorLoading] = useState(false);

  useEffect(() => {
    if (!isFilmLoaded) {
      onLoadFilm(paramsId)
      .catch(() => {
        setIsErrorLoading(true);
      });
    }
  }, [isFilmLoaded]);

  if (!isFilmLoaded && !isErrorLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (isErrorLoading) {
    return (
      <ErrorScreen />
    );
  }

  if (Object.keys(film).length === 0) {
    return (
      <NotFoundPage />
    );
  }

  const {id, previewImage, videoLink} = film;

  const handleExitButtonClick = () => onRedirectToRoute(`${Patch.FILMS}/${id}`);
  const handleChangeIsVideoLoaded = (isLoaded) => setIsVideoLoaded(isLoaded);
  const handleGetDuration = (time) => setDuration(time);
  const handleGetCurrentTime = (time) => setCurrentTime(time);
  const handlePlayPauseButtonClick = () => setIsPlaying(!isPlaying);
  const handleFullScreenButtonClick = () => setIsFullScreen(!isFullScreen);
  const handleChangeIsPlaying = (value) => setIsPlaying(value);

  return (
    <div className="player">
      <VideoPlayerWithUtils
        videoRef={videoRef}
        src={videoLink}
        poster={previewImage}
        isMuted={false}
        isPlaying={isPlaying}
        isVideoLoaded={isVideoLoaded}
        onChangeIsVideoLoaded ={handleChangeIsVideoLoaded}
        isFullScreen={isFullScreen}
        onGetDuration={handleGetDuration}
        onChangeCurrentTime={handleGetCurrentTime}
        onChangeIsPlaying={handleChangeIsPlaying}
      />

      <button type="button" className="player__exit" onClick={handleExitButtonClick}>Exit</button>

      <PlayerControls
        isPlaying={isPlaying}
        isVideoLoaded={isVideoLoaded}
        duration={duration}
        currentTime={currentTime}
        onPlayPauseButtonClick={handlePlayPauseButtonClick}
        onFullScreenButtonClick={handleFullScreenButtonClick}
      />
    </div>
  );
};

export default Player;
