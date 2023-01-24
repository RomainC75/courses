import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [links, setLinks] = useState([img, imgClicked]);
  const toggleLinks = () =>{
    console.log(links)
    setLinks(links.reverse())
    console.log('==>',links)
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

export default ClickablePicture;
