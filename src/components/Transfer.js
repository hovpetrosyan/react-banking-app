import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

class TransfersList extends Component {
  static propTypes = {
    transfer: PropTypes.object,
    id: PropTypes.number
  };

  render() {
    const { transfer: { to, from, amount, date }, id } = this.props;
    return (
      <div>
        {id === 2 ? `Sender: ${from}` : `Receiver: ${to}`}
        <p>Amount: {amount} $ </p>
        <p>Date: {moment(date).format("LLL")}</p>
      </div>
    );
  }
}

export default TransfersList;
