import React, {useState} from 'react';

import VideoPlayer from '../video-player/video-player';
import {filmProp} from '../../props-types';

const CardVideo = ({film}) => {
  const {previewVideoLink, posterImage} = film;

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleChangeIsVideoLoaded = (isLoaded) => {
    setIsVideoLoaded(isLoaded);
  };

  return (
    <>
      <div className="small-movie-card__image">
        <VideoPlayer
          src={previewVideoLink}
          poster={posterImage}
          isVideoLoaded={isVideoLoaded}
          onChangeIsLoaded ={handleChangeIsVideoLoaded}
          isPlaying={true}
          isMuted={true}
        />;
      </div>
    </>);

};

CardVideo.propTypes = {
  film: filmProp,
};

export default CardVideo;
