import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

class TransferInfo extends Component {
  static propTypes = {
    transfer: PropTypes.object
  };

  render() {
    const { transfer } = this.props;
    return transfer ? (
      <React.Fragment>
        <div>
          <div>
            Dear customer transfer completed successfully
            <img src="/success.png" heigth="35px" width="35px" alt="success" />
            <p>Here are details:</p>
          </div>
          <div>
            <p>Receiver: {transfer.to} </p>
            <p>Amount: {transfer.amount} $ </p>
            <p>Date: {moment(transfer.date).format("LLL")}</p>
          </div>
        </div>
      </React.Fragment>
    ) : null;
  }
}

export default TransferInfo;
