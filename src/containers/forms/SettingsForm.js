import React, { Component } from "react";
import PropTypes from "prop-types";

class LoginForm extends Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
    actionUrl: PropTypes.string,
    editMode: PropTypes.bool,
    passwordHandler: PropTypes.func,
    retypePasswordHandler: PropTypes.func,
    password: PropTypes.string,
    retypePassword: PropTypes.string
  };

  render() {
    const {
      editMode,
      passwordHandler,
      retypePasswordHandler,
      password,
      retypePassword
    } = this.props;

    return editMode ? (
      <React.Fragment>
        <form onSubmit={this.loginButtonClickedHandler}>
          <span>Password</span>
          <input
            className="form-control"
            name="password"
            type="password"
            onChange={passwordHandler}
            value={password}
            placeholder="Password"
          />
          <span>Retype New Password</span>
          <input
            className="form-control"
            name="RetypePassword"
            type="password"
            onChange={retypePasswordHandler}
            value={retypePassword}
            placeholder="Retype New Password"
          />
        </form>
      </React.Fragment>
    ) : null;
  }
}

export default LoginForm;
