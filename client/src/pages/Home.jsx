import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const Home = ({decoded}) => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  
  const [userData, setUserData] = useState([""]);

  const handleAll = () => {
    axios
      .get(apiUrl+"/api/auth/all")
      .then((data) => {
        console.log(data.data);
        setUserData(data.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("user already exsist");
      });
  };

  
  const handleLogout = () => {
    cookies.remove("jwt_auth", { path: '/' })
    navigate("/"); 
    // a fresh reload just in case
    window.location.reload();
  };
  const handleEdit = () => {
    navigate("/signin")
  }

  return (
    <div className="bg-blue-700 h-screen ">
      <div className="header ">
        <div className="navbar bg-base-100 ">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Handle Accounts</a>
          </div>
          <div className="flex-none ">
            <div className="dropdown dropdown-end">
{/*               
              <button className="btn btn-accent mr-5" onClick={handleAll}>
                View All User
              </button> */}
            </div>

            
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-secondary"
              >
                <div className="">
                  {decoded?.useremail}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                
                <li>
                  <div onClick={handleEdit}>Edit</div>
                </li>
                <li> <div  onClick={handleLogout}>Logout</div>
                 
                </li>
              </ul>
            </div>
          </div>
        </div>
    <h1 className="text-center mt-24 text-[6vw]">Welcome {decoded?.username}
       

       </h1>
        <h1>
          {userData.map((e,index) => {
            return <p key={index} className="text-center text-white"> {e.username}</p>;
          })}
        </h1>
        
      </div>
    </div>
  );
};

export default Home;
