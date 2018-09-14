import React, { Component } from "react";
import PropTypes from "prop-types";

class LoginForm extends Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
    actionUrl: PropTypes.string,
    editMode: PropTypes.bool
  };

  state = { userName: "", lastName: "", profession: "", password: "" };

  userNameInputChangedHandler = e => {
    e.preventDefault();
    const firstName = e.target.value;
    this.setState({ firstName });
  };

  passwordInputChangedHandler = e => {
    e.preventDefault();
    const password = e.target.value;
    this.setState({ password });
  };

  render() {
    const { userName, password } = this.state;
    const { editMode } = this.props;
    return editMode ? (
      <React.Fragment>
        <form onSubmit={this.loginButtonClickedHandler}>
          <span>FirstName:</span>
          <input
            className="form-control"
            name="userName"
            type="text"
            onChange={this.userNameInputChangedHandler}
            value={userName}
            placeholder="userName"
          />
          <span>Password</span>
          <input
            className="form-control"
            name="password"
            type="password"
            onChange={this.passwordInputChangedHandler}
            value={password}
            placeholder="Password"
          />
        </form>
      </React.Fragment>
    ) : null;
  }
}

export default LoginForm;
