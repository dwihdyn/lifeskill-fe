import React from "react";
import { ColumnChart } from "react-chartkick";
import "chart.js";

class PointsWeekly extends React.Component {
  // state = {[]};
  render() {
    return (
      <div style= {{ height: "40%", width: "40%"}}>
        <VictoryChart
          domainPadding={20}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3]}
            tickFormat={["Creativity", "Leadership", "Respect"]}
          />
          <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            tickFormat={x => `${x / 100}`}
          />
          <VictoryBar
            data={this.state.data}
            // data accessor for x values
            x="skill"
            // data accessor for y values
            y="points"
          />
        </VictoryChart>
        <ColumnChart
          data={[
            ["Creativity", this.props.creativity_score],
            ["Leadership", this.props.leadership_score],
            ["Respect", this.props.respect_score],
            ["Total", this.props.accumulated_score]
          ]}
        />
      </div>
    );
  }
}

export default PointsWeekly;
