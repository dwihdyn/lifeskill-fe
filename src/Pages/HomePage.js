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
        console.log(response);
        this.setState({
          clubs: response.data
        });
        console.log(this.state.clubs);
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
    return (
        <>
        <h1>Homepage</h1>;
        <MoreInfoCard clubs = {clubs}/>;
        </>
    )

  }
}

export default HomePage;
