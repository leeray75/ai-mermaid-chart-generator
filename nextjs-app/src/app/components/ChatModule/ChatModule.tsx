"use client";
// components/ChatModule.tsx
import React from "react";
import dynamic from "next/dynamic";
import styles from "./ChatModule.module.scss";

// Dynamically import Material-UI components
const TextField = dynamic(() => import("@mui/material/TextField"));
const Button = dynamic(() => import("@mui/material/Button"));
const Card = dynamic(() => import("@mui/material/Card"));
const CardContent = dynamic(() => import("@mui/material/CardContent"));

interface ChatModuleProps {
  messages: string[];
  inputValue: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSendMessage: () => void;
}

const ChatModule = ({
  messages,
  inputValue,
  onInputChange,
  onSendMessage,
}: ChatModuleProps) => {
  return (
    <Card className={styles.chatContainer}>
      <CardContent className={styles.messageArea}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.message}>
            {msg}
          </div>
        ))}
      </CardContent>
      <div className={styles.inputArea}>
        <TextField
          className={styles.inputField}
          value={inputValue}
          onChange={onInputChange}
          placeholder="Type a message..."
          variant="outlined"
          fullWidth
        />
        <Button
          className={styles.sendButton}
          onClick={onSendMessage}
          variant="contained"
        >
          Send
        </Button>
      </div>
    </Card>
  );
};

export default ChatModule;