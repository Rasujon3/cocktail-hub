import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route exact path='/' >  </Route> */}
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
