import { getUserData } from "../../services/user_services";

function Login() {
  const { loading, data, error, refecth } = getUserData();
  return (
    <div>
      Login
      <button onClick={refecth}>Refresh</button>
    </div>
  );
}

export default Login;
