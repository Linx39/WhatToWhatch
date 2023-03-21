import React, {useState, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import VideoPlayerWithControls from './video-player-with-controls/video-player-with-controls';
import PlayerControls from './player-controls/player-controls';
import LoadingPage from '../info-page/loading-page/loading-page';
import ErrorPage from '../info-page/error-page/error-page';
import NotFoundPage from '../info-page/not-found-page/not-found-page';
import {fetchFilm} from '../../../store/api-actions';
import {redirectToRoute} from '../../../store/action';
import {Patch, HttpCode} from '../../../const';

const Player = () => {
  const {id} = useParams();
  const {film, isFilmLoaded} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();
  const videoRef = useRef();
  const [isNotFoundPage, setIsNotFoundPage] = useState(false);
  const [isFetchingError, setIsFetchingError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleExitButtonClick = () => dispatch(redirectToRoute((`${Patch.FILMS}/${id}`)));
  const handleChangeIsVideoLoaded = (value) => setIsVideoLoaded(value);
  const handleGetDuration = (time) => setDuration(time);
  const handleGetCurrentTime = (time) => setCurrentTime(time);
  const handlePlayPauseButtonClick = () => setIsPlaying(!isPlaying);
  const handleFullScreenButtonClick = () => setIsFullScreen(!isFullScreen);
  const handleChangeIsPlaying = (value) => setIsPlaying(value);

  useEffect(() => {
    if (!isFilmLoaded) {
      dispatch(fetchFilm(id))
      .catch((err) => {
        if (err === HttpCode.PAGE_NOT_FOUND) {
          setIsNotFoundPage(true);
        }
        setIsFetchingError(true);
      });
    }
  }, [isFilmLoaded]);

  if (!isFilmLoaded && !isFetchingError) {
    return (
      <LoadingPage />
    );
  }

  if (isFetchingError && !isNotFoundPage) {
    return (
      <ErrorPage />
    );
  }

  if (isNotFoundPage) {
    return (
      <NotFoundPage />
    );
  }

  const {name, previewImage, videoLink} = film;

  return (
    <div className="player">
      <VideoPlayerWithControls
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
        name={name}
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
