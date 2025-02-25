import { Monaco } from "@monaco-editor/react";

const setupMermaid = (monaco: Monaco) => {
  monaco.languages.register({ id: "mermaid" });

  monaco.languages.setMonarchTokensProvider("mermaid", {
    tokenizer: {
      root: [
        [/(graph|sequenceDiagram|gantt|classDiagram|stateDiagram|pie|journey)/, "keyword"],
        [/%%.*/, "comment"],
        [/\b[A-Za-z0-9_-]+\b/, "identifier"],
        [/[{}[\]()]/, "delimiter"],
        [/-->|---|==>|==/, "operator"],
      ],
    },
  });

  monaco.editor.defineTheme("mermaid-theme", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "keyword", foreground: "FFA500" },
      { token: "comment", foreground: "808080" },
    ],
    colors: {}, // Required to avoid TypeScript errors
  });
};

export default setupMermaid;
