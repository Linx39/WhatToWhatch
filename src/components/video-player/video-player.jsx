import React, {useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types';

const VideoPlayer = ({src, poster, isPlaying, isMute}) => {
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => setIsLoading(false);

    return () => {
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onplay = null; // зачем???
      videoRef.current.onpause = null;
      videoRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    const playVideoRef = () => videoRef.current.play();

    if (!isLoading && isPlaying) {
      setTimeout(playVideoRef, 0);
    } else {
      videoRef.current.pause();
    }

    return () => clearTimeout(videoRef);
  }, [!isLoading && isPlaying]);

  useEffect(() => {
    if (isMute) {
      videoRef.current.muted = true;
      return;
    }

    videoRef.current.muted = false;
  }, [isMute]);

  return (
    <video
      src={src}
      className="player__video"
      poster={poster}
      ref={videoRef}
      controls={false}
    >
    </video>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isMute: PropTypes.bool.isRequired,
};

export default VideoPlayer;
