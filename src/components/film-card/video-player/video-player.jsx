import React, {useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {
    src,
    poster,
    isVideoLoaded,
    isPlaying,
    isMuted,
    onChangeIsLoaded,
  } = props;

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => onChangeIsLoaded(true);

    return () => {
      videoRef.current.oncanplaythrough = null;
      videoRef.current = null;
    };
  }, [src]);

  return (
    <video
      className="player__video"
      src={src}
      poster={poster}
      ref={videoRef}
      muted={isMuted}
      autoPlay={isPlaying}
    >
    </video>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isVideoLoaded: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  onChangeIsLoaded: PropTypes.func,
};

export default VideoPlayer;
