// main file
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM NAMING CONVENTION
    <div className="app">
      <div className="app__body">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
