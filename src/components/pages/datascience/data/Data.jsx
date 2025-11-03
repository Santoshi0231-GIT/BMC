import React from 'react';

const Data = ({ salu = "one" }) => {
  return (
    <>
      The props data is here
      <h1>{salu}</h1>
    </>
  );
};

export default Data;
