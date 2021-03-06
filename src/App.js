// main file
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM NAMING CONVENTION
    <>
      <div className="app">
        <div className="app__body">
          <Router>
            <Switch>
              <Route path="/app">
                <Sidebar />
                <Chat />
              </Route>
              <Route path="/">
                <h1>Home screen</h1>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
