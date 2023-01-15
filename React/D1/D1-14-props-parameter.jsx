// ./src/components/Greeting.js
function Greeting(props) {
    const message = 'Hello Ana!';
   
    console.log(props);
   
    return (
      <div>
        <u>{message}</u>
      </div>
    );
  }
   
  export default Greeting;