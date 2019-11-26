import React from 'react';
import { Button } from 'reactstrap';

import PointsWeekly from '../Containers/PointsWeekly'
import PointsYearly from '../Containers/PointsYearly'
import ClubProgress from '../Containers/ClubProgress'

class StudentProfile extends React.Component {
    state = {
        graph: 'bar'
    };
    toggleView = e => {
        this.setState({ graph: e.target.name });
    };
    render() {
        const { graph } = this.state;
        let display;

        if (graph === 'bar') {
            display = <PointsWeekly></PointsWeekly>
        } else if (graph === 'line') {
            display = <PointsYearly></PointsYearly>
        } else {
            display = <ClubProgress></ClubProgress>
        }
        return (
            <>
                <Button name='bar' onClick={e => this.toggleView(e)}>Bar</Button>
                <Button name='line' onClick={e => this.toggleView(e)}>Line</Button>
                <Button name='progress' onClick={e => this.toggleView(e)}>Progress</Button>
                {display}
            </>
        );
    }
}

export default StudentProfile