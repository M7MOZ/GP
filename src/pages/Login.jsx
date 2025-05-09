import LoginField from "../components/LoginField"
import LoginVi from "../UI/LoginVi"
function Login() {
  return (
    <div className="bg-gray-100 p-4 flex items-center h-screen">
      <div className=" bg-white rounded-lg shadow-md h-[95vh] w-full flex">
          <LoginVi/>
          <LoginField/>
      </div>
    </div>
  )
}
export default Login

