import React, { useEffect } from 'react';
import TechCustomersMap from '../TechCustomersMap/TechCustomersMap';
// import { logo_01, logo_02, logo_03, logo_04, logo_05 } from 'images';
import { Tech_logo_01,Tech_logo_02,Tech_logo_03,Tech_logo_04,Tech_logo_05,Tech_logo_06,Tech_logo_07,Tech_logo_08 } from 'images';

import Aos from 'aos';
import 'aos/dist/aos.css';

const TechCustomers = () => {
  useEffect(() => {
    Aos.init({ duration: 1500});
  }, []);

  const customersList = [
    { img: Tech_logo_01 },
    { img: Tech_logo_02 },
    { img: Tech_logo_03 },
    { img: Tech_logo_04 },
    { img: Tech_logo_05 },
    { img: Tech_logo_06 },
    { img: Tech_logo_07 },
    { img: Tech_logo_08 },

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
