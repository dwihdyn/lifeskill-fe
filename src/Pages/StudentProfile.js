import React from "react";
import { Button } from "reactstrap";
import { Container, Col, Row } from "react-bootstrap";

import PointsWeekly from "../Containers/PointsWeekly";
import PointsYearly from "../Containers/PointsYearly";

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
        <h1 style={{ margin: "80px" }}>My Dashboard</h1>
        <Container>
          <Row>
            <Col
              lg={3}
              sm={12}
              style={{ height: "vh", border: "1px solid black" }}
            >
              <h3>Student profile info here</h3>
            </Col>
            <Col
              lg={9}
              sm={12}
              style={{ height: "vh", border: "1px solid black" }}
            >
              <Row
                style={{
                  height: "200px",
                  border: "1px solid black",
                  display: "block"
                }}
              >
                <h3>My Points</h3>
                {/* <PointsNavBar toggleView={this.toggleView}/>{" "} */}
                <Button name="weekly" onClick={e => this.toggleView(e)}>
                  Weekly
                </Button>
                <Button name="yearly" onClick={e => this.toggleView(e)}>
                  Yearly
                </Button>
                {display_points}
              </Row>
              <Row style={{ height: "200px", border: "1px solid black" }}>
                <h3>My Progress</h3>
                {/* <ClubProgress></ClubProgress> */}
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default StudentProfile;
