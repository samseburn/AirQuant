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
    <div className="Company">
      <CompanyIntro />
      <CompanyTech />
      <CompanyIcon />
      <CompanyAlgorithm />
      <CompanyLED />
    </div>
  );
};

export default Company;
