"use client"; // Ensuring it's a client component

import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import ChatModule from "../components/ChatModule";

const ChatContainer = () => {


  return (
    <Provider store={store}>
      <ChatModule />
    </Provider>
  );
};

export default ChatContainer;
