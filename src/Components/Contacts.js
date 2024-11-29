import React from "react";

import { Component } from "react";
import ContactDetails from "./ContactDetails";
class Contacts extends Component {
  constructor(props) {
    super(props);

  }

  render() {
 
    return (
      <div className="userCard">
        <h1>ContactInfo</h1>
        <ContactDetails/>
      </div>
    );
  }
  componentDidMount() {

  }
}

export default Contacts;
