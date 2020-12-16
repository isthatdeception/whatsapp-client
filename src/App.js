// main file
import './App.css';
import Sidebar from './Sidebar';
import Chat from "./Chat";

function App() {
  return (
    // BEM NAMING CONVENTION
    <div className="app">
      <div className="app__body">
        <Sidebar/>
        <Chat />
      </div>
    </div>
  );
}

export default App;
