import React, { Component } from "react";
import { getExchangeRate } from "../proxy/bank.proxy";
import { requestHandler } from "../utils/fetchUtils";
import { STATUS_OK } from "../constants/ResponseStatuses";
class Exchange extends Component {
  state = {
    rate: null,
    currencies: ["Euro", "Dollar"],
    amount: null,
    exchanged: null
  };
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
    this.setState({ amount: val }, () => {
      const { currencies, amount } = this.state;
      const getRate = getExchangeRate();
      const handleOk = ({ rate }) => {
        if (currencies[0] === "Dollar")
          this.setState({ rate, exchanged: amount * rate });
        else this.setState({ rate, exchanged: amount / rate });
      };

      requestHandler(getRate, {
        [STATUS_OK]: handleOk
      });
    });
  };
  render() {
    const { currencies, amount, exchanged } = this.state;
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="Type amount of money"
          onChange={e => this.exchangeRate(e.target.value)}
        />
        <select value={currencies[0]} onBlur={this.handleCurrencySelect}>
          <option value="Euro">Euro</option>
          <option value="Dollar">Dollar</option>
        </select>
        convert to
        <select value={currencies[1]} onBlur={this.handleCurrencySelect}>
          <option value="Euro">Euro</option>
          <option value="Dollar">Dollar</option>
        </select>
        <div className="exchangeResult">
          {amount} {amount ? currencies[0] : null}
          {exchanged ? exchanged + currencies[1] : null}
        </div>
      </React.Fragment>
    );
  }
}

export default Exchange;
