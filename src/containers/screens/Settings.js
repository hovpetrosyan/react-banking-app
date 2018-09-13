import React, { Component } from "react";
import PropTypes from "prop-types";
import Exchange from "../../components/Exchange";
import { requestHandler } from "../../utils/fetchUtils";
import { STATUS_OK } from "../../constants/ResponseStatuses";

class Settings extends Component {
  render() {
    return <React.Fragment>This is my settings</React.Fragment>;
  }
}

export default Settings;
