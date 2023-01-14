import {
  TechCardBook,
  TechConTitle,
  TechCustomers,
  TechExplanation,
  TechMain,
  TechMeasurementTable,
  TechMiddleTitle,
  TechPatent,
} from 'components';
import React from 'react';

const Tech = () => {
  return (
    <div>
      <TechMain />
      <TechMeasurementTable />
      <TechMiddleTitle />
      <TechCardBook/>
      {/* <TechExplanation /> */}
      <TechConTitle />
      <TechCustomers />
      <TechPatent />
    </div>
  );
};

export default Tech;
