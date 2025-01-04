import React from "react";
import UserInfoFunction from "./UserInfoFunction";
import UserInfoClass from "../Components/UserInfoClass";
import PdfPreview from "./PdfPreview";
import UserList from "./UserList";

function About() {
  return (
    <div>
      Hello I am About page
      <UserInfoFunction name={"Hrishikesh for Functional Component"} />
      <UserInfoClass
        name={"Hrishikesh for Class Component"}
        location={"pune"}
      />
      <UserList />
    </div>
  );
}

export default About;
