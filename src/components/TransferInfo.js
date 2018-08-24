import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
class TransferInfo extends Component {
  render() {
    const { transfer } = this.props;
    return transfer ? (
      <React.Fragment>
        <div>
          <div>
            Dear customer transfer completed successfully
            <img src="/success.png" heigth="35px" width="35px" />
            <br />
            Here are details:
          </div>
          <div>
            Receiver: {transfer.to} <br />
            Amount: {transfer.amount} $ <br />
            Date: {moment(transfer.date).format("LLL")}
          </div>
          <div />
        </div>
      </React.Fragment>
    ) : (
      ""
    );
  }
}

export default TransferInfo;
