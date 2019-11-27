import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";

import LoginSignupPage from "./Pages/LoginSignupPage";
import StudentProfile from "./Pages/StudentProfile";
import MoreInfoCard from "./components/MoreInfoCard";

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
          path="/profile"
          component={() => {
            return <StudentProfile />;
          }}
        />

        <Route
          exact
          path="/"
          component={() => {
            return localStorage.getItem("authToken") ? (
              <StudentProfile />
            ) : (
              <LoginSignupPage />
            );
            // return <MoreInfoCard />;
          }}
        />
      </>
    );
  }
}

export default App;
