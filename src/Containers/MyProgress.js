import React from "react";

import { ProgressBar, Image, Button, Row, Col } from "react-bootstrap";
import profileImg from "../assets/profile_jw_small.png";

class MyProgress extends React.Component {
  state = {
    now: 60,
    total: 100
  };

  render() {
    return (
      <>
        <Row>
          <Col className="Progress">
            <div className="Progress-wrapper">
              <Image
                className="Progress-img"
                src={profileImg}
                roundedCircle
                alt="profile pic"
              />
              <ProgressBar
                className="Progress-bar"
                variant="warning"
                now={this.state.now}
                label={this.state.now + "/" + this.state.total}
              />
              <p>Club Name</p>
              <Button>Apply Now</Button>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default MyProgress;
