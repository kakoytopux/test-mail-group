import React from "react";
import Header from "./Header";
import Input from "./Input";
import Message from "./Message";

export default function Chat({item}) {
  return (
    <div className="chat-container">
      <Header title={item ? item.title : ''} />
      <section className="chat">
        <Message item={item} />
        <Input />
      </section>
    </div>
  );
}