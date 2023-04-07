import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import VideoPlayer from '../video-player/video-player';
import PlayerControls from '../player-controls/player-controls';
import {redirectToRoute} from '../../../../store/action';
import {filmProp} from '../../../../props-types';
import {Patch} from '../../../../const';

const PlayerPage = ({film}) => {
  const {id, name, previewImage, videoLink} = film;
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const dispatch = useDispatch();
  const handleExitButtonClick = () => dispatch(redirectToRoute((`${Patch.FILMS}/${id}`)));
  const handlePlayPauseButtonClick = () => setIsPlaying(!isPlaying);
  const handleFullScreenButtonClick = () => setIsFullScreen(!isFullScreen);

  return (
    <div className="player">
      <VideoPlayer
        src={videoLink}
        poster={previewImage}
        isMuted={false}
        isPlaying={isPlaying}
        isFullScreen={isFullScreen}
        isVideoLoaded={isVideoLoaded}
        onChangeIsVideoLoaded ={setIsVideoLoaded}
        onGetDuration={setDuration}
        onChangeCurrentTime={setCurrentTime}
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
