import React from 'react';
import './style/idFacebook.css';



const IdCardFacebook = (props) => {
  // console.log(props);
    const { lastName, firstName, country, isStudent, img } = props.data;
    const { selectedCountry } = props

  return (
    <div className={`IdCardFacebook border ${selectedCountry===country || selectedCountry==='All' ? 'bgBlue' : ''}`}>
      <div className="picture">
        <img src={img} />
      </div>
      <div className="infoText">
        <p><span>First Name</span> : {firstName}</p>
        <p><span>Last Name</span> : {lastName}</p>
        <p><span>Country</span> : {country}</p>
        <p><span>Type</span> : {isStudent ? 'Student' : 'Teacher'} </p>
      </div>
    </div>
  );
};

export default IdCardFacebook;


