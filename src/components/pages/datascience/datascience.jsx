import React from 'react';
import Data from './data/data'; // adjust path based on your folder structure

const DataScience = ({ serviceValue }) => {
  console.log(serviceValue);
  return (
    <>
      The value is here
      <Data salu={serviceValue} />
    </>
  );
};

export default DataScience;
