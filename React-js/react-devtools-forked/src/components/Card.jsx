import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
       <Avatar image={props.image}/>
      </div>

      <div className="bottom">
        <Details email={props.email} 
        phone ={props.phone} />

      </div>
    </div>
  );
}

export default Card;
