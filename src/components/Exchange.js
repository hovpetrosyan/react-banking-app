import React, { Component } from "react";
import PropTypes from "prop-types";
import { getExchangeRate } from "../proxy/bank.proxy";
import { requestHandler } from "../utils/fetchUtils";
import { STATUS_OK } from "../constants/ResponseStatuses";
import qs from "query-string";

class Exchange extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  state = {
    rate: null,
    currencies: ["Euro", "Dollar"],
    amount: null,
    exchanged: null
  };

  componentDidMount() {
    const { amount } = qs.parse(this.props.history.location.search);
    const { currencies } = this.state;
    const getRate = getExchangeRate();
    const handleOk = ({ rate }) => {
      if (currencies[0] === "Dollar")
        this.setState({ rate, exchanged: amount * rate });
      else this.setState({ rate, exchanged: amount / rate });
    };

    requestHandler(getRate, {
      [STATUS_OK]: handleOk
    });
  }

  handleCurrencySelect = () => {
    const [first, second] = this.state.currencies;
    this.setState(
      {
        currencies: [second, first]
      },
      () => {
        this.exchangeRate(this.state.amount);
      }
    );
  };

  exchangeRate = val => {
    let { amount } = this.state;
    this.props.history.push(`?amount=${amount}`);
  };

  inputHandler = e => {
    this.setState({ amount: e.target.value });
  };

  render() {
    const { currencies, exchanged } = this.state;
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="Type amount of money"
          onChange={this.inputHandler}
        />
        <select value={currencies[0]} onChange={this.handleCurrencySelect}>
          <option value="Euro">Euro</option>
          <option value="Dollar">Dollar</option>
        </select>
        convert to
        <select value={currencies[1]} onChange={this.handleCurrencySelect}>
          <option value="Euro">Euro</option>
          <option value="Dollar">Dollar</option>
        </select>
        <div className="exchange-result">
          {exchanged ? exchanged + currencies[1] : null}
        </div>
        <button onClick={this.exchangeRate}> Exchange Rate </button>
      </React.Fragment>
    );
  }
}

export default Exchange;
