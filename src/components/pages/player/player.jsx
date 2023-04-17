import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

import InfoPage from '../info-page/info-page';
import VideoPlayer from './video-player/video-player';
import PlayerControls from './player-controls/player-controls';
import {fetchFilm} from '../../../store/api-actions';
import {redirectToRoute} from '../../../store/action';
import {Patch, FetchingStatus} from '../../../const';

const Player = () => {
  const {id} = useParams();
  const {film, isFilmLoading} = useSelector((state) => state.DATA);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const dispatch = useDispatch();
  const handleExitButtonClick = () => dispatch(redirectToRoute((`${Patch.FILMS}/${id}`)));
  const handlePlayPauseButtonClick = () => setIsPlaying(!isPlaying);
  const handleFullScreenButtonClick = () => setIsFullScreen(!isFullScreen);

  useEffect(() => {
    dispatch(fetchFilm(id));
  }, [dispatch]);

  if (isFilmLoading) {
    return <InfoPage fetchingStatus={FetchingStatus.LOADING} />;
  }

  if (!film) {
    return <InfoPage fetchingStatus={FetchingStatus.PAGE_NOT_FOUND} />;
  }

  const {name, previewImage, videoLink} = film;

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

      <button
        type="button"
        className="player__exit"
        onClick={handleExitButtonClick}
      >
            Exit
      </button>

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
