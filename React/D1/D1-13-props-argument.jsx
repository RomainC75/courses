// App.js
// ... imports stay unchanged
 
function App() {
    return (
      <div className="App">
        <Navbar />
        <Greeting firstName="Harper" lastName='Ben'/>
        <hr />
        <Greeting />
        <hr />
        <Greeting />
        <hr />
      </div>
    );
  }

// const firstName="Harper"
// const lastName = "Bob"
// Greeting(firstName, lastName)