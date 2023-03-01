import logo from './logo.svg';
import './App.css';

function firstFunction(){
  throw new Error("Oops this is not good");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => firstFunction()} />
      </header>
    </div>
  );
}

export default App;
