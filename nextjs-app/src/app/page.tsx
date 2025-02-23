import React from 'react';
import ChatContainer from './containers/ChatContainer';
import ChartContainer from './containers/ChartConainer';
import './Home.scss';

const Home = () => {

  return (
    <div className="home-container">
      <h1 className="title">Chat Application</h1>
      <div className="content">
        <ChatContainer />
        <ChartContainer />
      </div>
    </div>
  );
};

export default Home;
