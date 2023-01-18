import React, { useEffect } from 'react';
import { airquant_human1 } from 'images';

import Aos from 'aos';
import 'aos/dist/aos.css';

const ProductSpeechBubble = () => {
    useEffect(() => {
        Aos.init({duration:1500});
    }, []);

    return (
        <div className='Bubble_'>
            <div className="Bubble_container">
                <section className="Bubble_container_section1" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="150">
                    <img className='Bubble_container_section1_img' src={airquant_human1} alt="" />
                    <div className="Bubble_container_section1_title">
                        <div className="Bubble_container_section1_title_body">
                        <span class="quote-left">“</span>
                        에어퀀트를 이용한 후 온·습도, 청정도 등을 조정할 수 있어서 쾌적한 실내 환경 조성이 가능해졌어요!
                        <span className='quote-right'>”</span>
                        {/* <p className='Bubble_container_section1_title_body_name'><b>정서윤</b>, 직장인</p> */}
                        </div>
                    </div>
                </section>
                <section className="Bubble_container_section2" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="150">
                    <img className='Bubble_container_section1_img2' src={airquant_human1} alt="" />
                    <div className="Bubble_container_section2_title">
                        <div className="Bubble_container_section2_title_body">
                        <span class="quote-left">“</span>
                        에어퀀트 설비를 들인 후에 자동화를 통한 ​인건비 절감이 가능해졌어요.
                        <span className='quote-right'>”</span>
                        {/* <p className='Bubble_container_section1_title_body_name'><b>정서윤</b>, 직장인</p> */}
                        </div>
                    </div>
                </section>
                <section className="Bubble_container_section3" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="150">
                    <img className='Bubble_container_section1_img' src={airquant_human1} alt="" />
                    <div className="Bubble_container_section3_title">
                        <div className="Bubble_container_section3_title_body">
                        <span class="quote-left">“</span>
                        피드백 제어를 통한 운용으로 에너지 소요 비용 절감이 절감되었어요!
                        <span className='quote-right'>”</span>
                        {/* <p className='Bubble_container_section1_title_body_name'><b>정서윤</b>, 직장인</p> */}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductSpeechBubble;