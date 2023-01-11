import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const ProductYoutubeFirst = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="ProductYoutubeFirst" data-aos="fade-up">
      <div className="ProductYoutubeFirst_video">
        <iframe
          className="firstYtv"
          //   width="510"
          //   height="315"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/e8CB9VkeWZM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ProductYoutubeFirst;
