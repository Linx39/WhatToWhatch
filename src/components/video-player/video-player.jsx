import React, {useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types';

const VideoPlayer = ({src, poster, isPlaying, isMuted}) => {
  const [isLoading, setIsLoading] = useState(true);
  // const [isPlaying, setIsPlaying] = useState(isAutoPlay);

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => setIsLoading(false);
    // videoRef.current.onplay = () => onPlayClick(true);
    // videoRef.current.onpause = () => onPlayClick(false);

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
  isMuted: PropTypes.bool.isRequired,
};

export default VideoPlayer;
