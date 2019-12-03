import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import StudentProfile from "./Pages/StudentProfile";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import NavBar from "./Components/NavBar";
import LoginForm from "./Containers/LoginForm";
import SignupForm from "./Containers/SignupForm";

import "./App.css";

class App extends React.Component {
  handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("id_number");
    localStorage.removeItem("id");
    return (window.location = "/");
  };

  render() {
    return (
      <>
        <NavBar handleLogout={this.handleLogout} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return <LandingPage />;
            }}
          />
          <Route
            exact
            path="/login"
            component={() => {
              return <LoginForm />;
            }}
          />
          <Route
            exact
            path="/signup"
            component={() => {
              return <SignupForm />;
            }}
          />
          <Route
            exact
            path="/homepage"
            component={() => {
              return <HomePage />;
            }}
          />
          <Route
            exact
            path="/profile"
            component={() => {
              return <StudentProfile />;
            }}
          />
        </Switch>
      </>
    );
  }
}

export default App;
