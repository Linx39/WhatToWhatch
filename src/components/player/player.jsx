import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Redirect, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import VideoPlayer from '../video-player/video-player';
import Loading from '../common-components/loading/loading';
import {fetchFilm} from '../../store/api-actions';
import {Patch} from '../../const';

const Player = ({goFilm}) => {
  const {film} = useSelector((state) => state.DATA);

  const [isLoading, setIsLoading] = useState(true);
  const [isFilmLoaded, setIsFilmLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [lastTime, setLastTime] = useState(0);

  const dispatch = useDispatch();

  const onLoadFilm = (id) => {
    dispatch(fetchFilm(id))
      .then(() => setIsFilmLoaded(true));
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

  const {id, name, posterImage, videoLink} = film;

  const handleButtonExitClick = () => goFilm(id);

  const handleChangeIsLoading = (isLoad) => {
    setIsLoading(isLoad);
    console.log (isLoading);
  };

  const handleButtonPlayClick = () => setIsPlaying(!isPlaying);
  const handleButtonFullScreenClick = () => setIsFullScreen(!isFullScreen);

  const handleChangeLastTime = (time) => setLastTime(time);

  return <React.Fragment>
    <div className="player">
      <VideoPlayer
        src={videoLink}
        poster={posterImage}
        isPlaying={isPlaying}
        isFullScreen={isFullScreen}
        isMuted={false}
        onChangeIsLoading ={handleChangeIsLoading}
        onChangeLastTime={handleChangeLastTime}
      />

      <button type="button" className="player__exit" onClick={handleButtonExitClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{lastTime}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={handleButtonPlayClick} type="button" className="player__play">
            {!isPlaying &&
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>
            }
            {isPlaying &&
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

Player.propTypes = {
  goFilm: PropTypes.func.isRequired,
};

export default Player;
