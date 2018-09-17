import React, { Component } from "react";
import Exchange from "../../components/Exchange";
import PropTypes from "prop-types";

class Home extends Component {
  static propTypes = {
    history: PropTypes.object
  };
  render() {
    return (
      <React.Fragment>
        Exchange <Exchange history={this.props.history} />
      </React.Fragment>
    );
  }
}

export default Home;
