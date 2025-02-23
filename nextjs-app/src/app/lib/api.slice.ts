// src/lib/api.slice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface GenerateMermaidResponse {
  mermaidCode: string;
}

export interface ChatHistoryItem {
  _id: string;
  userInput: string;
  mermaidCode: string;
  timestamp: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ChatHistoryResponse {
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
  tagTypes: ["ChatHistory"], // Define a tag for chat history
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
      invalidatesTags: ["ChatHistory"], // Invalidate the "ChatHistory" tag after a successful mutation
    }),
    getChatHistory: builder.query<ChatHistoryResponse, void>({
      query: () => "/history",
      providesTags: ["ChatHistory"], // Provide the "ChatHistory" tag for this query
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