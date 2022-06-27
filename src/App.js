
import './App.css';

function App() {
  const name='John';
  const isnameshowing=true;
  
  return (
    <div className="App">
      <h1> Hello {isnameshowing ? name:'someone'}! </h1>
    </div>
  );
}

export default App;
