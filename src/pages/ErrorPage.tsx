import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <div className="p-4">
        <h2 className="text-3xl font-bold">Oops...</h2>
        <p className="mt-2 text-lg">
          {isRouteErrorResponse(error)
            ? "The page does not exists"
            : "An Unexpected Error occured."}
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
