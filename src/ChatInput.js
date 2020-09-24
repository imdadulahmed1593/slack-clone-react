import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatInput.css";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
function ChatInput({ channelName, channelId }) {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("message sent");
    console.log(channelId);
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
    setInput("");
  };
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={`message #${channelName}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
// message: input,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//         user: user.displayName,
//         userImage: user.photoURL,
