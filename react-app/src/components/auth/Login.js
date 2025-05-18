import { getUserData } from "../../services/user_services";
import HigherOrderComponent from "../../hoc/HigherOrderComponent";
import { useContext } from "react";
import ThemeContext from "../../contextapi/ThemeContext";
function Login(props) {
  const { name, age } = useContext(ThemeContext);
  const { loading, data, error, refecth } = getUserData();
  return (
    <div>
      Login{name} {age}
      <button onClick={refecth}>Refresh</button>
    </div>
  );
}

export default HigherOrderComponent(Login);
