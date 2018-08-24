import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
let loginActionUrl = "https://locahost:4000/api/users/login";
class WelcomePage extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="jumbotron text-center">
        <h2>Welcome!</h2>
        <Link to={`/login?url=${loginActionUrl}`}>
          <button className="btn btn-success">Login</button>
        </Link>
        Or
        <Link to="/register?language=English">
          <button className="btn btn-success">Register</button>
        </Link>
      </div>
    );
  }
}

export default WelcomePage;
