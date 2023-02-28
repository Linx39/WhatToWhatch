import React, {useEffect} from "react";
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {
    videoRef,
    src,
    poster,
    isMuted,
    isPlaying,
    isVideoLoaded,
    onChangeIsVideoLoaded,
  } = props;

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => onChangeIsVideoLoaded(true);

    return () => {
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
      videoRef.current.ontimeupdate = null;
      videoRef.current = null;
    };
  }, [videoRef]); //было только src

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
      ref={videoRef}
      src={src}
      poster={poster}
      muted={isMuted}
      data-testid="test-video-player"
    >
    </video>
  );
};

VideoPlayer.propTypes = {
  videoRef: PropTypes.object,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isVideoLoaded: PropTypes.bool.isRequired,
  onChangeIsVideoLoaded: PropTypes.func,
};

export default VideoPlayer;
