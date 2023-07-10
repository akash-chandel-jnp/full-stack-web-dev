import React from "react";
import Card  from "./Card";
import contacts from "../contacts";

function App() {
  return (<div>
    <h1 className="heading">My Contacts</h1>
    <Card name = {contacts[0].name} phone ={contacts[0].phone}  imageURL={contacts[0].imgURL} email={contacts[0].email}/>


    <Card name = {contacts[1].name} phone ={contacts[1].phone}  imageURL={contacts[1].imgURL} email={contacts[1].email}/>
      </div>
      );
  }

export default App;
