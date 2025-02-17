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

        // Modify the existing style attribute to update max-width and height
        const svgWithStyle = svg.replace(
          /<svg([^>]*)style="([^"]*)"/,
          (match, p1, p2) => {
            // Update or add max-width and height in the style attribute
            const updatedStyle = p2
              .replace(/max-width:\s*[^;]+;?/, "max-width: 100%;") // Update max-width
              .replace(/height:\s*[^;]+;?/, "height: auto;"); // Update height
            return `<svg${p1}style="${updatedStyle}"`;
          }
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
      data-component="MermaidChart"
      dangerouslySetInnerHTML={{ __html: svgContent }} // Render the SVG
    />
  );
};

export default MermaidChart;