import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div
        className="v-screen bg-white dark:bg-gray-900 dark:text-white"
        style={{ minHeight: "100vh" }}
      >
        <RouterProvider router={router} />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
