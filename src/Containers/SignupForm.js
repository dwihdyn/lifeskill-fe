import React from "react";
import { Container, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "../App.css";

class SignupForm extends React.Component {
  state = {
    id_number: ``,
    full_name: ``,
    password: ``,
    confirm_password: ``,
    Tors: ``,
    redirect: false
  };

  handleId = e => {
    this.setState({
      id_number: e.target.value
    });
  };

  handleFullname = e => {
    this.setState({
      full_name: e.target.value
    });
  };

  handlePass = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleConfPass = e => {
    this.setState({
      confirm_password: e.target.value
    });
  };

  handleTeacherOrStudent = e => {
    this.setState({
      TorS: e.target.value
    });
  };

  handleSubmitButton = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/students/signup", {
        id_number: this.state.id_number,
        full_name: this.state.full_name,
        password: this.state.password,
        confirm_password: this.state.confirm_password
      })
      .then(res => {
        console.log(res);
        if (res.data.success) {
          // create token for persistent login
          localStorage.setItem("authToken", res.data.auth_token);

          this.setState(
            {
              redirect: true
            },
            // when state has been sent to backend & cleared, pop up success after 0.5 seconds
            () => {
              setTimeout(() => {
                alert(
                  "Student has been successfully enrolled!, redirect you to profile page"
                );
              }, 500);
            }
          );
        } else {
          alert("Given student_id already exist! please change the student_id");
          this.setState({
            id_number: ``,
            full_name: ``,
            password: ``,
            confirm_password: ``
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let {
      id_number,
      full_name,
      password,
      confirm_password,
      TorS,
      redirect
    } = this.state;

    if (redirect) {
      return <Redirect to="/profile" />;
    }

    return (
      <Container className="App">
        <Form className="form">
          <FormGroup>
            <Label for="id_number">ID Number</Label>
            <Input
              type="text"
              name="id_number"
              id="id_number"
              placeholder="Integer number only"
              value={id_number}
              onChange={this.handleId}
            />
          </FormGroup>
          <FormGroup>
            <Label for="full_name">Full Name</Label>
            <Input
              type="text"
              name="full_name"
              id="full_name"
              placeholder="John Lewis"
              value={full_name}
              onChange={this.handleFullname}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={this.handlePass}
            />
          </FormGroup>
          <FormGroup>
            <Label for="confirm_password">Confirm Password</Label>
            <Input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="********"
              value={confirm_password}
              onChange={this.handleConfPass}
            />
          </FormGroup>

          <FormGroup>
            <Label for="TorS">Teacher or Student ?</Label>
            <Input
              type="text"
              name="TorS"
              id="TorS"
              placeholder="type 'T' or 'S'"
              value={TorS}
              onChange={this.handleTeacherOrStudent}
            />
          </FormGroup>

          <input
            type="submit"
            placeholder="Submit"
            onClick={this.handleSubmitButton}
          />
        </Form>
      </Container>
    );
  }
}

export default SignupForm;
