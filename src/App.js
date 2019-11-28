import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

import LoginSignupPage from "./Pages/LoginSignupPage";
import StudentProfile from "./Pages/StudentProfile";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import NavBar from "../src/components/NavBar";


class App extends React.Component {
  state = {
    isLogin: true
  };
  toggleLogin = () => {
    const { isLogin } = this.state;
    this.setState({ isLogin: !isLogin });
  };

  render() {
    return (
      <>
        <NavBar isLogin={this.state.isLogin} />
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
              return <LoginSignupPage isLogin={this.state.isLogin} />;
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
