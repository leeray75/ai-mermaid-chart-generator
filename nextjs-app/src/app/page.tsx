// src/pages/Home.tsx
import React from 'react';
import ChatContainer from './containers/ChatContainer';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Chat Application</h1>
      <ChatContainer />
    </div>
  );
};

export default Home;
