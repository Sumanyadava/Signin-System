import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import authChecker from "./utils/helper.util";

function App() {
  //intialise cookie
  const cookies = new Cookies();

  const [jwtToken, setJwtToken] = useState(cookies.get("jwt_auth") || null);

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

  useEffect(() => {
    cookies.set("jwt_auth", jwtToken, { path: "/" });
  }, [jwtToken]);

  return (
    <div className="h-screen w-screen ">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signup />}></Route>

          <Route
            path="/"
            element={<Login setJwtToken={setJwtToken} jwtToken={jwtToken} />}
          ></Route>

          <Route path="/home" element={authChecker(<Home />)}></Route>

          <Route path="*" element={authChecker(<ErrorPage />)}></Route>
        </Routes>
      </BrowserRouter>
      {
        decoded.username
      }
    </div>
  );
}

export default App;
