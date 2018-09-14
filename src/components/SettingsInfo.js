import React, { Component } from "react";
import PropTypes from "prop-types";

class SettingsInfo extends Component {
  static propTypes = {
    editMode: PropTypes.bool
  };

  render() {
    const editMode = this.props.editMode;
    return !editMode ? (
      <React.Fragment>
        <div>username: USERNAME</div>
      </React.Fragment>
    ) : null;
  }
}

export default SettingsInfo;
