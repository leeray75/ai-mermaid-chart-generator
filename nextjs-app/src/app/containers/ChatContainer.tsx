"use client"; // Ensuring it's a client component

import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import ChatModule from "../components/ChatModule";
import CodeEditor from "../components/CodeEditor";
import styles from "./Containers.module.scss";
const ChatContainer = () => {
  return (
    <>
      <Provider store={store}>
        <section className={styles["chat-container"]}>
          <CodeEditor />
          <ChatModule />
        </section>
      </Provider>
    </>
  );
};

export default ChatContainer;
