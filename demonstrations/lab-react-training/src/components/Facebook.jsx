import React from 'react';
import { useState, useEffect } from 'react';
import profiles from '../data/berlin.json';
import CountrySelector from './CountrySelector';
import IdCard from './IdCard';
import IdCardFacebook from './IDFacebook';

import './style/facebook.css';

const getCoutries = (data) => {
  const countries = data.map((profile) => profile.country);
  const uniqCountriesList = new Set(countries);
  return Array.from(uniqCountriesList);
};

const Facebook = () => {
  console.log(profiles);
  const [displayAllCountryButtons, setDisplayAllCountryButtons] =
    useState(false);
  const [selectedCountry, setSelectedCountry] = useState('All')

  const toggleDisplayButton = () => {
    setDisplayAllCountryButtons(!displayAllCountryButtons);
  };

  return (
    <div className="Facebook">
      <h2>Facebook</h2>
      
      <div className="filter">
      {/* ALL button */}
      <CountrySelector name="All" setSelectedCountry={setSelectedCountry} selectedCountry={selectedCountry}/>
      {/* other buttons */}
        {getCoutries(profiles).filter((countryName,i)=> displayAllCountryButtons || i<4 ).map((countryName,i) => (
          <CountrySelector key={i+countryName} name={countryName} setSelectedCountry={setSelectedCountry} selectedCountry={selectedCountry}/>
        ))}
        <div onClick={() => toggleDisplayButton()} className="CountrySelector">
          <p>...</p>
        </div>
      </div>
      {/* CONTENT */}
      {profiles.map((profile,i) => (
        <IdCardFacebook key={i+profile.lastName} data={profile} selectedCountry={selectedCountry}/>
      ))}
    </div>
  );
};

export default Facebook;

// <IdCard
//   lastName='Doe'
//   firstName='John'
//   gender='male'
//   height={178}
//   birth={new Date("1992-07-14")}
//   picture="https://randomuser.me/api/portraits/men/44.jpg"
// />
