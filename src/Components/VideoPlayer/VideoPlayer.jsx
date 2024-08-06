import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../assets/college-video.mp4';

function VideoPlayer({play,setPlay}) {
    const videoRef=useRef(null);
    function handlePlay(e){
        if(e.target === videoRef.current){
            setPlay(false);
        }
    }
  return (
    <div className={`player ${play? '':'hide'}`} onClick={handlePlay}
        ref={videoRef}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer