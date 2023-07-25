import React, { useEffect } from 'react';
import v8 from '../videos/v8.webm';
import staticImage from '../images/wepik.png';

const BackgroundVideo = () => {
  useEffect(() => {
    const handleParallaxScroll = () => {
      const offset = window.pageYOffset;
      const parallaxVideo = document.getElementById('background-video');
      parallaxVideo.style.transform = `translateY(${offset * 0.4}px)`;
    };

    window.addEventListener('scroll', handleParallaxScroll);

    return () => {
      window.removeEventListener('scroll', handleParallaxScroll);
    };
  }, []);

  return (
    <div id="background-video-container">
      <video id="background-video" autoPlay loop muted poster={staticImage}>
        <source src={v8} type="video/webm" />
      </video>
    </div>
  );
};

export default BackgroundVideo;