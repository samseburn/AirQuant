import React from 'react';

const TechCustomersMap = (props) => {
    const {img} = props;
    return (
        <div className='TechCustomers__container'>
            <img src={img} className='TechCustomers__img'/>
        </div>
    );
};

export default TechCustomersMap;