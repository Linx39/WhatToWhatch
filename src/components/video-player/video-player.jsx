import React, {useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types';

const VideoPlayer = ({src, poster, isPlaying, isFullScreen, isMuted, onChangeIsLoading, onChangeLastTime}) => {
  // const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => onChangeIsLoading(false);

    return () => {
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
      videoRef.current = null;
    };
  }, [src]);

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

  useEffect(() => {
    videoRef.current.ontimeupdate = () => onChangeLastTime(videoRef.current.currentTime);

    return () => {
      videoRef.current.ontimeupdate = null;
    };
  });

  return (
    <video
      className="player__video"
      src={src}
      poster={poster}
      ref={videoRef}
      muted={isMuted}
    >
    </video>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  onChangeIsLoading: PropTypes.func,
  onChangeLastTime: PropTypes.func,
};

export default VideoPlayer;
