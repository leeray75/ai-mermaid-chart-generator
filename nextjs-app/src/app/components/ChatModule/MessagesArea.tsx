// src/app/components/ChatModule/MessageArea.tsx
"use client";
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "./ChatModule.module.scss";
import { useGetChatHistoryQuery, ChatHistoryItem } from "@/app/lib/api.slice";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CardContent = dynamic(() => import("@mui/material/CardContent"));

// CopyButton Component
const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
  const [buttonText, setButtonText] = useState("Copy");
  const buttonRef = useRef<HTMLButtonElement>(null); // Correct type for the ref

  const handleCopy = async () => {
    try {
      if (buttonRef.current) {
        await navigator.clipboard.writeText(textToCopy);
        setButtonText("Copied!");
        setTimeout(() => {
          setButtonText("Copy");
        }, 2000);
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
      setButtonText("Error");
      setTimeout(() => {
        setButtonText("Copy"); // Reset even on error
      }, 2000);
    }
  };

  return (
    <button className="copy-button" onClick={handleCopy} ref={buttonRef}>
      {buttonText}
    </button>
  );
};

const MessagesArea = () => {
  const { data: chatHistory, isLoading, isError } = useGetChatHistoryQuery();

  if (isLoading) {
    return <div className={styles.messageArea}>Loading chat history...</div>;
  }

  if (isError) {
    return (
      <div className={styles.messageArea}>Error loading chat history.</div>
    );
  }

  const components = {
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "");
      const codeString = String(children).replace(/\n$/, "");

      return !inline && match ? (
        <div className="code-block-wrapper">
          <SyntaxHighlighter
            children={codeString}
            style={atomDark}
            language={match[1]}
            PreTag="div"
            {...props}
          >
          </SyntaxHighlighter>
          <CopyButton textToCopy={codeString} />
        </div>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <CardContent className={styles.messageArea}>
      {chatHistory?.data?.map((msg: ChatHistoryItem) => (
        <div key={msg._id} className={styles.message}>
          <p>
            <strong>User:</strong> {msg.userInput}
          </p>
          <p>
            <strong>Mermaid Code:</strong>
          </p>
          <ReactMarkdown children={msg.mermaidCode} components={components} />
        </div>
      ))}
    </CardContent>
  );
};

export default MessagesArea;
