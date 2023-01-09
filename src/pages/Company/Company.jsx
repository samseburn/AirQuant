import React from 'react';
import {
  CompanyIcon,
  CompanyLED,
  CompanyAlgorithm,
  CompanyTech,
  CompanyIntro,
} from 'components';

const Company = () => {
  return (
    <div>
      <CompanyIntro />
      <CompanyTech />
      <CompanyIcon />
      <CompanyAlgorithm />
      <CompanyLED />
    </div>
  );
};

export default Company;
