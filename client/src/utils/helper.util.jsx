import Cookies from "universal-cookie";
import NotAuth from "../pages/NotAuth";


// this to control user to accesing pages they dont have access to :I am only checking token not roles
const authChecker = (ele) => {
  const cookies = new Cookies();
  const jwt_auth = cookies.get("jwt_auth");

  if (!jwt_auth || jwt_auth == "undefined") {
    return <NotAuth />;
  } else {
    return ele;
  }
};

export default authChecker;
