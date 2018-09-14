import React, { Component } from "react";
import SettingsForm from "../forms/SettingsForm";
import SettingsInfo from "../../components/SettingsInfo";

class Settings extends Component {
  state = {
    editMode: false,
    buttonText: "Edit Your Profile"
  };

  changeSettings = () => {
    const { editMode } = this.state;
    this.setState({
      editMode: !editMode,
      buttonText: editMode ? "Edit Your Profile" : "Save changes"
    });
  };

  render() {
    const { editMode, buttonText } = this.state;
    return (
      <React.Fragment>
        <h2>This is my settings</h2>
        <SettingsInfo editMode={editMode} />
        <SettingsForm editMode={editMode} />
        <button onClick={this.changeSettings}> {buttonText} </button>
      </React.Fragment>
    );
  }
}

export default Settings;
