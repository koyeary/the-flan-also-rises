import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
//import Searchbar from "./pages/Searchbar";

function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Route exact path="/" component={Main} />
          <Route exact path="/search" component={Main} />
           <Route exact path="/saved" component={Saved} />
          <Route exact path="/noMatch" component={NoMatch} />
      </div>
    </Router>
  )
  };

export default App;
