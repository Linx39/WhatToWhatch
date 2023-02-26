import React, {useState, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import VideoPlayerWithUtils from '../video-player/video-player-with-utils';
import PlayerControls from './player-controls/player-controls';
import Loading from '../common-components/loading/loading';
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
  const [durationVideo, setDurationVideo] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const paramsId = Number(useParams().id);

  useEffect(() => {
    if (!isFilmLoaded) {
      onLoadFilm(paramsId);
    }
  }, [isFilmLoaded]);

  if (!isFilmLoaded) {
    return (
      <Loading />
    );
  }

  const {id, name, previewImage, videoLink} = film;

  const handleExitButtonClick = () => {
    // setIsPlaying(false);
    onRedirectToRoute(`${Patch.FILMS}/${id}`);
  };

  const handleChangeIsVideoLoaded = (isLoaded) => {
    setIsVideoLoaded(isLoaded);
  };

  const handleGetDuration = (duration) => {
    setDurationVideo(duration);
  };

  const handleGetCurrentTime = (time) => setCurrentTime(time);

  const handlePlayPauseButtonClick = () => setIsPlaying(!isPlaying);

  const handleFullScreenButtonClick = () => setIsFullScreen(!isFullScreen);

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
      />

      <button type="button" className="player__exit" onClick={handleExitButtonClick}>Exit</button>

      <PlayerControls
        name={name}
        isPlaying={isPlaying}
        isVideoLoaded={isVideoLoaded}
        durationVideo={durationVideo}
        currentTime={currentTime}
        onPlayPauseButtonClick={handlePlayPauseButtonClick}
        onFullScreenButtonClick={handleFullScreenButtonClick}
      />
    </div>
  );
};

export default Player;
