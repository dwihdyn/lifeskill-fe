import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, withRouter } from "react-router-dom";

import LoginSignupPage from "./Pages/LoginSignupPage";
import StudentProfile from "./Pages/StudentProfile";
import HomePage from "./Pages/HomePage";

class App extends React.Component {
  render() {
    return (
      <>
        <Route
          exact
          path="/login"
          component={() => {
            return <LoginSignupPage />;
          }}
        />
        <Route
          exact
          path="/homepage"
          component={props => {
            return <HomePage {...props} />;
          }}
        />
        <Route
          exact
          path="/profile"
          component={() => {
            return <StudentProfile />;
          }}
        />
        <Route
          exact
          path="/"
          component={props => {
            return localStorage.getItem("authToken") ? (
              <HomePage {...props} />
            ) : (
              <LoginSignupPage />
            );
          }}
        />
      </>
    );
  }
}

export default withRouter(App);
