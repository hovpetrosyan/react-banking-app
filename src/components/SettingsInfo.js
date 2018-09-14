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
        <div>
          <div>
            FirstName: <span>YOUR NAME</span>
          </div>
          <div>
            SecondName: <span>SECOND NAME</span>
          </div>
          <div>
            PROFESSION: <span>YOUR PROFESSION</span>
          </div>
        </div>
      </React.Fragment>
    ) : null;
  }
}

export default SettingsInfo;
