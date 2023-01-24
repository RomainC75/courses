import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const bgColor = `rgb(${r},${g},${b})`;
    const decToHex = (decValue) =>{
        const arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
        decValue=parseInt(decValue)
        const first = Math.floor(decValue/16)
        const second = decValue-16*first
        return arr[first]+arr[second]
    }
    const decToHexNew = (decValue) =>{
        return decValue.toString(16)
    }
  return <div className='border' style={{ backgroundColor: bgColor, padding:10 }}>
    <p>{bgColor}</p>
    <p>{`#${decToHex(r)}${decToHex(g)}${decToHex(b)}`}</p>
    </div>;
};

export default BoxColor;
