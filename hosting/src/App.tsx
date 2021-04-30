import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import "react-datepicker/dist/react-datepicker.css";
import "./assets/css/main.scss"
// import { generateRandomUser } from './sdk';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/schedule/:userId" component={UserPage} />
      </Switch>
    </Router>
  );
}

export default App;
