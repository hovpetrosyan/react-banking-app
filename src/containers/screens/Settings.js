import React, { Component } from "react";
import SettingsForm from "../forms/SettingsForm";
import SettingsInfo from "../../components/SettingsInfo";
import { changePassword } from "../../proxy/users.proxy";
import { requestHandler } from "../../utils/fetchUtils";
import { STATUS_403, STATUS_OK } from "../../constants/ResponseStatuses";

class Settings extends Component {
  state = {
    editMode: false,
    buttonText: "Edit Your Profile",
    password: "",
    retypePassword: ""
  };

  passwordHandler = e => {
    e.preventDefault();
    const password = e.target.value;
    console.log(password);
    this.setState({ password });
  };

  retypePasswordHandler = e => {
    e.preventDefault();
    const retypePassword = e.target.value;
    this.setState({ retypePassword });
  };

  changeSettings = () => {
    const { editMode } = this.state;
    if (editMode) {
      const registerRequest = changePassword(this.state.password);

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

      const handleOk = user => {
        console.log(user);
      };

      requestHandler(registerRequest, {
        [STATUS_403]: handleForbidden,
        [STATUS_OK]: handleOk
      });
    }
    this.setState({
      editMode: !editMode,
      buttonText: editMode ? "Edit Your Profile" : "Save changes"
    });
  };

  render() {
    const { editMode, buttonText, password, retypePassword } = this.state;
    return (
      <React.Fragment>
        <h2>This is my settings</h2>
        <SettingsInfo editMode={editMode} />
        <SettingsForm
          editMode={editMode}
          passwordHandler={this.passwordHandler}
          retypePasswordHandler={this.retypePasswordHandler}
          password={password}
          retypePassword={retypePassword}
        />
        <button onClick={this.changeSettings}> {buttonText} </button>
      </React.Fragment>
    );
  }
}

export default Settings;
