import LeftBar from "./components/LeftBar";
import './App.css'
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <div className="twitterHome">
        <LeftBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
