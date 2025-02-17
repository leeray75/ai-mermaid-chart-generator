'use client'; // Ensuring it's a client component

import React, { useState } from 'react';
import ChatModule from '../components/ChatModule';

const ChatContainer = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput) return;

    setMessages((prevMessages) => [...prevMessages, trimmedInput]);
    setInputValue('');
  };

  return (
    <ChatModule
      messages={messages}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onSendMessage={handleSendMessage}
    />
  );
};

export default ChatContainer;
