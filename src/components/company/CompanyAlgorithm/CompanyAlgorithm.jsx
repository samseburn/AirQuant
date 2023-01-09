import React, { useEffect } from 'react';
import Aos from 'aos';
import { CompanyAlgoChart } from 'components';

import 'aos/dist/aos.css';

const CompanyAlgorithm = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="CompanyAlgorithm" data-aos="fade-up">
      <p className="CompanyAlgorithm-Title">
        파이퀀트는 <strong>신호대잡음비가 향상하는 알고리즘을 보유</strong>
        하고 있습니다
      </p>

      <CompanyAlgoChart />

      <p className="CompanyAlgorithm-Text">
        파이퀀트의 알고리즘을 적용하면
        <br />
        하드웨어의 교체 없이 신호대잡음비가 80% 이상 향상할 수 있습니다.
      </p>
    </div>
  );
};

export default CompanyAlgorithm;
