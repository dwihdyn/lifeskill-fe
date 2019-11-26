import React from "react";
import { Button } from "reactstrap";

import SignupForm from "../Containers/SignupForm";
import LoginForm from "../Containers/LoginForm";

class LoginSignupPage extends React.Component {
  state = {
    isLogin: false
  };
  toggleLogin = () => {
    const { isLogin } = this.state;
    this.setState({ isLogin: !isLogin });
  };
  render() {
    return (
      <>
        {this.state.isLogin ? (
          <>
            <h1>Sign Up Page</h1>
            <SignupForm signUpUser={this.props.signUpUser}></SignupForm>
            <Button color="primary" onClick={this.toggleLogin}>
              Log in
            </Button>
          </>
        ) : (
          <>
            <h1>Log In Page</h1>
            <LoginForm></LoginForm>
            <Button color="primary" onClick={this.toggleLogin}>
              Sign up
            </Button>
          </>
        )}
      </>
    );
  }
}

export default LoginSignupPage;
