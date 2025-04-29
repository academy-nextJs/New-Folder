/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { setToken } from "@/core/cookie/auth";
import { fetchApi } from "../../core/interceptore/fetchApi";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import axiosApi from "@/core/interceptore/axiosApi";
import { Label } from "../ui/label";

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

const LoginForm = () => {
  // const handleLogin = async (formData: FormData) => {
  //   "use server";

  //   try {
  //     const res = await fetchApi.post<LoginResponse>('/auth/login', {
  //       email: formData.get('email'),
  //       password: formData.get('password'),
  //     });

  //     console.log(res)

  //     if (res.accessToken) {
  //       await setToken(res.accessToken);
  //     }
  //   } catch (error) {
  //     console.error('Login error:', error);
  //   }
  // };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = async (values: any) => {
    try {
      const res: LoginResponse = await axiosApi.post("/auth/login", values);
      console.log(res);

      if (res.accessToken) {
        await setToken(res.accessToken);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <form className="mt-8 space-y-6 text-black" onSubmit={handleSubmit(handleLogin)}>
        <div className="rounded-md shadow-sm -space-y-px flex gap-4">
          <div className="w-1/2 flex gap-1 flex-col text-white">
            <Label htmlFor="email" className={`text-[13px] flex gap-0.5`}>
              <span> ایمیل شما </span>
              <p className='text-danger'> * </p>
              <span> : </span>
            </Label>
            <Input
              id="email"
              type="text"
              className="bg-transparent placeholder:text-white text-sm outline-none w-full py-3 border border-white text-white px-4 rounded-[16px] text-[16px]"
              placeholder="مثال : dakjsbd@email.com"
              {...register("email")}
            />
          </div>
          <div className="w-1/2 flex gap-1 flex-col text-white">
            <Label htmlFor="email" className={`text-[13px] flex gap-0.5`}>
              <span> رمز عبور </span>
              <p className='text-danger'> * </p>
              <span> : </span>
            </Label>
            <Input
              id="password"
              type="password"
              className="bg-transparent placeholder:text-white text-sm outline-none w-full py-3 border border-white text-white px-4 rounded-[16px] text-[16px]"
              {...register("password")}
            />
          </div>
        </div>

        <div>
          <Button
            type="submit"
          // className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            ورود
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
