// src/utils/preloadAssets.js
const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };
  
  const preloadVideo = (src) => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.src = src;
      video.oncanplaythrough = resolve;
      video.onerror = reject;
    });
  };
  
  export const preloadAssets = (assets) => {
    const imagePromises = assets.images.map(preloadImage);
    const videoPromises = assets.videos.map(preloadVideo);
    return Promise.all([...imagePromises, ...videoPromises]);
  };
  