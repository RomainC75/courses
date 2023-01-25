import React, { useState } from 'react';

const ClickablePictureArray = ({ img, imgClicked }) => {
  const [links, setLinks] = useState([img, imgClicked]);
  const toggleLinks = () =>{
    // const buff = [...links]
    // buff.reverse()
    // setLinks(buff)
    setLinks([...links].reverse())
  }
  return (
    <div>
      <p>==========</p>
      <h2>Array </h2>
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
