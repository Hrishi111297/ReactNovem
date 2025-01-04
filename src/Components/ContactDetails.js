import React from "react";

import { Component } from "react";
class ContactDetails extends Component {
  constructor(props) {
    super(props);
    console.log("child Constructor");
    this.state = {
      userinfo: {
        name: "Hrishikesh",
        department: "mechanical",
        phone: 9970561589,
      },
    };
    console.log("component constructor");
  }

  render() {
    console.log("component render");
    const { name, department, phone, picture } = this.state.userinfo;

    return (
      <div className="userCard">
        <img src={picture} />
        <h2>{name}</h2>
        <h2>{department} </h2>
        <h2>{phone}</h2>
      </div>
    );
  }
  componentDidUpdate() {
    console.log("Component did update");
  }
  componentWillUnmount() {
    console.log("Component componentWillUnmount");
  }
  async componentDidMount() {
    const data = await fetch("https://randomuser.me/api/");
    const json = await data.json();
    let { name, gender, phone, picture } = json.results[0];
    console.log(json.results[0]);
    this.setState({
      userinfo: {
        name: name["first"],
        department: gender,
        phone: phone,
        picture: picture["medium"],
      },
    });
    console.log("component Did mount");
  }
}

export default ContactDetails;
