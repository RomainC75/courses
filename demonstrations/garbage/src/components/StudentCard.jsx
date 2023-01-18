// ./src/components/StudentCard.js
import React from 'react';
 
function StudentCard(props) {
    
  return (
    <div className="StudentCard">
      <p>
        <b>Name:</b> {props.name}
      </p>
      <p>
        <b>Cohort:</b> {props.info.city} - {props.info.course}
      </p>
      <p>
        <b>Current week: {props.week} </b>
      </p>
      <br />
    </div>
  );
}
 
export default StudentCard;