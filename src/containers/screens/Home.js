import React, { Component } from "react";
import PropTypes from "prop-types";
import Exchange from "../../components/Exchange";
import { requestHandler } from "../../utils/fetchUtils";
import { STATUS_OK } from "../../constants/ResponseStatuses";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        Exchange <Exchange />
      </React.Fragment>
    );
  }
}

export default Home;
