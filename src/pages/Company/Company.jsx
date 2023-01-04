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
      <CompanyAlgorithm />
      <CompanyIcon />
      <CompanyLED />
    </div>
  );
};

export default Company;
