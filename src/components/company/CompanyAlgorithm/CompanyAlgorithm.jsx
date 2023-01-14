import React, { useEffect } from 'react';
import { CompanyAlgoChart } from 'components';

import Aos from 'aos';
import 'aos/dist/aos.css';

const CompanyAlgorithm = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="CompanyAlgorithm">
      <p className="CompanyAlgorithm-Title">
        <strong>
          신호대잡음비가 &nbsp;
          <br className="sm-only" />
          향상하는 알고리즘 보유
        </strong>
      </p>
      <div data-aos="fade-up">
        <CompanyAlgoChart />
        <p className="CompanyAlgorithm-Text sm-hidden">
          파이퀀트의 알고리즘을 적용하면
          <br className="lg-hidden" />
          하드웨어의 교체 없이 신호대잡음비가 80% 이상 향상할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default CompanyAlgorithm;
