import React, { Component } from "react";
import PropTypes from "prop-types";

export default class extends Component {
  static propTypes = {
    messages: PropTypes.array,
    contact: PropTypes.string,
    handleMessageSending: PropTypes.func
  };

  state = { value: "" };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="messages">
        <div className="message-box">
          {this.props.messages.map(msg => {
            return (
              <div
                key={msg._id}
                className={
                  msg.from === this.props.contact ? "msgToMe" : "msgByMe"
                }
              >
                {msg.payload}
              </div>
            );
          })}
        </div>

        <div>
          <input value={value} onChange={this.handleChange} />
          <button
            onClick={() => {
              this.props.handleMessageSending(this.props.contact, value);
              this.setState({
                value: ""
              });
            }}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}
