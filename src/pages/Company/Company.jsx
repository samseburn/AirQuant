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
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <CompanyButton />
      <CompanyTech />
      <CompanyIcon />
      <CompanyAlgorithm />
      <CompanyLED />
    </div>
  );
};

export default Company;
