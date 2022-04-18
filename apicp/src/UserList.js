import React from "react";
import User from "./User";

const UserList = ({ listOfUsers }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" , gridGap : 30}}>
      {listOfUsers.map((user, key) => (
        <User user={user} key={key} />
      ))}
    </div>
  );
};

export default UserList;
