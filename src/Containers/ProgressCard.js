import React from "react";
import "../styles/ProgressCard.css";

import { ProgressBar, Image, Button, Row, Col } from "react-bootstrap";
import profileImg from "../assets/profile_jw_small.png";

class MyProgress extends React.Component {
  // state = {
  //   now: 60,
  //   total: 100
  // };

  render = props => {
    return (
      <>
        <div className="Progress">
            <div className="Progress-wrapper">
              <p>Progress Card</p>
            </div>
        </div>
      </>
    );
  };
}

export default MyProgress;
