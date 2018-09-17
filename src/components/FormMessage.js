import React, { Component } from "react";
import PropTypes from "prop-types";

const errorClassName = "formMessageError";
const successClassName = "formMessageSuccess";

class FormMessage extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    isError: PropTypes.bool
  };

  render() {
    const { message, isError } = this.props;
    return message.length ? (
      <p className={isError ? errorClassName : successClassName}>{message}</p>
    ) : null;
  }
}

export default FormMessage;
