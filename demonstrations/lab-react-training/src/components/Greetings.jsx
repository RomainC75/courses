import React from 'react';
import './style/greetings.css'
const getGreetings = (lang) => {
  switch (lang) {
    case 'de':
      return 'Hallo';
    case 'es':
      return 'Holâ';
    case 'fr':
      return 'Salut';
    default:
      return 'Hi';
  }
};

const Greetings = ({ lang, children }) => {
  return <div className="Greetings border">
    <p>{getGreetings(lang)} {children}</p>
  </div>;
};

export default Greetings;
