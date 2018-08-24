import React, { Component } from "react";
import ContactsList from "../../components/ContactsList";
import MessageScreen from "../../components/MessageScreen";
import { getAllContacts } from "../../proxy/users.proxy";
import { requestHandler } from "../../utils/fetchUtils";
import { STATUS_OK } from "../../constants/ResponseStatuses";
import { sendMessage, getMessages } from "../../proxy/messages.proxy";
export default class Contacts extends Component {
  state = {
    contacts: [],
    activeContact: "",
    messages: []
  };
  componentDidMount() {
    const allContacts = getAllContacts();

    const handleOk = ({ contacts }) => this.setState({ contacts });

    requestHandler(allContacts, {
      [STATUS_OK]: handleOk
    });
  }
  handleContactSelect = contact => {
    const messages = getMessages(contact);

    const handleOk = data => {
      this.setState({ messages: data.messages, activeContact: contact });
    };
    requestHandler(messages, {
      [STATUS_OK]: handleOk
    });
  };
  handleMessageSending = (to, payload) => {
    const message = sendMessage(to, payload);
    let updateMessages = Object.assign([], this.state.messages);
    const handleOk = ({ message }) => {
      if (message) {
        updateMessages.unshift(message);
        this.setState({ message, messages: updateMessages });
      }
    };

    requestHandler(message, {
      [STATUS_OK]: handleOk
    });
  };

  render() {
    return (
      <div className="contactsScreen">
        <ContactsList
          contacts={this.state.contacts}
          selected={this.state.activeContact}
          handleContactSelect={this.handleContactSelect}
        />
        {this.state.activeContact ? (
          <MessageScreen
            messages={this.state.messages}
            contact={this.state.activeContact}
            handleMessageSending={this.handleMessageSending}
          />
        ) : null}
      </div>
    );
  }
}
