import React, { Component } from "react";
import TransfersList from "../../components/TransfersList";
import { getAllTransfers } from "../../proxy/transfers.proxy";
import { requestHandler } from "../../utils/fetchUtils";
import { STATUS_OK } from "../../constants/ResponseStatuses";

class Transactions extends Component {
  state = {
    select: 1,
    transfers: []
  };

  controlDataAndState = id => {
    const transfersBySelectedType = getAllTransfers(id);
    const handleOk = ({ transfers }) => {
      this.setState({ transfers, select: id });
    };

    requestHandler(transfersBySelectedType, {
      [STATUS_OK]: handleOk
    });
  };
  componentDidMount() {
    this.controlDataAndState(1);
  }
  render() {
    const { transfers, select } = this.state;
    return (
      <React.Fragment>
        <ul className="miniNavBar">
          <TransfersList
            label="my transfers"
            id="1"
            control={() => this.controlDataAndState(1)}
            transfers={select === 1 ? transfers : []}
            selectClass={select === 1 ? "selected" : ""}
          />
          <TransfersList
            label="transfers to me"
            id="2"
            control={() => this.controlDataAndState(2)}
            transfers={select === 2 ? transfers : []}
            selectClass={select === 2 ? "selected" : ""}
          />
        </ul>
      </React.Fragment>
    );
  }
}

export default Transactions;
