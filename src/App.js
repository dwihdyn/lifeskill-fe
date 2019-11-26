import React from "react";
import "./App.css";

// import axios from 'axios';
import { Route } from "react-router-dom";

import LoginSignupPage from "./Pages/LoginSignupPage";
import StudentProfile from "./Pages/StudentProfile";

class App extends React.Component {
  render() {
    return (
      <>
        <Route
          exact
          path="/"
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
      </>
    );
  }
}

export default App;
