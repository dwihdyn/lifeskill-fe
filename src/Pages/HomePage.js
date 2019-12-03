import React from "react";
import axios from "axios";

import MoreInfoCard from "../Containers/MoreInfoCard";

class HomePage extends React.Component {
  state = {
    clubs: [],
    activities: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/v1/calendar/club")
      .then(response => {
        // console.log(response);
        this.setState({
          clubs: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/api/v1/calendar/activity")
      .then(response => {
        // console.log(response);
        this.setState({
          activities: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <h1>Homepage</h1>
        <h3>Class</h3>
        {this.state.clubs.length > 0 &&
        <MoreInfoCard arr={this.state.clubs}/>
        }
        <h3>Activities</h3>
        {this.state.activities.length > 0 &&
        <MoreInfoCard arr={this.state.activities}/>
        }
      </>
    )

  }
}

export default HomePage;
