import { Tab } from 'components';
import React from 'react';

const Service = ({ index }) => {
  return (
    <div>
      <Tab start={index} />
    </div>
  );
};

export default Service;
