// ./src/components/Greeting.js
function Greeting(props) {
    // const {firstName, lastName} = props
   
    console.log(props);
    // {
    //   firstName:'Harper',
    //   lastName:'Ben'
    // }
   
    return (
      <div>
        <u>{props.firstName}</u>
        <u>{props.lastName}</u>
      </div>
    );
  }
   
  export default Greeting;