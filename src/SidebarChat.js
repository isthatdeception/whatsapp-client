import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";

// style
import "./SidebarChat.css";
import db from "./firebase";

function SidebarChat(id, name, addNewChat) {
  // for numereous random users
  // avatar
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for the chat room");

    if (roomName) {
      // do something with database
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>Last message..</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>add new chat</h2>
    </div>
  );
}

export default SidebarChat;
