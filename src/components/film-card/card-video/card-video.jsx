import React, {useState} from 'react';

import VideoPlayer from '../video-player/video-player';
import {filmProp} from '../../props-types';

const CardVideo = ({film}) => {
  const {id, previewVideoLink, previewImage} = film;

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleChangeIsVideoLoaded = (isLoaded) => {
    setIsVideoLoaded(isLoaded);
  };

  return (
    <>
      <div className="small-movie-card__image" data-testid={`test-card-video-${id}`}>
        <VideoPlayer
          src={previewVideoLink}
          poster={previewImage}
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
