import React, { Component } from "react";
import PropTypes from "prop-types";

class RegisterForm extends Component {
  static propTypes = {
    handleRegister: PropTypes.func.isRequired,
    history: PropTypes.object
  };
  languages = [
    {
      option: "English",
      words: {
        register: "Register",
        username: "Username",
        password: "Password",
        email: "Email"
      }
    },
    {
      option: "French",
      words: {
        register: "Registre",
        username: "Nom d'utilisateur",
        password: "Mot de passe",
        email: "Email"
      }
    }
  ];

  state = {
    username: "",
    password: "",
    email: "",
    currentLanguage: decodeURIComponent(
      this.props.history.location.search.slice(
        this.props.history.location.search.indexOf("language=") + 9
      )
    )
  };
  languageChooser = (current, languages) => {
    let selected;
    languages.map((item, index) => {
      if (item.option === current) {
        selected = item;
      }
      if (index === languages.length - 1 && !selected) {
        selected = item;
      }
    });
    return selected;
  };
  handleSelect = target => {
    this.props.history.push("register?language=" + target.value);
  };
  usernameInputChangedHandler = e => {
    e.preventDefault();
    const username = e.target.value;
    this.setState({ username });
  };

  passwordInputChangedHandler = e => {
    e.preventDefault();
    const password = e.target.value;
    this.setState({ password });
  };

  emailInputChangedHandler = e => {
    e.preventDefault();
    const email = e.target.value;
    this.setState({ email });
  };

  registerButtonClickedHandler = e => {
    e.preventDefault();
    const { username, password, email } = this.state;
    this.props.handleRegister(username, password, email);
  };
  componentDidUpdate() {
    this.language.textContent =
      " You have selected " + this.state.currentLanguage;
  }
  componentDidMount() {
    this.language.textContent =
      " You have selected " + this.state.currentLanguage;
  }

  render() {
    const { username, password, email } = this.state;
    return (
      <React.Fragment>
        <select
          name="language"
          onBlur={e => {
            this.handleSelect(e.target);
          }}
        >
          <option>{this.state.currentLanguage}</option>
          {this.languages.map((el, index) => {
            if (el.option !== this.state.currentLanguage) {
              return <option key={index}> {el.option} </option>;
            }
          })}
        </select>
        <span ref={language => (this.language = language)} />
        <h2>
          {
            this.languageChooser(this.state.currentLanguage, this.languages)
              .words.register
          }
        </h2>
        <form>
          <input
            className="form-control"
            name="username"
            type="text"
            onChange={this.usernameInputChangedHandler}
            value={username}
            placeholder={
              this.languageChooser(this.state.currentLanguage, this.languages)
                .words.username
            }
          />
          <input
            className="form-control"
            name="email"
            type="email"
            onChange={this.emailInputChangedHandler}
            value={email}
            placeholder={
              this.languageChooser(this.state.currentLanguage, this.languages)
                .words.email
            }
          />
          <input
            className="form-control"
            name="password"
            type="password"
            onChange={this.passwordInputChangedHandler}
            value={password}
            placeholder={
              this.languageChooser(this.state.currentLanguage, this.languages)
                .words.password
            }
          />
          <button
            className="btn btn-primary"
            onClick={this.registerButtonClickedHandler}
          >
            {
              this.languageChooser(this.state.currentLanguage, this.languages)
                .words.register
            }
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
