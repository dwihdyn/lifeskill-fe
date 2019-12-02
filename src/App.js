import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import StudentProfile from "./Pages/StudentProfile";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import NavBar from "./Components/NavBar";
import LoginForm from "./Containers/LoginForm";
import SignupForm from "./Containers/SignupForm";

class App extends React.Component {
  handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("id_number");
    return (window.location = "/");
  };

  render() {
    return (
<<<<<<< HEAD
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
=======
      <div className="App-header">
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
        <Route
          exact
          path="/"
          component={() => {
            return localStorage.getItem("authToken") ? (
              <StudentProfile />
            ) : (
              <LoginSignupPage />
            );
          }}
        />
      </div>
>>>>>>> e68cbe9486c38905f8d91af7b042ff1c9b55445d
    );
  }
}

export default App;
