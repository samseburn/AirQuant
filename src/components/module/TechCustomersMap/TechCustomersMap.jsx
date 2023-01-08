import React from 'react';

const TechCustomersMap = (props) => {
    const {img} = props;
    return (
        <div className='TechCustomersMap__container'>
            <img src={img} className='TechCustomers__img'/>
        </div>
    );
};

export default TechCustomersMap;