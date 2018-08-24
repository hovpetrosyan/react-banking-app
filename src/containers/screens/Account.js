import React, { Component } from "react";
import PropTypes from "prop-types";
import AccountDetails from "../../components/AccountDetails";
import { getUserAccount } from "../../proxy/users.proxy";
import { requestHandler } from "../../utils/fetchUtils";
import { STATUS_OK } from "../../constants/ResponseStatuses";
import Filter from "../Filter";

class Products extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    history: PropTypes.object
  };
  state = {
    products: null,
    filter: this.props.history.location.search.substring(8),
    account: null
  };

  componentDidMount() {
    const getUser = getUserAccount();

    const handleOk = ({ customer }) => this.setState({ customer });

    requestHandler(getUser, {
      [STATUS_OK]: handleOk
    });
  }

  handleChange = e => {
    const filter = e;
    this.props.history.push(`/products/?filter=${filter}`);
    this.setState({ filter: this.props.history.location.search.substring(8) });
  };

  render() {
    const { user } = this.props;
    const { products, filter, customer } = this.state;
    return (
      <React.Fragment>
        <AccountDetails customer={customer} />
      </React.Fragment>
    );
  }
}

export default Products;
