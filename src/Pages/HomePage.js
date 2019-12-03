import React from "react";
import axios from "axios";
import "../styles/HomePage.css";

import { Container, Row, Col } from "react-bootstrap";
import { func } from "prop-types";

class HomePage extends React.Component {
  state = {
    clubs: [],
    activities: [],
    fullname: ""
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

    axios
      .get("http://localhost:5000/api/v1/students/login")
      .then(response => {
        console.log(response);
        this.setState({
          fullname: response.data.full_name
        });
      })

      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    let { clubs, activities, full_name } = this.state;
    return (
      <>
        <h2> Welcome back, {full_name}</h2>
        <Container className="Homepage">
          <Row className="Header-wrapper">
            <Col className="Homepage-header">
              <h1>2019 School Calendar</h1>
              <p>Choose your favourite clubs and activities.</p>
            </Col>
          </Row>

          <Row className="Clubs-wrapper">
            <h3 className="Clubs-header">Clubs</h3>
            <Col>{/* INSERT CODE FOR SLIDER HERE */}</Col>
          </Row>
          
          <Row
            className="Activities-wrapper"
          >
            <h3 className="Activities-header">Activities</h3>
            <Col>{/* INSERT CODE FOR SLIDER HERE */}</Col>
          </Row>
        </Container>
        {/* <MoreInfoCard />; */}
      </>
    );
  }
}

export default HomePage;
