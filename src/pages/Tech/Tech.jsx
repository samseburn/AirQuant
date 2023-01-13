import {
  TechConTitle,
  TechCustomers,
  TechExplanation,
  TechMain,
  TechMeasurementTable,
  TechPatent,
} from 'components';
import React from 'react';

const Tech = () => {
  return (
    <div>
      <TechMain />
      <TechMeasurementTable />
      <TechExplanation />
      <TechConTitle />
      <TechCustomers />
      <TechPatent />
    </div>
  );
};

export default Tech;
