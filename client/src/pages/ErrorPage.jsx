import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
  return (
    <div className="h-full w-full flex justify-center items-center ">
      <div className="mockup-browser bg-base-300 border cursor-pointer h-[80%] w-[80%] shadow-2xl shadow-blue-900" onClick={() => {navigate("/home")}}>
        <div className="mockup-browser-toolbar ">
          <div className="input">https://Go/to/Home</div>
        </div>
        <div className="bg-base-200 flex justify-center items-center flex-col px-4 py-16 h-full ">
            <h1 className="text-xl font-semibold bg-red-500 p-3 m-3  btn">Error 404 ! </h1>
            <p>No such Page exsist </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
