import React from "react";

const User = ({ user }) => {
  return (
    <div >
      <div className="card text-dark bg-info mb-3" style={{maxWidth: "18rem" , margin: "0 auto"}}>
        <div className="card-header" style={{backgroundColor: "#163C59" , color: "white"}}> Username: {user.username}</div>
        <div className="card-body" style={{backgroundColor: "#3D92CE"}} >
          <h5 className="card-title">{user.name}</h5>
          <p style={{fontSize: "80%"}}>{user.phone}</p>
          <hr/>
          <a href={user.website} className="card-text" style={{marginRight: 70, color: "white"}}>
              Visit website
          </a>
          <a href={`mailto: ${user.email}`} className="card-text" style={{color: "white"}}>
              Send Mail
          </a>
        </div>
      </div>
    </div>
  );
};

export default User;
