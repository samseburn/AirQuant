import React from 'react';
import { airquant_05 } from 'images';

const TechMiddleTitle = () => {
    return (
        <div className='TechMiddleTitle__'>
            <div className="TechMiddleTitle__container">
            <div className='TechMiddleTitle__bgImage'>
            <img className="TechMiddleTitle__image" src={airquant_05} alt=""/>
            </div>
            <div className='TechMiddleTitle__first'>
            미세먼지(PM10), 초미세먼지(PM2.5)를 포함한
            </div>
            <div className='TechMiddleTitle__second'>
            총 11가지 항목을 실시간으로 측정
            </div>
            </div>
        </div>
    );
};

export default TechMiddleTitle;