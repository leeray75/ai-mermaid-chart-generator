"use client"; // Ensuring it's a client component

import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import MermaidChart from "../components/MermaidChart";

const ChartContainer = () => {


  return (
    <Provider store={store}>
      <MermaidChart />
    </Provider>
  );
};

export default ChartContainer;
