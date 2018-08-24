import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

class TransferIncomplete extends Component {
  render() {
    const { msg, receiverID } = this.props;

    return msg ? (
      <React.Fragment>
        <div>
          Dear customer transfer failed
          <img src="/attention.png" heigth="35px" width="35px" />
          <br />
          Here are details:
          <div>
            {msg} : {receiverID}
          </div>
        </div>
      </React.Fragment>
    ) : (
      ""
    );
  }
}

export default TransferIncomplete;
