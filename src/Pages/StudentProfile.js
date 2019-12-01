import React from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import "../styles/StudentProfile.css";

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
              <Image src="../assets/profile_jw_small.png" roundedCircle />
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
                  <h4>My Points</h4>
                  <Button name="weekly" onClick={e => this.toggleView(e)}>
                    Weekly
                  </Button>
                  <Button name="yearly" onClick={e => this.toggleView(e)}>
                    Yearly
                  </Button>
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
