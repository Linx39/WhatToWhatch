import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';

import VideoPlayerWithControls from '../video-player-with-controls/video-player-with-controls';
import PlayerControls from '../player-controls/player-controls';
import {redirectToRoute} from '../../../../store/action';
import {filmProp} from '../../../../props-types';
import {Patch} from '../../../../const';

const PlayerPage = ({film}) => {
  const {id, name, previewImage, videoLink} = film;
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

PlayerPage.propTypes = {
  film: filmProp,
};

export default PlayerPage;
