"use client"; // Ensuring it's a client component

import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import MermaidChart from "../components/MermaidChart";
import styles from "./Containers.module.scss";
const ChartContainer = () => {
  return (
    <>
      <Provider store={store}>
        <section className={styles["chart-container"]}>
          <MermaidChart />
        </section>
      </Provider>
    </>
  );
};

export default ChartContainer;
