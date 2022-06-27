
import './App.css';

function Person() {
  return(
    <>
      <h1>Name:John</h1>
      <h2>Last Name: Doe</h2>
      <h3>Age:30</h3>
    </>
  );
}
function App() {
  const name='John';
  const isnameshowing=true;

  return (
    <div className="App">
    <Person/>
      <h1> Hello {isnameshowing ? name:'someone'}! </h1>
    </div>
  );
}

export default App;
