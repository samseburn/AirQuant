import { airquant_05 } from 'images';
import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const TechMain = () => {
    useEffect(() => {
        Aos.init({ duration: 1500});
    }, []);

    return (
        <div className='TechMain__Main'>
            <img className='TechMain__Main__Image' src={airquant_05}/>

            <p className='TechMain__title' data-aos="fade-up">최고의 기술로 인정받은 에어퀀트</p>

        </div>
    );
};

export default TechMain;