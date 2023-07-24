import React from 'react';
import v8 from '../videos/v8.webm';
import staticImage from '../images/wepik.png'

const BackgroundVideo = () => {
  return (
    <video id="background-video" autoPlay loop muted poster= {staticImage}>
      <source src= {v8} type="video/webm" />
    </video>
  );
};

export default BackgroundVideo;
