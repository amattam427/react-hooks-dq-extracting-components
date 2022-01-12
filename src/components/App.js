import React from "react";
import { messages, contacts } from "../data";
import ContactList from './ContactList';
import MessagesList from './MessagesList'

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <ContactList contacts={contacts}/>
      <MessagesList messages={messages}/>
    </div>
  );
}

export default App;
