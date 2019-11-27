import React from "react";
import { Button } from "reactstrap";

import PointsWeekly from "../Containers/PointsWeekly";
import PointsYearly from "../Containers/PointsYearly";
import ClubProgress from "../Containers/ClubProgress";

// logout handler
import { Redirect } from "react-router-dom";

class StudentProfile extends React.Component {
  state = {
    graph: "bar",
    redirect: false
  };

  toggleView = e => {
    this.setState({ graph: e.target.name });
  };

  handleLogout = () => {
    this.setState({
      redirect: true
    });
    localStorage.removeItem("authToken");
  };

  render() {
    const { graph, redirect } = this.state;
    let display;

    // direct user to login back when user logout
    if (redirect) {
      return <Redirect to="/login" />;
    }

    if (graph === "bar") {
      display = <PointsWeekly></PointsWeekly>;
    } else if (graph === "line") {
      display = <PointsYearly></PointsYearly>;
    } else {
      display = <ClubProgress></ClubProgress>;
    }
    return (
      <>
        <Button name="bar" onClick={e => this.toggleView(e)}>
          Bar
        </Button>
        <Button name="line" onClick={e => this.toggleView(e)}>
          Line
        </Button>
        <Button name="progress" onClick={e => this.toggleView(e)}>
          Progress
        </Button>
        {/* handle logout */}
        <Button name="Logout" onClick={this.handleLogout}>
          Logout
        </Button>
        {display}
      </>
    );
  }
}

export default StudentProfile;
