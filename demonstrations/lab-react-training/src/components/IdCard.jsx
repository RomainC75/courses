import React from 'react';
import './style/idCard.css';

const IdCard = (props) => {
  console.log(props);
    const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="IdCard">
      <div className="picture">
        <img src={picture} />
      </div>
      <div className="infoText">
        <p><span>First Name</span> : {firstName}</p>
        <p><span>Last Name</span> : {lastName}</p>
        <p><span>Gender</span> : {gender}</p>
        <p><span>Height</span> : {height} m</p>
        <p><span>Birth</span> : {birth.toDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;


