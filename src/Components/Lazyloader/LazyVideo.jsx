// LazyVideo.js
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyVideo = ({ src, type, poster, ...props }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4, // Adjust this threshold as needed
  });

  return (
    <div ref={ref} className='h-full w-full'>
      {inView ? (
        <video muted autoPlay playsInline loop poster={poster} {...props} loading='lazy'>
          <source src={src} type={type} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div style={{ height: 'auto', backgroundColor: 'gray' }} className='h-full w-full'>
          <img src={poster} alt="video placeholder" className='h-full w-full'/>
        </div>
      )}
    </div>
  );
};

export default LazyVideo;
