import React from 'react';
import './MessageForm.css';
function MessageForm({handleFormSubmit,setText,text }) {



  return (
    <form
      className="MessageForm"
      onSubmit={handleFormSubmit}
      data-testid="submit-message"
    >
      <div className="input-container">
        <input
        value={text}
          data-testid="input-message"
          type="text"
          placeholder="پیام خود را اینجا بنویسید..."
          onChange={(e)=>setText(e.target.value)}
          autoFocus
        />
      </div>
      <div className="button-container">
        <button type="submit">ارسال</button>
      </div>
    </form>
  );
}

export default MessageForm;
