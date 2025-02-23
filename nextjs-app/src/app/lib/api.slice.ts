// src/lib/api.slice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface GenerateMermaidResponse {
  mermaidCode: string;
}

export interface ChatHistoryItem {
  _id: string; // Add _id (and other missing fields)
  userInput: string;
  mermaidCode: string;
  timestamp: string; // Add timestamp (and other missing fields)
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ChatHistoryResponse {
  // Define a response interface
  status: string;
  data: ChatHistoryItem[];
}

interface HealthCheckResponse {
  message: string;
}

const baseUrl =
  (process.env.REACT_APP_NODEJS_API_URI as string) ||
  "http://localhost:5001/api/v1/ai-mermaid";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    generateMermaid: builder.mutation<
      GenerateMermaidResponse,
      { userInput: string }
    >({
      query: (userInput) => ({
        url: "/generate",
        method: "POST",
        body: userInput,
      }),
    }),
    getChatHistory: builder.query<ChatHistoryResponse, void>({
      // Use the new interface
      query: () => "/history",
    }),
    checkHealth: builder.query<HealthCheckResponse, void>({
      query: () => "/health",
    }),
  }),
});

export const {
  useGenerateMermaidMutation,
  useGetChatHistoryQuery,
  useCheckHealthQuery,
} = apiSlice;
