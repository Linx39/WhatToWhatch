import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import VideoPlayer from './video-player/video-player';
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

  const handleButtonExitClick = () => {
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

  const handleButtonPlayClick = () => setIsPlaying(!isPlaying);

  const handleButtonFullScreenClick = () => setIsFullScreen(!isFullScreen);

  return <React.Fragment>
    <div className="player">
      <VideoPlayer
        src={videoLink}
        poster={previewImage}
        isVideoLoaded={isVideoLoaded}
        isPlaying={isPlaying}
        isFullScreen={isFullScreen}
        isMuted={false}
        onChangeIsLoaded ={handleChangeIsVideoLoaded}
        onGetDuration={handleGetDuration}
        onChangeCurrentTime={handleGetCurrentTime}
      />

      <button type="button" className="player__exit" onClick={handleButtonExitClick}>Exit</button>

      <PlayerControls
        name={name}
        durationVideo={durationVideo}
        currentTime={currentTime}
        isVideoLoaded={isVideoLoaded}
        isPlaying={isPlaying}
        onButtonPlayClick={handleButtonPlayClick}
        onButtonFullScreenClick={handleButtonFullScreenClick}
      />
    </div>
  </React.Fragment>;
};

export default Player;
