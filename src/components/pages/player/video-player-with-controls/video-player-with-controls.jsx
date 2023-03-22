import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from "../../../common-components/video-player/video-player";

const VideoPlayerWithControls = (props) => {
  const {
    videoRef,
    isVideoLoaded,
    onChangeIsVideoLoaded,
    isFullScreen,
    onGetDuration,
    onChangeCurrentTime,
    onChangeIsPlaying,
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
      videoRef.current.controls = false;
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
      onChangeIsPlaying={onChangeIsPlaying}
      {...restProps}
    />
  );
};

VideoPlayerWithControls.propTypes = {
  videoRef: PropTypes.object.isRequired,
  isVideoLoaded: PropTypes.bool.isRequired,
  onChangeIsVideoLoaded: PropTypes.func.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
  onGetDuration: PropTypes.func.isRequired,
  onChangeCurrentTime: PropTypes.func.isRequired,
  onChangeIsPlaying: PropTypes.func.isRequired,
};

export default VideoPlayerWithControls;
