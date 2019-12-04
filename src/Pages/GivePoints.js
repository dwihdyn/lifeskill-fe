import React from "react";
import axios from "axios";
import "../styles/GivePoints.css";

import { Container, Col, Form, FormGroup, Label, Input, Row } from "reactstrap";


class GivePoints extends React.Component {
    state = {
        students: {},
        creativity: ``,
        leadership: ``,
        respect: ``
    };

    componentDidMount() {
        let students = []
        axios
            .get("http://localhost:5000/api/v1/students/give")
            .then(response => {
                console.log(response)
                this.setState({
                    students: response.data.pupils
                });

                console.log(this.state.students);
            });
    }


    render() {

        let { students } = this.state

        return (
            <Container className="Givepoints">
                <Row className="Header-wrapper">
                    <Row>

                    </Row>
                </Row>
            </Container>
        )
    }
}

export default GivePoints;