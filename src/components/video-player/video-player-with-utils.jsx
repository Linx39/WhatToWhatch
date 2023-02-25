import React, {useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types';

import VideoPlayer from "./video-player";

const VideoPlayerWithUtils = (props) => {
  const {
    isVideoLoaded,
    onChangeIsLoaded,
    isFullScreen,
    onGetDuration,
    onChangeCurrentTime,
    videoRef,
    ...restProps
  } = props;

  // const videoRef = useRef();

  useEffect(() => {
    const duration = videoRef.current.duration;

    onGetDuration(duration);

    videoRef.current.ontimeupdate = () => onChangeCurrentTime(videoRef.current.currentTime);
  }, [isVideoLoaded]);

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
    <VideoPlayer
      isVideoLoaded={isVideoLoaded}
      onChangeIsLoaded={onChangeIsLoaded}
      videoRef={videoRef}
      {...restProps}
    />
  );
};

VideoPlayerWithUtils.propTypes = {
  isVideoLoaded: PropTypes.bool.isRequired,
  onChangeIsLoaded: PropTypes.func,
  isFullScreen: PropTypes.bool.isRequired,
  onGetDuration: PropTypes.func,
  onChangeCurrentTime: PropTypes.func,
  videoRef: PropTypes.any,
};

export default VideoPlayerWithUtils;
