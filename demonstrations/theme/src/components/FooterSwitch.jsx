import React from "react";

const FooterSwitch = ({setTheme}) => {
  const toggleTheme = () => {
    setTheme( (theme)=>!theme);
  };

  return (
    <div>
      <button onClick={()=>toggleTheme()}>Toggle Theme</button>
        
    </div>
  );
};

export default FooterSwitch;
