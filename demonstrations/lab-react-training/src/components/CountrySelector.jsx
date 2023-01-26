import React from 'react';

const CountrySelector = ({ name, setSelectedCountry, selectedCountry }) => {
    // CountrySelector div change the class depending on the value of selectedCountry
  return (
    <div className={`CountrySelector ${selectedCountry===name ? 'bgBlue' : ''}`} onClick={() => setSelectedCountry(name)}>
      {name}
    </div>
  );
};

export default CountrySelector;
