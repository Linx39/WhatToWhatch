import React, {useEffect} from "react";
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {
    src,
    poster,
    isMuted,
    isPlaying,
    isVideoLoaded,
    onChangeIsLoaded,
    videoRef,
  } = props;

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => onChangeIsLoaded(true);

    return () => {
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
      videoRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (isPlaying && isVideoLoaded) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying, isVideoLoaded]);

  return (
    <video
      className="player__video"
      src={src}
      poster={poster}
      muted={isMuted}
      ref={videoRef}
      data-testid={`test-video-player`}
    >
    </video>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isVideoLoaded: PropTypes.bool.isRequired,
  onChangeIsLoaded: PropTypes.func,
  videoRef: PropTypes.any,
};

export default VideoPlayer;
