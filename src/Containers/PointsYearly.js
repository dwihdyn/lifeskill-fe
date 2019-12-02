import React from "react";
import "../styles/scoreboard.css";
import { Button } from "react-bootstrap";

class Scoreboard extends React.Component {
  render() {
    return (
      <div className="scoreboard">
        <div className="header">Leaderboard</div>
        <div className="students">
          <div className="student">
            <div className="student-name">Student1</div>
            <div className="student_score">
              <Button className="give-points">Give Points</Button>
            </div>
          </div>

          <div className="student">
            Student2
            <Button className="give-points">Give Points</Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Scoreboard;
