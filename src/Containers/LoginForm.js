import React from "react";
import { Container, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";

import axios from "axios";

class LoginForm extends React.Component {
  state = {
    id_number: ``,
    password: ``,
    redirect: false
  };

  handleIdNumber = e => {
    console.log(e.target.value);
    this.setState({
      id_number: e.target.value
    });
  };

  handlePassword = e => {
    console.log(e.target.value);
    this.setState({
      password: e.target.value
    });
  };

  handleLoginButton = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/students/login", {
        id_number: this.state.id_number,
        password: this.state.password
      })
      .then(res => {
        console.log(res);
        if (res.data) {
          this.setState({
            redirect: true
          });
        } else {
          alert("User does not exist, check the id or password");
          this.setState({
            id_number: ``,
            password: ``
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let { id_number, password, redirect } = this.state;

    // page redirect must be under render, since we are rendering to new page
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
              id="id_number"
              placeholder="Your ID Number"
              value={id_number}
              onChange={this.handleIdNumber}
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
              onChange={this.handlePassword}
            />
          </FormGroup>
          <input
            type="submit"
            placeholder="Submit"
            onClick={this.handleLoginButton}
          />
        </Form>
      </Container>
    );
  }
}

export default LoginForm;
