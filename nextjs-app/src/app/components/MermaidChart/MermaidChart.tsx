"use client"; // Ensuring it's a client component
import React, { useEffect, useState } from "react";
import mermaid from "mermaid";
import "./MermaidChart.scss";

interface MermaidChartProps {
  chartCode: string;
}

const MermaidChart = ({ chartCode }: MermaidChartProps) => {
  const [svgContent, setSvgContent] = useState<string>(""); // State to hold the rendered SVG

  useEffect(() => {
    const renderChart = async () => {
      try {
        mermaid.initialize({ startOnLoad: false }); // Prevent auto-render on load

        // Render the Mermaid chart and obtain SVG code
        const { svg } = await mermaid.render("mermaid-chart", chartCode);
        console.log("[MermaidChart] svg:", svg);

        // Add max-width style to the SVG element
        const svgWithStyle = svg.replace(
          "<svg ",
          `<svg style="max-width: 100%; height: auto;" `
        );

        // Update the state with the modified SVG
        setSvgContent(svgWithStyle);
      } catch (error) {
        console.error("Error rendering Mermaid chart:", error);
      }
    };

    // Render the chart only if the window object is available (client-side)
    if (typeof window !== "undefined") {
      renderChart();
    }
  }, [chartCode]); // Re-run the effect if chartCode changes

  // Render the SVG using dangerouslySetInnerHTML
  return (
    <div
      id="MermaidChart"
      data-component="MermaidChart"
      dangerouslySetInnerHTML={{ __html: svgContent }} // Render the SVG
    />
  );
};

export default MermaidChart;