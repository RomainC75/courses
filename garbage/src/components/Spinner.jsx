// src/components/Spinner.js
 
const spinner = 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-lists/spinner.gif';
 
function Spinner() {
  return (
    <div className="Spinner">
      <img src={spinner} alt="loading spinner" />
    </div>
  );
}
 
export default Spinner;