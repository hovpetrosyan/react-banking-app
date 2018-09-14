import React, { Component } from "react";
import PropTypes from "prop-types";

class ForgotPasswordForm extends Component {
  static propTypes = {
    handleRegister: PropTypes.func.isRequired,
    history: PropTypes.object
  };

  state = {
    username: "",
    email: ""
  };

  usernameInputChangedHandler = e => {
    e.preventDefault();
    const username = e.target.value;
    if (!this.state.email) {
      this.setState({ username });
    }
  };

  emailInputChangedHandler = e => {
    e.preventDefault();
    const email = e.target.value;
    if (!this.state.username) {
      this.setState({ email });
    }
  };

  render() {
    const { username, email } = this.state;
    return (
      <React.Fragment>
        <h2>Write your username or email</h2>
        <form>
          <input
            className="form-control"
            name="username"
            type="text"
            onChange={this.usernameInputChangedHandler}
            value={username}
            placeholder="Name"
          />
          <input
            className="form-control"
            name="email"
            type="email"
            onChange={this.emailInputChangedHandler}
            value={email}
            placeholder="Email"
          />
          <button
            className="btn btn-primary"
            onClick={() => this.props.handleForgotPassword(username, email)}
          >
            Get Password
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default ForgotPasswordForm;
