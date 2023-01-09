import React from 'react';
import {
  CompanyIcon,
  CompanyLED,
  CompanyAlgorithm,
  CompanyTech,
} from 'components';

const Company = () => {
  return (
    <div>
      <CompanyTech />
      <CompanyIcon />
      <CompanyAlgorithm />
      <CompanyLED />
    </div>
  );
};

export default Company;
