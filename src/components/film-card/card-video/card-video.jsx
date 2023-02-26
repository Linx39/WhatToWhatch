import React, {useState, useRef} from 'react';

import VideoPlayer from '../../video-player/video-player';
import {filmProp} from '../../props-types';

const CardVideo = ({film}) => {
  const {id, previewVideoLink, previewImage} = film;
  const videoRef = useRef();

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleChangeIsVideoLoaded = (isLoaded) => {
    setIsVideoLoaded(isLoaded);
  };

  return (
    <div className="small-movie-card__image" data-testid={`test-card-video-${id}`}>
      <VideoPlayer
        videoRef={videoRef}
        src={previewVideoLink}
        poster={previewImage}
        isMuted={true}
        isPlaying={true}
        isVideoLoaded={isVideoLoaded}
        onChangeIsVideoLoaded ={handleChangeIsVideoLoaded}
      />;
    </div>
  );
};

CardVideo.propTypes = {
  film: filmProp,
};

export default CardVideo;
