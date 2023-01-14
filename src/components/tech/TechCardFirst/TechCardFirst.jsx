import React from 'react';

const TechCardFirst = () => {
    return (
        <div className='TechCard__'>
            <div className="TechCard__container">
                <div className="TechCard__container__img">📱</div>

                <div className="TechCard__container__word">
                    <div className="TechCard__container__word__title">
                    웹/ 모바일 어플리케이션과 연동하여 이상징후 알림
                    </div>
                    <div className="TechCard__container__word__subtitle">
                    실내 공기질을 측정 및 기록하고
                    웹/모바일 어플리케이션과 연동하여
                    실내 공기질 유지 기준 초과 시 알림이 울립니다.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechCardFirst;