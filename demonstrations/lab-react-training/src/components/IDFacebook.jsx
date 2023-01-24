import React from 'react';
import './style/idCard.css';

const IdCardFacebook = (props) => {
  // console.log(props);
    const { lastName, firstName, country, isStudent, img } = props.data;
  return (
    <div className="IdCardFacebook">
      <div className="picture">
        <img src={img} style={{width:50}}/>
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


