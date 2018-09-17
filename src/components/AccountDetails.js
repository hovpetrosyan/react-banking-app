import React, { Component } from "react";
import PropTypes from "prop-types";

class AccountDetails extends Component {
  static propTypes = {
    customer: PropTypes.object
  };

  render() {
    const { customer } = this.props;
    return customer ? (
      <React.Fragment>
        <div className="bank-ID">Bank ID: {customer._id}</div>
        <div className="bank-profile">
          <h2>Account Info</h2>
          <div>Customer: {customer.username}</div>
          <div>Email: {customer.email}</div>
          <div>Balance: {`${customer.balance} $`}</div>
        </div>
      </React.Fragment>
    ) : null;
  }
}

export default AccountDetails;
