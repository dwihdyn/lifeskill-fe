import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Image,
  Card,
  ListGroup,
  Nav,
  ProgressBar
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/StudentProfile.css";
import axios from "axios";

import profileImg from "../assets/profile_jw_small.png";
import PointsWeekly from "../Containers/PointsWeekly";
import PointsYearly from "../Containers/PointsYearly";
import PointsChartKick from "../Containers/PointsChartKick";
import ClubProgress from "../Containers/ClubProgress";
import MyProgress from "../Containers/MyProgress";
import axios from "axios";

class StudentProfile extends React.Component {
  state = {
    graph: "weekly",
    id_number: ``,
    full_name: ``,
    accumulated_score: ``,
    favourites: [],
    favActs: []
  };

  toggleView = e => {
    this.setState({ graph: e.target.name });
  };

  componentDidMount() {
    axios
      .post("http://localhost:5000/api/v1/students/users/me", {
        id_number: localStorage.getItem("id_number")
      })
      .then(res => {
        console.log(res.data)
        if (res.data.isStudent) {
          this.setState({
            id_number: res.data.id_number,
            full_name: res.data.full_name,
            creativity_score: res.data.creativity_score,
            leadership_score: res.data.leadership_score,
            respect_score: res.data.respect_score,
            accumulated_score: res.data.accumulated_score
          });
        } else {
          this.setState({
            id_number: res.data.id_number,
            full_name: res.data.full_name
          });
        }
      })
      .catch(err => {
        console.log(err);});

     axios   
      .get("http://localhost:5000/api/v1/calendar/club")
      .then(response => {
        let newFave = response.data.filter(favourite => {
          return favourite.fav;
        });
        this.setState({
          favourites: newFave
        });
      })
      .catch(error => {
        console.log(error);
      });

      axios
      .get("http://localhost:5000/api/v1/calendar/activity")
      .then(response => {
        let newActs = response.data.filter(favourite => {
          return favourite.fav;
        });
        this.setState({
          favActs: newActs
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { graph, id_number, full_name, accumulated_score } = this.state;
    let display_points;

    if (graph === "weekly") {
      display_points = (
        <PointsWeekly
          creativity_score={this.state.creativity_score}
          leadership_score={this.state.leadership_score}
          respect_score={this.state.respect_score}
          accumulated_score={this.state.accumulated_score}
        />
      );
    } else if (graph === "yearly") {
      display_points = <PointsYearly />;
    } else if (graph === "chartkick") {
      display_points = <PointsChartKick />;
    }

    const { favourite } = this.state.favourites.map(favourite => {});

    return (
      <>
        <Container className="Dashboard-container">
          <Row className="Dashboard-row">
            <Col className="Dashboard-sidebar" lg={2} md={2} sm={12}>
              <Image
                className="Dashboard-sidebar-img"
                src={profileImg}
                roundedCircle
                alt="profile pic"
              />
              <div className="Dashboard-sidebar-info">
                <p>
                  <strong>{full_name}</strong>
                </p>
                <p>Year 9</p>
              </div>
              {/* Nav to display Points or Progress component */}
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link eventKey="link-1" className="Sidebar-link">
                  My Points
                </Nav.Link>
                <Nav.Link eventKey="link-2" className="Sidebar-link">
                  My Progress
                </Nav.Link>
                <Nav.Link eventKey="link-3" className="Sidebar-link">
                  Missions
                </Nav.Link>
                <Nav.Link eventKey="link-4" className="Sidebar-link">
                  Suspend
                </Nav.Link>
              </Nav>
            </Col>
            <Col className="Dashboard-charts" lg={10} md={10} sm={12}>
              <div className="Dashboard-charts-header">
                <p className="Dashboard-charts-header-li">
                  <strong>Hello, {full_name}. Welcome to your dashboard</strong>
                </p>
                <p className="Dashboard-charts-header-li">
                  <strong>Total Points: {accumulated_score}</strong>
                </p>
              </div>

              <Row>
                <Col className="Dashboard-points">
                  {" "}
                  <div className="Wrapper">
                    <div className="Wrapper-header">
                      {" "}
                      <h3 className="Dashboard-points-header">My Points</h3>
                      <p>Monday, 2/12/2019 - Sunday, 8/12/2019</p>
                    </div>

                    {/* Nav to toggle between weekly and yearly */}
                    <div className="Wrapper-btn">
                      <Button
                        className="Dashboard-points-button"
                        variant="warning"
                        name="weekly"
                        onClick={e => this.toggleView(e)}
                      >
                        Weekly
                      </Button>
                      <Button
                        className="Dashboard-points-button"
                        variant="warning"
                        name="yearly"
                        onClick={e => this.toggleView(e)}
                      >
                        Year-To-Date
                      </Button>
                    </div>
                  </div>
                  {display_points}
                </Col>
              </Row>
              <Row>
                <Col className="Dashboard-progress">
                  {" "}
                  <h3 className="Dashboard-progress-header">
                    My Progress Towards:
                  </h3>
                  {/* <ClubProgress></ClubProgress> */}
                  {/* render progress for clubs */}
                  {this.state.favourites.map(favourite => {
                    return (
                      <MyProgress
                        key={favourite.id}
                        favClubs={this.state.favourites}
                      />
                    );
                  })}
                  {/* render progress for activities */}
                  {this.state.favourites.map(favourite => {
                    return (
                      <MyProgress
                        key={favourite.id}
                        favActs={this.state.favActs}
                      />
                    );
                  })}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default StudentProfile;
