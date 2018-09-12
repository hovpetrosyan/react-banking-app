import React, { Component } from "react";
import PropTypes from "prop-types";

class TransferIncomplete extends Component {
  static propTypes = {
    msg: PropTypes.string,
    receiverID: PropTypes.number
  };

  render() {
    const { msg, receiverID } = this.props;

    return msg ? (
      <React.Fragment>
        <div>
          Dear customer transfer failed
          <img
            src="/attention.png"
            heigth="35px"
            width="35px"
            alt="attention"
          />
          <br />
          Here are details:
          <div>
            {msg} : {receiverID}
          </div>
        </div>
      </React.Fragment>
    ) : null;
  }
}

export default TransferIncomplete;
