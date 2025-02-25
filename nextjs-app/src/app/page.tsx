import React from 'react';
import ChatContainer from './containers/ChatContainer';
import ChartContainer from './containers/ChartContainer';
import './Home.scss';

const Home = () => {

  return (
    <div className="home-container">
      <h1 className="title">AI Mermaid Chart Generator</h1>
      <div className="content">
        <ChatContainer />
        <ChartContainer />
      </div>
    </div>
  );
};

export default Home;
