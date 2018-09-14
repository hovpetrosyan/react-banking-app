import React, { Component } from "react";
import PropTypes from "prop-types";

class LoginForm extends Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
    actionUrl: PropTypes.string,
    editMode: PropTypes.bool
  };

  state = { firstName: "", lastName: "", profession: "", password: "" };

  firstNameInputChangedHandler = e => {
    e.preventDefault();
    const firstName = e.target.value;
    this.setState({ firstName });
  };

  secondNameInputChangedHandler = e => {
    e.preventDefault();
    const secondName = e.target.value;
    this.setState({ secondName });
  };

  professionInputChangedHandler = e => {
    e.preventDefault();
    const profession = e.target.value;
    this.setState({ profession });
  };

  passwordInputChangedHandler = e => {
    e.preventDefault();
    const password = e.target.value;
    this.setState({ password });
  };

  loginButtonClickedHandler = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { actionUrl } = this.props;
    this.props.handleLogin(actionUrl, username, password);
  };

  render() {
    const { firstName, lastName, profession, password } = this.state;
    const { editMode } = this.props;
    return editMode ? (
      <React.Fragment>
        <form onSubmit={this.loginButtonClickedHandler}>
          <span>FirstName:</span>
          <input
            className="form-control"
            name="firstName"
            type="text"
            onChange={this.firstNameInputChangedHandler}
            value={firstName}
            placeholder="FirstName"
          />
          <span>LastName</span>
          <input
            className="form-control"
            name="LastName"
            type="text"
            onChange={this.secondNameInputChangedHandler}
            value={lastName}
            placeholder="lastName"
          />
          <span>Profession</span>
          <input
            className="form-control"
            name="Profession"
            type="text"
            onChange={this.professionInputChangedHandler}
            value={profession}
            placeholder="Profession"
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
