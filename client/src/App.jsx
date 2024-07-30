import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import authChecker from "./utils/helper.util";

function App() {

  //intialise cookie and jwt
  const cookies = new Cookies();
  const [jwtToken, setJwtToken] = useState(cookies.get("jwt_auth") || null);


  // setting the jwt 
  useEffect(() => {
    cookies.set("jwt_auth", jwtToken, { path: "/" });
  }, [jwtToken]);

  
  let decoded;
  if (jwtToken) {
    try {
      decoded = jwtDecode(jwtToken);
    } catch (error) {
      console.error("Invalid token:", error);
    }
  } else {
    console.log(jwtToken);
  }
  

  return (
    <div className="h-screen w-full ">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signup decoded={decoded} />}></Route>

          <Route
            path="/"
            element={<Login setJwtToken={setJwtToken} jwtToken={jwtToken} />}
          ></Route>

          <Route path="/home" element={authChecker(<Home decoded={decoded} />)}></Route>

          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
      {/* {decoded?.username} */}

      <ToastContainer />
    </div>
  );
}

export default App;
