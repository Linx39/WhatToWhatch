import React from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import VideoPlayer from '../video-player/video-player';
import {filmsProp} from '../props-types';
import {findFilm} from '../component-utils';
import {Patch} from '../../const';

const Player = ({films}) => {
  const history = useHistory();

  const handleButtonClick = () => {
    return (
      history.push(`${Patch.FILMS}/${film.id}`)
    );
  };

  const film = findFilm(films);

  if (!film) {
    return (
      <Redirect to={Patch.MAIN} />
    );
  }

  const {posterImage, videoLink, runTime} = film;

  return <React.Fragment>
    <div className="player">
      <VideoPlayer
        src={videoLink}
        poster={posterImage}
        isPlaying={true}
        isMute={false}
      />

      <button type="button" className="player__exit" onClick={handleButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{runTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
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
  films: filmsProp,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export {Player};
export default connect(mapStateToProps)(Player);
