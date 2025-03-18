"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./ChatModule.module.scss";
import InputArea from "./InputArea";
import MessagesArea from "./MessagesArea";
import CloseButtonDrawer from "./CloseButtonDrawer";

// Dynamically import Material-UI components
const Card = dynamic(() => import("@mui/material/Card"));
const Drawer = dynamic(() => import("@mui/material/Drawer"));

const ChatModule = () => {
  const [open, setOpen] = useState(false);

  const handleFocus = () => setOpen(true);
  const handleClose = () => setOpen(false); // Function to close the drawer

  return (
    <Drawer
      anchor="bottom"
      open={open} // Open state is controlled
      variant="permanent"
      className={`${styles.drawer} ${open ? styles.open : ""}`}
    >
      <CloseButtonDrawer show={open} onClick={handleClose} />

      <Card className={styles.chatContainer}>
        {open && <MessagesArea />}
        <InputArea isOpen={open} onFocus={handleFocus} />
      </Card>
    </Drawer>
  );
};

export default ChatModule;
