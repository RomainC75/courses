// ./src/components/StudentCard.js
import React from 'react';
 
function StudentCard(props) {
  return (
    <div className="StudentCard">
      <p>
        <b>Name:</b> NAME
      </p>
      <p>
        <b>Cohort:</b> CITY - COURSE
      </p>
      <p>
        <b>Current week: WEEK </b>
      </p>
      <br />
    </div>
  );
}
 
export default StudentCard;