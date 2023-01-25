import React, { useState } from 'react';

const ClickablePictureArray = ({ img, imgClicked }) => {
  const [links, setLinks] = useState([img, imgClicked]);
  const toggleLinks = () =>{
    const buff = [...links]
    buff.reverse()
    setLinks(buff)
  }
  return (
    <div>
      <img
        src={links[0]}
        alt="maxence_image"
        style={{ width: 100 }}
        onClick={() => toggleLinks()}
      />
    </div>
  );
};

export default ClickablePictureArray;
