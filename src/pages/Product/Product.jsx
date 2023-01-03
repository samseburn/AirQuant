import { ProductPiquantExplanation } from 'components';
import React from 'react';

const Product = () => {
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
      <ProductPiquantExplanation />
    </div>
  );
};

export default Product;
