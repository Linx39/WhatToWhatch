import React, {useState, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import VideoPlayerWithControls from './video-player-with-controls/video-player-with-controls';
import PlayerControls from './player-controls/player-controls';
import LoadingPage from '../info-page/loading-page/loading-page';
import ErrorPage from '../info-page/error-page/error-page';
import NotFoundPage from '../info-page/not-found-page/not-found-page';
import {fetchFilm} from '../../../store/api-actions';
import {redirectToRoute} from '../../../store/action';
import {useFetchData} from '../../hoocks/use-fetch-data';
import {Patch} from '../../../const';

const Player = () => {
  const {id} = useParams();
  const [
    {film},
    {isDataLoaded, isFetchingError, isNotFoundError}
  ] = useFetchData({fetchFilm, id});
  const dispatch = useDispatch();

  const videoRef = useRef();
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

  if (!isDataLoaded && !isFetchingError) {
    return (
      <LoadingPage />
    );
  }

  if (isFetchingError && !isNotFoundError) {
    return (
      <ErrorPage />
    );
  }

  if (isNotFoundError) {
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
        onChangeIsPlaying={setIsPlaying}
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
