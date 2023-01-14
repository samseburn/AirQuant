import React from 'react';
import { TechCardFirst } from '../TechCardFirst';
import { TechCardSecond } from '../TechCardSecond';
import { TechCardThird } from '../TechCardThird';

const TechCardBook = () => {
    return (
        <div className='TechCardBook__'>
            <div className="TechCardBook__container">
                <div className="TechCardBook__container__section1">
                    <div className="TechCardBook__container__section1__text">
                    <h1>공기의 상태를 <br/><span>​눈으로 보다.</span></h1></div>
                    <div className="TechCardBook__container__section1__section"><TechCardFirst/></div>
                </div>

                <div className="TechCardBook__container__section2">
                    <div className="TechCardBook__container__section2__section"><TechCardSecond/></div>
                    <div className="TechCardBook__container__section2__section"><TechCardThird/></div>
                </div>
            </div>
        </div>
    );
};

export default TechCardBook;