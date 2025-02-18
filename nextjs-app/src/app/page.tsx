import React from 'react';
import ChatContainer from './containers/ChatContainer';
import MermaidChart from './components/MermaidChart'; // Import MermaidChart
import './Home.scss';

const Home = () => {
  const chartCode = 'graph LR; A-->B; A-->C; B-->D; C-->D;'; // Example Mermaid code

  return (
    <div className="home-container">
      <h1 className="title">Chat Application</h1>
      <div className="content">
        <ChatContainer />
        <MermaidChart chartCode={chartCode} />
      </div>
    </div>
  );
};

export default Home;
