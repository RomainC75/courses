// Wrong!
function MyComponent() {
    return (
      <h1>Hello Ironhacker!</h1>
      <h3>Welcome To World of React</h3>
    )
  }

// Correct!
function MyComponent() {
    return (
      <div>
        <h1>Hello Ironhacker!</h1>
        <h3>Welcome To World of React</h3>
      </div>
    );
  }
  