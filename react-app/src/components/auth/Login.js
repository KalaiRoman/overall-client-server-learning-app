import { getUserData } from '../../services/user_services'

function Login() {


  const {loading,data,error,refetch}=getUserData();

  console.log(data,"data")
  return (
    <div>

{data?.length}
{process.env.REACT_APP_BASE_URL}
      Login
    </div>
  )
}

export default Login
