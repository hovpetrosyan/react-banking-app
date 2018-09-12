import React, { Component } from "react";
import PropTypes from "prop-types";

class Filter extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    filter: PropTypes.string
  };

  state = { input: decodeURIComponent(this.props.filter) };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input } = this.state.input;
    return (
      <div>
        <input type="text" value={input} onChange={this.handleChange} />
        <button onClick={() => this.props.handleChange(input)}>Filter</button>
        <div>input</div>
      </div>
    );
  }
}

export default Filter;
