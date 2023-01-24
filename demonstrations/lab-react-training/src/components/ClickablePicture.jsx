import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [isClicked, setIsClicked] = useState(false);
  const toggleLinks = () =>{
    console.log('BEFORE ==>', isClicked)
    setIsClicked(!isClicked)
    console.log('AFTER ==>', isClicked)
  }
  return (
    <div>
      <img
        src={isClicked ? imgClicked : img}
        alt="maxence_image"
        style={{ width: 100 }}
        onClick={() => toggleLinks()}
      />
    </div>
  );
};

export default ClickablePicture;
