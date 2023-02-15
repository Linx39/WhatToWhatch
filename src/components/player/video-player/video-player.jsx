import React, {useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {
    src,
    poster,
    isVideoLoaded,
    isPlaying,
    isFullScreen,
    isMuted,
    onChangeIsLoaded,
    onGetDuration,
    onChangeCurrentTime,
  } = props;

  const videoRef = useRef();

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
    const duration = videoRef.current.duration;

    onGetDuration(duration);

    videoRef.current.ontimeupdate = () => onChangeCurrentTime(videoRef.current.currentTime);

    // return () => {
    //   videoRef.current.ontimeupdate = null;
    // };
  }, [isVideoLoaded]);


  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (isFullScreen && !document.fullscreenElement) {
      videoRef.current.requestFullscreen();
      return;
    }

    if (!isFullScreen && document.fullscreenElement) {
      document.exitFullscreen();
    }
  }, [isFullScreen]);

  return (
    <video
      className="player__video"
      src={src}
      poster={poster}
      ref={videoRef}
      muted={isMuted}
      data-testid={`test-video-player`}
    >
    </video>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isVideoLoaded: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  onChangeIsLoaded: PropTypes.func,
  onGetDuration: PropTypes.func,
  onChangeCurrentTime: PropTypes.func,
};

export default VideoPlayer;
