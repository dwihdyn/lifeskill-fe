import React from "react";
import axios from "axios";
import { Button } from "reactstrap";

import MoreInfoCard from "../Containers/MoreInfoCard";
import LoginSignupPage from "./LoginSignupPage";
import StudentProfile from "./StudentProfile";
import { Redirect } from "react-router-dom";

class HomePage extends React.Component {
  state = {
    clubs: [],
    activities: [],
    redirect: false
  };

  handleLogout = () => {
    this.setState({
      redirect: true
    });
    localStorage.removeItem("authToken");
  };

  profilePage = () => {
    return <Redirect to="/profile" />;
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/v1/calendar/club")
      .then(response => {
        console.log(response);
        this.setState({
          clubs: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/api/v1/calendar/activity")
      .then(function(response) {
        console.log(response);
      })

      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <LoginSignupPage />;
    }
    return (
      <>
        <h1>Homepage</h1>
        <Button
          onClick={() => {
            this.props.history.push("/profile");
          }}
        >
          Profile
        </Button>
        <Button onClick={this.handleLogout}>Logout</Button>
        <MoreInfoCard clubs={this.state.clubs} />
      </>
    );
  }
}

export default HomePage;
