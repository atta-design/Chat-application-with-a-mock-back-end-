import React, { useState } from "react";
import MessageForm from "../components/MessageForm/MessageForm";
import MessageList from "../components/MessageList/MessageList";
import "./App.css";

function App() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  function handleFormSubmit(event) {
    event.preventDefault();
if(text.trim().length!==0){
  
  setMessages([...messages, { body: text, me: true }]);
    fetch(`http://localhost:3001/message/${text}`)
      .then((res) => res.json())
      .then((data) =>
        setMessages([
          ...messages,
          { body: text, me: true },
          { body: data.message, me: false },
        ])
      );
}
      setText('')
  }


  return (
    <div className="App">
      <MessageList messages={messages} />
      <MessageForm text={text} setText={setText} handleFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
