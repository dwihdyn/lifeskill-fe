import React from "react";
import { Container, Col, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import "../App.css";

class SignupForm extends React.Component {
  state = {
    user_group: ``
  };

  handleSubmitButton = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/students/signup", {
        id_number: this.state.id_number,
        full_name: this.state.full_name,
        password: this.state.password,
        user_group: this.state.user_group
      })
      .then(res => {
        console.log(res);
        if (res.data.success) {
          // create token for persistent login
          localStorage.setItem("authToken", res.data.auth_token);
          if (this.state.user_group == "Student") {
            alert("Student successfuly enrolled!");
          } else {
            alert("Teacher successfully enrolled!");
          }
          return (window.location = "/homepage");
        } else {
          alert("Given student_id already exist! please change the student_id");
          this.setState({
            id_number: ``,
            full_name: ``,
            password: ``,
            confirm_password: ``,
            user_group: ``
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let { user_group } = this.state;

    return (
      <Container className="Signup">
        <Col lg={6} className="Signup-header">
          <h1 style={{ paddingTop: 100, paddingBottom: 30 }}>Give Points</h1>
          <h3>Who would you to give points to ?</h3>
          <Form className="form">
            <FormGroup>
              <Label for="user_group">Select a user</Label>
              <Input
                onChange={this.handleUserGroup}
                type="select"
                value={user_group}
                name="user_group"
                id="user_group"
                placeholder="Role"
              >
                <option selected>Select one</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
              </Input>
            </FormGroup>

            <br />
            <input
              type="submit"
              placeholder="Submit"
              onClick={this.handleSubmitButton}
            />
          </Form>
        </Col>
      </Container>
    );
  }
}

export default SignupForm;
