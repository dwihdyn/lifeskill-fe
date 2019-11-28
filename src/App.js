import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";

import LoginSignupPage from "./Pages/LoginSignupPage";
import StudentProfile from "./Pages/StudentProfile";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import NavBar from "../src/Components/NavBar";

class App extends React.Component {
  state = {
    isLogin: false,
    redirect: false,
    inLoginPage: true
  };

  // change this to see whether token exist or not
  toggleLogin = () => {
    const { isLogin } = this.state;
    this.setState({ isLogin: !isLogin });
  };

  handleLogout = () => {
    this.setState({
      redirect: true
    });
    localStorage.removeItem("authToken");
  };

  render() {
    // direct user to login back when user logout
    if (this.state.redirect) {
      // return <Redirect to="/login" />;
      return <LandingPage />;
    }

    return (
      <>
        <NavBar
          isLogin={this.state.isLogin}
          redirect={this.state.redirect}
          inLoginPage={this.state.inLoginPage}
          handleLogout={this.handleLogout}
          toggleLogin={this.toggleLogin}
        />
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return localStorage.getItem("authToken") ? (
                <HomePage />
              ) : (
                <LandingPage />
              );
            }}
          />
          <Route
            exact
            path="/login"
            component={() => {
              return (
                <LoginSignupPage
                  isLogin={this.state.isLogin}
                  toggleLogin={this.toggleLogin}
                />
              );
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
