import React, { Component } from "react";
import Exchange from "../../components/Exchange";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        Exchange <Exchange history={this.props.history} />
      </React.Fragment>
    );
  }
}

export default Home;
