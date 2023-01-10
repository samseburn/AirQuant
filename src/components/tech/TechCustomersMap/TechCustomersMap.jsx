import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const TechCustomersMap = (props) => {
    useEffect(() => {
        Aos.init({ duration:2000});
    }, []);
    
    const {img} = props;
    return (
        <div className='TechCustomersMap__container' data-aos="fade-up">
            <img src={img} className='TechCustomers__img'/>
        </div>
    );
};

export default TechCustomersMap;