import React from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";

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
    let { clubs, activities } = this.state;
    return (
      <>
        <h1 style={{ margin: "80px" }}>2019 School Calendar</h1>
        <Container>
          <h3>Clubs</h3>
          <Row style={{ height: "200px", border: "1px solid black" }}></Row>
          <h3>Activities</h3>
          <Row style={{ height: "200px", border: "1px solid black" }}></Row>
        </Container>

        {/* <MoreInfoCard />; */}
      </>
    );
  }
}

export default HomePage;
