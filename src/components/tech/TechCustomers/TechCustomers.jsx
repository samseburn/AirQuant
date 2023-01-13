import React, { useEffect } from 'react';
import TechCustomersMap from '../TechCustomersMap/TechCustomersMap';
import { logo_01, logo_02, logo_03, logo_04, logo_05 } from 'images';

import Aos from 'aos';
import 'aos/dist/aos.css';

const TechCustomers = () => {
  useEffect(() => {
    Aos.init({ duration: 1500});
  }, []);

  const customersList = [
    { img: logo_01 },
    { img: logo_02 },
    { img: logo_03 },
    { img: logo_04 },
    { img: logo_05 },
  ];
  return (
    <div className="TechCustomers__container">
      <div className="TechCustomers__title">
        <p className="TechCustomers__main_title">Customers</p>
      </div>
      <div className="TechCustomers__map">
        {customersList.map((customers) => (
          <TechCustomersMap img={customers.img} alt="" />
        ))}
      </div>
    </div>
  );
};
export default TechCustomers;
