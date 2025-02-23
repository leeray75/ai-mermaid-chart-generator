"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./ChatModule.module.scss";
import { useGenerateMermaidMutation } from "@/app/lib/api.slice";

// Dynamically import Material-UI components
const TextField = dynamic(() => import("@mui/material/TextField"));
const Button = dynamic(() => import("@mui/material/Button"));

const InputArea = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [generateMermaid, { isLoading }] = useGenerateMermaidMutation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = async () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput) return;

    try {
      // Send the user input to the backend
      await generateMermaid({ userInput: trimmedInput }).unwrap();
      setInputValue(""); // Clear the input field after sending
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className={styles.inputArea}>
      <TextField
        className={styles.inputField}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type a message..."
        variant="outlined"
        fullWidth
      />
      <Button
        className={styles.sendButton}
        onClick={handleSendMessage}
        variant="contained"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send"}
      </Button>
    </div>
  );
};

export default InputArea;