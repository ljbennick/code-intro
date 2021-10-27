import React from "react";
// import "./App.css";
import Navbar from "../Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages";
import About from "../../pages/about";
import Food from "../../pages/food";
import Hotels from "../../pages/hotels";
import Login from "../Login/Login";
import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();

  if(!token){
    return <Login setToken={setToken} />
  }
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/food" component={Food} />
        <Route path="/hotels" component={Hotels} />
      </Switch>
    </Router>
  );
}

export default App;
