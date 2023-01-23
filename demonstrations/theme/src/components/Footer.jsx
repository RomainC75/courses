import React from "react";

const Footer = ({setTheme}) => {
  const toggleTheme = (val) => {
    console.log(val.target.value);
    setTheme(val.target.value === "light" ? true : false);
  };

  return (
    <div>
      <select name="" id="" onChange={toggleTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default Footer;
