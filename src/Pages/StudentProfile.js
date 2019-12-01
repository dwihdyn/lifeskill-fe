import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Image,
  Card,
  ListGroup,
  ListGroupItem,
  Nav
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/StudentProfile.css";
import profileImg from "../assets/profile_jw_small.png";

import PointsWeekly from "../Containers/PointsWeekly";
import PointsYearly from "../Containers/PointsYearly";
import ClubProgress from "../Containers/ClubProgress";

class StudentProfile extends React.Component {
  state = {
    graph: "weekly"
  };
  toggleView = e => {
    this.setState({ graph: e.target.name });
  };
  render() {
    const { graph } = this.state;
    let display_points;

    if (graph === "weekly") {
      display_points = <PointsWeekly></PointsWeekly>;
    } else {
      display_points = <PointsYearly></PointsYearly>;
    }

    return (
      <>
        <Container className="Dashboard-container">
          {/* <h1 style={{ paddingTop: 100, paddingBottom: 30 }}>My Dashboard</h1> */}
          <Row className="Dashboard-row">
            <Col className="Dashboard-sidebar" lg={2} sm={12}>
              <Image
                className="Dashboard-sidebar-img"
                src={profileImg}
                roundedCircle
                alt="profile pic"
              />
              <div className="Dashboard-sidebar-info">
                <p>
                  <strong>(Name)</strong>
                </p>
                <p>Year 9</p>
              </div>
              {/* Nav to display Points or Progress component */}
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link eventKey="link-1" style={{ color: "#fa8d19" }}>
                  My Points
                </Nav.Link>
                <Nav.Link eventKey="link-2" style={{ color: "#fa8d19" }}>
                  My Progress
                </Nav.Link>
              </Nav>
            </Col>
            <Col className="Dashboard-charts" lg={10} sm={12}>
              <div className="Dashboard-charts-header">
                <p className="Dashboard-charts-header-li">
                  <strong>Hello, (Name). Welcome to your dashboard</strong>
                </p>
                <p className="Dashboard-charts-header-li">
                  <strong>Total Points: (Total)</strong>
                </p>
              </div>

              <Row>
                <Col className="Dashboard-points">
                  {" "}
                  <div className="Wrapper">
                    <div className="Wrapper-header">
                      {" "}
                      <h4 className="Dashboard-points-header">My Points</h4>

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
                  <h4>My Progress</h4>
                  <ClubProgress></ClubProgress>
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
