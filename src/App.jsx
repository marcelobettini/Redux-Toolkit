import SuperCounter from "./components/SuperCounter";
import Dogs from "./components/Dogs";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Dogs />
      </header>
    </div>
  );
}

export default App;
