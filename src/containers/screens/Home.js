import React, { Component } from "react";
import Exchange from "../../components/Exchange";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        Exchange <Exchange />
      </React.Fragment>
    );
  }
}

export default Home;
