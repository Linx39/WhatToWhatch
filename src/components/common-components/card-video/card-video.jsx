import React from 'react';

import {filmProp} from '../../../props-types';

const CardVideo = ({film}) => {
  const {id, previewVideoLink, previewImage} = film;

  return (
    <div className="small-movie-card__image" data-testid={`test-card-video-${id}`}>
      <video
        className="player__video"
        src={previewVideoLink}
        poster={previewImage}
        muted
        autoPlay
        data-testid="test-video-player"
      >
      </video>
    </div>
  );
};

CardVideo.propTypes = {
  film: filmProp,
};

export default CardVideo;
