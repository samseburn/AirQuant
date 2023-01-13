import React from 'react';
import { middletitle_02 } from 'images';

const TechMiddleTitle = () => {
    return (
        <div className='TechMiddleTitle__'>
            <div className="TechMiddleTitle__container">

                <div className='TechMiddleTitle__section'>
                    <div className='TechMiddleTitle__text'>
                    <div className='TechMiddleTitle__first'>
                    미세먼지(PM10), 초미세먼지(PM2.5)를 포함한</div>
                    <div className='TechMiddleTitle__second'>
                    <span>총 11가지 </span>항목을 실시간으로 측정</div>
                    </div>

                    <img className="TechMiddleTitle__mainimage" src={middletitle_02} alt=""/>`
                </div>
            </div>
        </div>
    );
};

export default TechMiddleTitle;