import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme, VictoryLabel,VictoryScatter} from 'victory'
import './ClubProgress.css'
import ClubImage from './ClubImage'


class ClubProgress extends React.Component {
    state = {
        data: [
            {skill: 1, points: 80, label:"ASAD"},
            {skill: 2, points: 50, label:""},
            {skill: 3, points: 100, label:""},
            {skill: 4, points: 80, label:"" },
            {skill: 5, points: 80, label:"" },
            // {skill: 6, points: 80, label:"" },
            // {skill: 7, points: 80, label:"" },
            // {skill: 8, points: 80, label:"" },

        ]
    };
    render() {
        return (
            <div style={{height: "400px", width: "400px"}}>

                <VictoryChart domainPadding={20} theme={VictoryTheme.material} horizontal>
                    <VictoryAxis
                        // tickValues specifies both the number of ticks and where
                        // they are placed on the axis
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={["Music", "Debate", "Sports", "Art", "FFFF"]}
                    />

                    {/* <VictoryScatter
                        style={{ axis: {
                            fill: "grey",
                            stroke: "red",
                            strokeWidth: 2
                        } }}
                        symbol={"plus"}
                        data={this.state.data}
                  /> */}
                    <VictoryAxis
                        dependentAxis
                        // tickFormat specifies how ticks should be displayed
                        tickFormat={(x) => (`${x}%`)}
                        

                        />

                    
                    <VictoryBar 
                        data={this.state.data}
                        // data accessor for x values
                        x="skill"
                        // data accessor for y values
                        y="points"
                        
                        // add like button
                        // labelComponent={
                            
                        //         <VictoryLabel events={{onClick: () => {alert('clicked')} }} className="btn btn-primary" style={{fill: "aqua", border: "1px solid black",cursor:'pointer' }}/>

                        
                            // <foreignObject x={100} y={100}>
                            //     <button onClick={() => {alert('yo')}}>hello</button>
                            // </foreignObject>
                        // }
                    />
                </VictoryChart>
            </div>
        )
    }
}

export default ClubProgress;