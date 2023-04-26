import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

import VideoPlayer from './video-player/video-player';
import PlayerControls from './player-controls/player-controls';
import LoadingPage from '../info-page/loading-page/loading-page';
import NotFoundPage from '../info-page/not-found-page/not-found-page';
import ErrorPage from '../info-page/error-page/error-page';
import {fetchFilm} from '../../../store/api-actions';
import {redirectToRoute} from '../../../store/action';
import {Patch, ResponseStatus} from '../../../const';

const Player = () => {
  const {id} = useParams();
  const {filmData} = useSelector((state) => state.DATA);
  const {data: film, isLoading: isFilmLoading, error: filmError} = filmData;

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
    if (film.id !== +id) {
      dispatch(fetchFilm(id));
    }
  }, [dispatch]);

  if (isFilmLoading) {
    return <LoadingPage />;
  }

  if (filmError === ResponseStatus.PAGE_NOT_FOUND) {
    return <NotFoundPage />;
  }

  if (filmError && filmError !== ResponseStatus.PAGE_NOT_FOUND) {
    return <ErrorPage />;
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
