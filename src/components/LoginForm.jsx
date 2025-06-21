import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";

function LoginForm() {
    const { mutate, isLoading, isError: isServerError } = useLogin();
    
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' })); // clear error on change
    };

    const validate = () => {
        const newErrors = {};
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{}|\\:;"'<>,.?/-]).{8,}$/;
        if (!form.email.trim()) newErrors.email = "البريد الإلكتروني مطلوب";
        if (!form.password) {
        newErrors.password = "كلمة المرور مطلوبة";
        } else if (!passwordRegex.test(form.password)) {
        newErrors.password = "كلمة المرور يجب أن تحتوي على حرف كبير وصغير، رقم، رمز خاص، وطول 8 أحرف على الأقل";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
        mutate(form);
        }
    };

    return (
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl sm:text-4xl mb-15">تسجيل الدخول</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-[75%] ">

            <div className="flex flex-col space-y-2 mb-6">
                <label className="font-medium text-gray-800 text-base sm:text-2xl">البريد الإلكتروني</label>
                <input
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                    className="outline-none rounded-lg p-3 sm:p-4 bg-gray-100"
                    type="email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="flex flex-col space-y-2 mb-6">
                <label className="font-medium text-gray-800 text-base sm:text-2xl">كلمة المرور</label>
                <input
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                    className="outline-none rounded-lg p-3 sm:p-4 bg-gray-100"
                    type="password"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <button
                type="submit"
                disabled={isLoading}
                className={`bg-[#5661f6] p-2 sm:p-3 mt-5 rounded-full w-full text-white text-base sm:text-2xl cursor-pointer ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}  
            >
                {isLoading ? 'جاري التسجيل...' : 'تسجيل الدخول'}
            </button>
            
        </form>
        {isServerError && <p className="text-red-500 text-base sm:text-2xl mt-3">خطأ في البريد او كلمة المرور</p>}
        <Link to="/auth/register" className="mt-10 text-[#5661f6] cursor-pointer">ليس لديك حساب؟ انشاء حساب</Link>
        </div>
    );
}

export default LoginForm;
