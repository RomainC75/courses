// App.js
// ... everything that we already added stays unchanged, except function App()

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

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

      <h4>
        Capitalized:
        {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)}
      </h4>
    </div>
  );
}
