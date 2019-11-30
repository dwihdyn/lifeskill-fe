import React from "react";
import { Button } from "reactstrap";
import {
  Container,
  Col,
  Row,
  Card,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";

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
        <Container className="Dashboard">
          <h1 style={{ paddingTop: 100, paddingBottom: 30 }}>My Dashboard</h1>
          <Row>
            <Col
              className="Dashboard-profile"
              lg={3}
              sm={12}
              style={{ height: "vh", border: "1px solid black" }}
            >
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src="./assets/profile_jw_small.jpg"
                  roundedCircle
                />
                <Card.Body>
                  <Card.Title>Jules W.</Card.Title>
                  <Card.Text>Year 11</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Netball Team</ListGroupItem>
                  <ListGroupItem>
                    Most Improved Last Week: Leadership
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Missions</Card.Link>
                  <Card.Link href="#">Suspend</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col
              className="Dashboard-charts"
              lg={9}
              sm={12}
              style={{ height: "vh", border: "1px solid black" }}
            >
              <Row
                className="Dashboard-points"
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
              <Row
                className="Dashboard-progress"
                style={{ height: "200px", border: "1px solid black" }}
              >
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
