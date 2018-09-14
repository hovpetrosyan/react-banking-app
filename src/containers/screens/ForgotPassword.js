import React, { Component } from "react";
import PropTypes from "prop-types";
import ForgotPassworForm from "../forms/ForgotPasswordForm";
import FormMessage from "../../components/FormMessage";
import { userRegister } from "../../proxy/users.proxy";
import { requestHandler } from "../../utils/fetchUtils";
import { STATUS_403, STATUS_OK } from "../../constants/ResponseStatuses";

class ForgotPassword extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  state = { errorMessage: "" };

  handleRegister = (username, password, email) => {
    const registerRequest = userRegister(username, password, email);

    const handleForbidden = data => {
      if (data.msg) {
        this.setState({ errorMessage: data.msg });
      }
      if (data.errors) {
        const errorKeys = Object.keys(data.errors);
        const errorMessage = data.errors[errorKeys[0]].msg;
        this.setState({ errorMessage });
      }
    };

    const handleOk = () => {
      this.props.history.push("/home");
    };

    requestHandler(registerRequest, {
      [STATUS_403]: handleForbidden,
      [STATUS_OK]: handleOk
    });
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <div className="jumbotron">
        <ForgotPassworForm
          history={this.props.history}
          handleRegister={this.handleRegister}
        />
        <FormMessage message={errorMessage} isError />
      </div>
    );
  }
}

export default ForgotPassword;
