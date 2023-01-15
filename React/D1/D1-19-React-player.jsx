// App.js
// ... previous imports stay unchanged

// import ReactPlayer from the npm package
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      {/* ... no changes here ... */}
      <hr />
      <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing />
    </div>
  );
}

export default App;
