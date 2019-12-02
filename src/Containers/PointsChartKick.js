import React from "react";
import { LineChart, PieChart } from "react-chartkick";
import "chart.js";

class PointsChartKick extends React.Component {
  state = {
    data: { "2017-05-13": 2, "2017-05-14": 5 }
  };
  render() {
    return <LineChart data={this.state.data} />;
  }
}

export default PointsChartKick;
