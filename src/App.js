
import './App.css';

function Person(props) {
  return(
    <>
      <h1>Name:{props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h3>Age: {props.age}</h3>
    </>
  );
}
function App() {

  return (
    <div className="App">
    <Person
      name='John' lastName='Doe' age={20}
    />
    <Person
      name='Jane' lastName='Wright' age={25}
    />
    </div>
  );
}

export default App;
