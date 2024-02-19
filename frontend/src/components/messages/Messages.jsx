import React, { useEffect } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
const Messages = () => {
  const { messages, loading } = useGetMessages();
  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages.map((message, id) => (
        <Message key={message._id} message={message} />
      ))}
    </div>
  );
};

export default Messages;
