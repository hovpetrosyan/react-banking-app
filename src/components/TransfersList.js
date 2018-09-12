import React, { Component } from "react";
import Transfer from "./Transfer";
import PropTypes from "prop-types";
class TransfersList extends Component {
  static propTypes = {
    label: PropTypes.string,
    id: PropTypes.number,
    control: PropTypes.func,
    transfers: PropTypes.object,
    selectClass: PropTypes.string
  };
  render() {
    const { label, id, control, transfers, selectClass } = this.props;
    return (
      <React.Fragment>
        <li onClick={e => control(id)} className={selectClass}>
          {label}
        </li>
        <div className="transfersList">
          {transfers.map((transfer, index) => (
            <Transfer key={index} transfer={transfer} id={id} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default TransfersList;
