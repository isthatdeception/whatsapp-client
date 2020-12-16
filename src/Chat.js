import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";

// icons
import {
  AttachFile,
  InsertEmoticon as InsertEmoticonIcon,
  Mic as MicIcon,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";

// style
import "./Chat.css";


// chat function
function Chat() {
  // chat state change
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        {/**chatheader username */}
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">Pallavi Rajoria</span>
          Hey Guys..
          <span className="chat__timestamp">11:42 AM</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input type="text" />
          <button>Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
