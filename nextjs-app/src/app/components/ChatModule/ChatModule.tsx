"use client";
// src/app/components/ChatModule.tsx
import React from "react";
import dynamic from "next/dynamic";
import styles from "./ChatModule.module.scss";
import InputArea from "./InputArea";
import MessagesArea from "./MessagesArea";

// Dynamically import Material-UI components
const Card = dynamic(() => import("@mui/material/Card"));




const ChatModule = () => {
  return (
    <Card className={styles.chatContainer}>
      <MessagesArea />
      <InputArea />
    </Card>
  );
};

export default ChatModule;