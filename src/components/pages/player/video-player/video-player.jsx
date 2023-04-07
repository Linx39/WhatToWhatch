import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {
    src,
    poster,
    isMuted,
    isPlaying,
    isFullScreen,
    isVideoLoaded,
    onChangeIsVideoLoaded,
    onGetDuration,
    onChangeCurrentTime,
    onChangeIsPlaying,
  } = props;
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => onChangeIsVideoLoaded(true);

    return () => {
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
      videoRef.current.ontimeupdate = null;
      videoRef.current = null;
    };
  }, [videoRef]);

  useEffect(() => {
    if (isPlaying && isVideoLoaded) {
      videoRef.current.play()
      .catch(() => {
        onChangeIsPlaying(false);
      });
      return;
    }

    videoRef.current.pause();
  }, [isPlaying, isVideoLoaded]);

  useEffect(() => {
    onGetDuration(videoRef.current.duration);
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
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isVideoLoaded: PropTypes.bool.isRequired,
  onChangeIsVideoLoaded: PropTypes.func.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
  onGetDuration: PropTypes.func.isRequired,
  onChangeCurrentTime: PropTypes.func.isRequired,
  onChangeIsPlaying: PropTypes.func.isRequired,
};

export default VideoPlayer;
