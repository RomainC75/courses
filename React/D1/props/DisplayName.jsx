// function DisplayName(){

const DisplayName = (props) => {
    return (
      <div>
        <div>{props.person.firstName}</div>
        <div>{props.person.lastName}</div>
      </div>
    );
  };
  
  export default DisplayName;
  