import React from "react";
import "../styles/scoreboard.css";
import { Button } from "react-bootstrap";

class Scoreboard extends React.Component {
  render() {
    return (
      <>
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
      <div style={{ height: "40%", width: "40%" }}>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc" }
            }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 }
            ]}
          />
        </VictoryChart>
      </div>
      </>
    );
  }
}
export default Scoreboard;
