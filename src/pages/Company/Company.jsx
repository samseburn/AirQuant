import React from 'react';
import {
  CompanyIcon,
  CompanyLED,
  CompanyAlgorithm,
  CompanyButton,
  CompanyTech,
} from 'components';

const Company = () => {
  return (
    <div>
      <CompanyButton />
      <CompanyTech />
      <CompanyIcon />
      <CompanyAlgorithm />
      <CompanyLED />
    </div>
  );
};

export default Company;
