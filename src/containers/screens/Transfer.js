import React, { Component } from "react";
import PropTypes from "prop-types";

import TransferInfo from "../../components/TransferInfo";
import TransferIncomplete from "../../components/TransferIncomplete";
import { newTransfer } from "../../proxy/transfers.proxy";
import { requestHandler } from "../../utils/fetchUtils";
import { STATUS_OK } from "../../constants/ResponseStatuses";

class Transfer extends Component {
  state = {
    to: "",
    amount: "",
    invalidAmount: ""
  };
  handleInputChange = (inputType, val) => {
    if (inputType === "to") {
      this.setState({
        to: val
      });
    }
    if (inputType === "amount") {
      this.setState({
        amount: val
      });
    }
  };
  handleTransfer = () => {
    let { to, amount } = this.state;
    if (!isNaN(amount) && to) {
      const transfer = newTransfer(to, amount);
      const handleOk = ({ transfer, msg, receiverID }) => {
        this.setState({ transfer, msg, receiverID, invalidAmount: "" });
      };

      requestHandler(transfer, {
        [STATUS_OK]: handleOk
      });
      this.setState({
        to: "",
        amount: ""
      });
    } else {
      this.setState({
        invalidAmount: "Required number in amount field"
      });
    }
  };
  render() {
    const { to, amount, transfer, msg, receiverID, invalidAmount } = this.state;
    return (
      <React.Fragment>
        To:<input
          type="text"
          placeholder="Type Bank ID"
          value={to}
          onChange={e => this.handleInputChange("to", e.target.value)}
        />
        Amount:<input
          type="text"
          value={amount}
          placeholder="Type amount of money"
          onChange={e => this.handleInputChange("amount", e.target.value)}
        />
        <button onClick={this.handleTransfer}>Transfer</button>
        <div className="invalidAmount">{invalidAmount}</div>
        <TransferInfo transfer={transfer} />
        <TransferIncomplete msg={msg} receiverID={receiverID} />
      </React.Fragment>
    );
  }
}

export default Transfer;
