import React from 'react';

const CountrySelector = ({ name, setSelectedCountry, selectedCountry }) => {
  return (
    <div className={`CountrySelector ${selectedCountry===name ? 'bgBlue' : ''}`} onClick={() => setSelectedCountry(name)}>
      {name}
    </div>
  );
};

export default CountrySelector;
