import React from 'react';

const ProductYoutubeSecond = () => {
  return (
    <div className="ProductYoutubeSecond">
      <div className="ProductYoutubeSecond_video">
        <iframe
          className="secondYtv"
          //   width="560"
          //   height="315"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/9jx92FdlYOs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ProductYoutubeSecond;
