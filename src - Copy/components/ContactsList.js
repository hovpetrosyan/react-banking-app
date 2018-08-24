import React, { Component } from "react";
export default class ContactsList extends Component {
  render() {
    return (
      <div className="contactsList">
        <ul>
          {this.props.contacts.map((contact, index) => {
            return (
              <li
                className={
                  contact._id == this.props.selected ? "selectedContact" : ""
                }
                key={index}
                onClick={() => {
                  this.props.handleContactSelect(contact._id);
                }}
              >
                {contact.username}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
