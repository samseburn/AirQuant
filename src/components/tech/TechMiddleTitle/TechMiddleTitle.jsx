import React, { useEffect } from 'react';
import { middletitle_02 } from 'images';

import Aos from 'aos';
import 'aos/dist/aos.css';

const TechMiddleTitle = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return (
        <div className='TechMiddleTitle__'>
            <div className="TechMiddleTitle__container">

                <div className='TechMiddleTitle__section'>
                    <div className='TechMiddleTitle__text'>
                    <div className='TechMiddleTitle__first' data-aos="fade-up">
                    미세먼지(PM10), 초미세먼지(PM2.5)를 포함한</div>
                    <div className='TechMiddleTitle__second' data-aos="fade-up" data-aos-delay="500">
                    <span className='TechMiddleTitle__second__span'>총 11가지 </span>항목을 실시간으로 측정</div>
                    </div>

                    <img className="TechMiddleTitle__mainimage" src={middletitle_02} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default TechMiddleTitle;