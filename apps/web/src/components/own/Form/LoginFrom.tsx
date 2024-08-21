"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginValidation } from "@/utils/validations/LoginValidatons";
// import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import { login } from "../../store/authSlice";

import { BackendUrl } from "@/utils/constants";
import Link from "next/link";
import { useForm } from "react-hook-form";
// import { useAuth } from "../../contexts/AuthContext";

const LoginForm = () => {
  // const { login } = useAuth();

  // const navigator = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginValidation),
  });

  // const onSubmit = async (data: any) => {
  //   try {
  //     const res = await axios.post(`${backendUrl}/api/customers/login`, data);
  //     if (res.data.success) {
  //       // dispatch(login(res.data));
  //       login(res.data.accessToken, res.data.refreshToken);
  //       localStorage.setItem("isAdmin", res.data.customer.isAdmin);
  //       if (res.data.customer.isAdmin) {
  //         navigator("/admin/overview");
  //       } else {
  //         navigator("/");
  //       }
  //     }
  //   } catch (error: any) {
  //     console.error("Login error:", error.message);
  //     // Handle axios request error (e.g., show error message)
  //   }
  // };

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  const getErrorMessage = (error: any) => {
    if (typeof error === "string") {
      return error;
    }
    if (error && error.message) {
      return error.message;
    }
    return "Invalid value";
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-2 rounded-lg bg-transparent md:p-5 flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 min-w-40 md:min-w-60 lg:min-w-80">
          <input
            {...register("email")}
            placeholder="Email"
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#56B280]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {getErrorMessage(errors.email)}
            </p>
          )}
        </div>
        <div className="mb-4 min-w-40 md:min-w-60 lg:min-w-80">
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#56B280]"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {getErrorMessage(errors.password)}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-[#56B280] text-white p-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
      <p>
        Don't have an Account?
        <Link className="text-[#56B280] px-2" href="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;