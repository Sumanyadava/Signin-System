import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link, useNavigate } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Signup = ({ decoded }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [eye, setEye] = useState("password");
  const [passVal, setpassVal] = useState("text-red-300");

  const cookies = new Cookies();
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  //filling the fields with user data
  useEffect(() => {
    setUserName(decoded?.username);
    setUserEmail(decoded?.useremail);
  }, [decoded]);

  const handlePassword = (e) => {
    let passdigit = e.target.value;
    setUserPassword(passdigit);

    if (passdigit.length >= 8) {
      setpassVal("text-green-300");
    } else {
      setpassVal("text-red-300");
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (
      userName.trim().length <= 2 ||
      userEmail.trim() == "" ||
      userPassword.trim().length < 8
    ) {
      toast.error("Please fill all the fields");
    } else {
      await axios
        .post(apiUrl + "/api/auth/signin", {
          name: userName,
          email: userEmail,
          password: userPassword,
        })
        .then((data) => {
          toast.success("Signup Success");
          console.log(userName, userEmail, userPassword);
          setUserName("");
          setUserEmail("");
          setUserPassword("");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          const resMessage = err.response.data.error || "server not connected";
          toast.error(resMessage);
        });
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    if (
      userName.trim().length <= 2 ||
      userEmail.trim() === "" ||
      (userPassword.trim().length > 0 && userPassword.trim().length < 8)
    ) {
      toast.error("Please fill all the fields");
    } else {
      await axios
        .put(apiUrl + `/api/auth/update?userId=${decoded?.userID}`, {
          name: userName,
          email: userEmail,
          password: userPassword,
        })
        .then((data) => {
          toast.success("Update Successfully");
          console.log(userName, userEmail, userPassword);
          setUserName("");
          setUserEmail("");
          setUserPassword("");

          //after edit logout the user for safety
          cookies.remove("jwt_auth", { path: "/" });
          navigate("/");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          const resMessage = err.response.data.error || "server not connected";
          toast.error(resMessage);
        });
    }
  };

  return (
    <div className="flex h-full w-full bg-white text-black">
      <div className="signup_message  w-full sm:w-[50%] flex items-center justify-center">
        <div className="signup_container  max-h-[600px] w-[400px] rounded-md">
          <form
            action=""
            className="w-full h-full flex flex-col p-5"
            autoComplete="on"
          >
            {/*
            google integration: not integrated

            <button
              className="btn border-black text-black hover:bg-gray-100 bg-inherit"
              onClick={() => {
                toast.error("not integrated");
              }}
            >
              <i><FaGoogle /></i>
              Signup with Google{" "}
            </button>

            <div className="divider divider-neutral">or</div>
             */}
            {/* text field  */}

            <label className="form-control w-full ">
              <div className="label">
                <span className="">
                  {decoded ? "Edit your name?" : "What is your name?"}
                </span>
              </div>
              <input
                type="text"
                placeholder="Name here"
                required
                autoComplete="username"
                className="input border-black w-full bg-white "
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </label>

            <label className="form-control w-full mt-2">
              <div className="label">
                <span className="">
                  {decoded ? "Edit your Email ?" : "What is your Email?"}
                </span>
              </div>
              <input
                type="email"
                placeholder="Email here"
                autoComplete="email"
                className="peer input border-black w-full bg-white "
                required
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
            </label>

            <label className="form-control w-full mt-2 relative">
              <div className="label">
                <span className="">
                  {decoded
                    ? "If you wanted to Reset Password ?"
                    : "What is your name?"}
                </span>
                <span
                  className="label-text-alt cursor-pointer text-xl"
                  onClick={() => {
                    eye == "password" ? setEye("text") : setEye("password");
                  }}
                >
                  {eye == "text" ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <input
                type={eye}
                autoComplete="current-password"
                placeholder="Type here"
                required
                className="peer input border-black w-full bg-white "
                value={userPassword}
                onChange={handlePassword}
              />

              <span
                className={`invisible peer-focus:visible pl-2 pt-2 label-text-alt  ${passVal}`}
              >
                password must be 8 character long
              </span>
            </label>
            {decoded ? (
              <button className="btn mt-9" onClick={handleEdit}>
                Save
              </button>
            ) : (
              <button className="btn mt-9" onClick={handleSave}>
                Sign ups
              </button>
            )}

            {decoded ? (
              <p className=" text-center mt-2">
                Go Back?{" "}
                <Link to="/home" className="underline font-bold">
                  Home
                </Link>
              </p>
            ) : (
              <p className=" text-center mt-2">
                Been here before?{" "}
                <Link to="/" className="underline font-bold">
                  Login Instead
                </Link>
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="signup_pict h-full  w-[50%] hidden sm:flex justify-center items-center">
        <h1 className="text-[4vw]">
          {decoded ? "Edit Here..." : "Sign up Here..."}
        </h1>
      </div>
    </div>
  );
};

export default Signup;
