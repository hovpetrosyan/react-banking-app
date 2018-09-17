import React, { Component } from "react";
import PropTypes from "prop-types";

import TransferInfo from "../../components/TransferInfo";
import TransferIncomplete from "../../components/TransferIncomplete";
import { newTransfer } from "../../proxy/transfers.proxy";
import { requestHandler } from "../../utils/fetchUtils";
import { STATUS_OK } from "../../constants/ResponseStatuses";
import qs from "query-string";
class Transfer extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  state = {
    to: "",
    amount: "",
    invalidAmount: "",
    msg: "",
    receiverID: null
  };

  componentDidMount() {
    const { to, amount } = qs.parse(this.props.history.location.search);
    if (to && amount) {
      this.handleTransferLogic(to, amount);
    }
  }

  handleInputChange = (inputType, val) => {
    this.setState({
      [inputType]: val
    });
  };

  handleTransfer = () => {
    let { to, amount } = this.state;
    this.props.history.push(`?to=${to}&&amount=${amount}`);
  };

  handleTransferLogic = (to, amount) => {
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
