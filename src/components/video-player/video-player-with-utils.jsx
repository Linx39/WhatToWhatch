import React, {useEffect} from "react";
import PropTypes from 'prop-types';

import VideoPlayer from "./video-player";

const VideoPlayerWithUtils = (props) => {
  const {
    videoRef,
    isVideoLoaded,
    onChangeIsVideoLoaded,
    isFullScreen,
    onGetDuration,
    onChangeCurrentTime,
    ...restProps
  } = props;

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
      videoRef={videoRef}
      isVideoLoaded={isVideoLoaded}
      onChangeIsVideoLoaded={onChangeIsVideoLoaded}
      {...restProps}
    />
  );
};

VideoPlayerWithUtils.propTypes = {
  videoRef: PropTypes.object,
  isVideoLoaded: PropTypes.bool.isRequired,
  onChangeIsVideoLoaded: PropTypes.func,
  isFullScreen: PropTypes.bool.isRequired,
  onGetDuration: PropTypes.func,
  onChangeCurrentTime: PropTypes.func,
};

export default VideoPlayerWithUtils;
