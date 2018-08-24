import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
class TransfersList extends Component {
  handleClick = id => {};
  render() {
    const { label, id, control, transfers, selectClass } = this.props;
    return (
      <React.Fragment>
        <li onClick={e => control(id)} className={selectClass}>
          {label}
        </li>
        <div className="transfersList">
          {transfers.map((transfer, index) => {
            return (
              <div key={index}>
                {id == 2
                  ? `Sender: ${transfer.from}`
                  : `Receiver: ${transfer.to}`}
                <br />
                Amount: {transfer.amount} $ <br />
                Date: {moment(transfer.date).format("LLL")}
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default TransfersList;
