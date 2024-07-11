import Cookies from "universal-cookie";
import NotAuth from "../pages/NotAuth";

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
