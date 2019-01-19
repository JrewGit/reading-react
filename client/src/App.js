import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import mainPage from "./pages/mainPage";
import savedPage from "./pages/savedPage";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="mainBody">
        <Nav />
        <Switch>
          <Route exact path="/" component={mainPage} />
          <Route exact path="/saved" component={savedPage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
