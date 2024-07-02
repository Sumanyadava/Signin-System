import Cookies from "universal-cookie";
import NotAuth from '../pages/NotAuth'

const authChecker = (ele) => {
  const cookies = new Cookies();
  if (!cookies.get('jwt_auth')) {
    return (<NotAuth />) 
  }else{
    return ele;
  }
}

export default authChecker