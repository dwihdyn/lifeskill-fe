import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import StudentProfile from "./Pages/StudentProfile";
import HomePage from "./Pages/HomePage";
<<<<<<< HEAD
import LandingPage from "./Pages/LandingPage";
import NavBar from "./Components/NavBar";
import LoginForm from "./Containers/LoginForm";
import SignupForm from "./Containers/SignupForm";
import HomePage2 from "./Pages/HomePage2";

=======
import HomePage2 from "./Pages/HomePage2";
>>>>>>> eeed01926baef9ca02bee2aa16a72ee8bb73bb6d
import "./App.css";

class App extends React.Component {
  handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("id_number");
    return (window.location = "/");
  };

  render() {
    return (
      <>
<<<<<<< HEAD
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
            path="/homepage2"
            component={() => {
              return <HomePage2 />;
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
=======
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
          path="/homepage2"
          component={() => {
            return <HomePage2 />;
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
>>>>>>> eeed01926baef9ca02bee2aa16a72ee8bb73bb6d
      </>
    );
  }
}

export default App;
