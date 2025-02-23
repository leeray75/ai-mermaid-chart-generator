"use client";
import React, { useEffect, useState } from "react";
import mermaid from "mermaid";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store"; // Adjust path as needed
import "./MermaidChart.scss";

const MermaidChart = () => {
  const chartCode = useSelector((state: RootState) => state.mermaidChart.mermaidCode);
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    const renderChart = async () => {
      if (!chartCode) return; // Don't render if code is empty

      try {
        mermaid.initialize({ startOnLoad: false });

        const { svg } = await mermaid.render("mermaid-chart", chartCode);

        const svgWithStyle = svg.replace(
          /<svg([^>]*)style="([^"]*)"/,
          (match, p1, p2) => {
            const updatedStyle = p2
              .replace(/max-width:\s*[^;]+;?/, "max-width: 100%;")
              .replace(/height:\s*[^;]+;?/, "height: auto;");
            return `<svg${p1}style="${updatedStyle}"`;
          }
        );

        setSvgContent(svgWithStyle);
      } catch (error) {
        console.error("Error rendering Mermaid chart:", error);
      }
    };

    if (typeof window !== "undefined") {
      renderChart();
    }
  }, [chartCode]);

  return (
    <div
      data-component="MermaidChart"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default MermaidChart;