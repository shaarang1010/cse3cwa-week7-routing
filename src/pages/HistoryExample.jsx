import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const onCheckUsernameHandler = (username) => {
  if (username === "Joe") {
    return true;
  } else {
    return false;
  }
};

const HistoryExample = () => {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  return (
    <>
      <input
        type="email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <button
        onClick={() => {
          if (onCheckUsernameHandler(username)) {
            history("/third");
          }
        }}
      >
        Click me to go to third page
      </button>
    </>
  );
};

export default HistoryExample;
