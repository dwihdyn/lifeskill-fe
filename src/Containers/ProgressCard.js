import React from "react";
import "../styles/ProgressCard.css";

import { ProgressBar, Image, Button, Row, Col } from "react-bootstrap";

class MyProgress extends React.Component {
  // state = {
  //   now: 60,
  //   total: 100
  // };

  render = props => {
    console.log(this.props.fave);

    const { name, image, points } = this.props.fave;

    return (
      <>
        <div className="Progress">
          <div className="Progress-wrapper">
            <ProgressBar variant="info" animated 
            now={(this.props.accumulated_score / points) * 100} 
            />
            {/* <img src={image} /> */}
            <p className="Progress-name">{name}</p>
            <h4>{`${this.props.accumulated_score} out of ${points}`}</h4>
            <Button variant="warning">Apply</Button>
          </div>
        </div>
      </>
    );
  };
}

export default MyProgress;
