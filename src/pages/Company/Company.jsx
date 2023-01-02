import React from 'react';
import { CompanyIcon, CompanyLED } from 'components';

const Company = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CompanyIcon />
      <CompanyLED />
    </div>
  );
};

export default Company;
