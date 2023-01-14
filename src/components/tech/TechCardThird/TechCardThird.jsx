import React from 'react';

const TechCardThird = () => {
    return (
        <div className='TechCard__'>
            <div className="TechCard__container">
                <div className="TechCard__container__img">🌳</div>

                <div className="TechCard__container__word">
                    <div className="TechCard__container__word__title">
                    공기조화 시스템(HVAC 시스템)과 연동하여<br/>
                    실내 환경 자동 제어
                    </div>
                    <div className="TechCard__container__word__subtitle">
                    실내 공기질 유지 기준에 맞춰
                    실내 공기질 측정 결과를 기반으로
                    공기조화 시스템(HVAC 시스템)을 제어합니다.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechCardThird;