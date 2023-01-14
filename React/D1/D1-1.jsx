// App.js
// ... imports stay unchanged
 
const heading = <h1> React is cool! </h1>;
 
const student = {
  firstName: 'ana',
  lastName: 'martinez'
};
 
function App() {
  return (
    <div className="App">
      {heading}
 
      <h3>
        Hi, {student.firstName} {student.lastName}!
      </h3>
    </div>
  );
}

// 
// App.js
// ... everything that we already added stays unchanged, except function App()

const { firstName, lastName } = student;

function App() {
  return (
    <div className="App">
      {heading}

      <h3>
        {/* You can turn this to {firstName} {lastName} */}
        Hi, {student.firstName} {student.lastName}!
      </h3>

      <h4>
        In uppercase: {firstName.toUpperCase()} {lastName.toUpperCase()}.
      </h4>
    </div>
  );
}
