import React, { Component } from "react";
import AccountDetails from "../../components/AccountDetails";
import { getUserAccount } from "../../proxy/users.proxy";
import { requestHandler } from "../../utils/fetchUtils";
import { STATUS_OK } from "../../constants/ResponseStatuses";

class Account extends Component {
  state = {
    customer: null
  };

  componentDidMount() {
    const getUser = getUserAccount();

    const handleOk = ({ customer }) => this.setState({ customer });

    requestHandler(getUser, {
      [STATUS_OK]: handleOk
    });
  }

  render() {
    const { customer } = this.state;
    return (
      <React.Fragment>
        <AccountDetails customer={customer} />
      </React.Fragment>
    );
  }
}

export default Account;
