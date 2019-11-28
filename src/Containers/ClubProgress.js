import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme} from 'victory'

class PointsWeekly extends React.Component {
    state = {
        data: [
            {skill: 1, points: 100},
            {skill: 2, points: 100},
            {skill: 3, points: 100}
        ]
    };
    render() {
        return (
            <div>
                <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
                    <VictoryAxis
                        // tickValues specifies both the number of ticks and where
                        // they are placed on the axis
                        tickValues={[1, 2, 3]}
                        tickFormat={["Music", "Debate", "Sports"]}
                    />
                    <VictoryAxis
                        dependentAxis
                        // tickFormat specifies how ticks should be displayed
                        tickFormat={(x) => (`${x}%`)}
                        />
                    <VictoryBar horizontal
                        data={this.state.data}
                        // data accessor for x values
                        x="skill"
                        // data accessor for y values
                        y="points"
                    />
                </VictoryChart>
            </div>
        )
    }
}

export default PointsWeekly