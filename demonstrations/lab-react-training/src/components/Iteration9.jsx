import React from 'react';
import ClickablePicture from './ClickablePicture';
import ClickablePictureArray from './ClickablePictureArray';

const Iteration9 = () => {
  return (
    <div>
      <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />
      <ClickablePictureArray img="maxence.png" imgClicked="maxence-glasses.png" />
    </div>
  );
};

export default Iteration9;
