import React from 'react';
import { CompanyAlgoChart } from 'components';

const CompanyAlgorithm = () => {
  return (
    <div className="CompanyAlgorithm">
      <p className="AlgoTitle">
        파이퀀트는 <strong>신호대잡음비가 향상하는 알고리즘을 보유</strong>
        하고 있습니다
      </p>

      <CompanyAlgoChart />

      <p className="AlgoText">
        파이퀀트의 알고리즘을 적용하면
        <br />
        하드웨어의 교체 없이 신호대잡음비가 80% 이상 향상할 수 있습니다.
      </p>
    </div>
  );
};

export default CompanyAlgorithm;
