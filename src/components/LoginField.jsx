import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function LoginField() {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate("/chat"); // Replace "/home" with the desired route
  };
  return (
    <div className="w-full lg:w-[50%] flex flex-col p-5 sm:gap-0 justify-center items-center">
      <h1 className="font-bold text-3xl sm:text-4xl my-5 sm:my-3"> تسجيل الدخول </h1>
      <div className="flex flex-col gap-5  w-[75%]">
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-800 text-base sm:text-2xl">البريد الإلكتروني</label> 
          <input className="outline-none rounded-lg p-3 sm:p-4 bg-gray-100" type="text" placeholder="ex.email@domain.com" />
        </div>
        <div className="flex flex-col space-y-3">
          <label className="font-medium text-gray-800 text-base sm:text-2xl"> كلمة المرور </label> 
          <input className="outline-none rounded-lg p-3 sm:p-4 bg-gray-100" type="text" placeholder="ادخل كلمة المرور" />
        </div>
      </div>
      <button onClick={handleLogin} className="bg-[#5661f6] w-[68%] p-2 sm:p-3 rounded-full text-white text-base sm:text-2xl m-5 cursor-pointer">تسجيل</button>
      <div className="flex flex-col justify-center items-center w-[70%]">
        <p className="text-gray-800 text-2xl ">أو قم بتسجيل الدخول عبر</p>
        <button className=" w-full p-3 rounded-full border-2 border-gray-500 text-base sm:text-2xl m-5 cursor-pointer flex items-center justify-center">
          <FcGoogle className="text-2xl sm:text-3xl ml-2"/>
          <span>تسجيل الدخول عبر جوجل</span>
        </button>
        <button className=" w-full p-3 rounded-full border-2 border-gray-500 text-base sm:text-2xl m-5 cursor-pointer flex items-center justify-center">
          <FaFacebook className="text-2xl sm:text-3xl ml-2 text-blue-600"/>
          <span>تسجيل الدخول عبر فيسبوك</span>
        </button>
      </div>
    </div>
  )
}

export default LoginField