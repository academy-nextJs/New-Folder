/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useUserStore } from "@/utils/zustand/store";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import axiosApi from "@/core/interceptore/axiosApi";
import { Label } from "../ui/label";
import { ArrowLeft, Eye, EyeOff, Loader } from "lucide-react";
import CommonButton from "../common/buttons/common/CommonButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaLoginValidation } from "@/utils/validations/login-validation";
import { Button } from "../ui/button";
import { useState } from "react";
import { showToast } from "@/core/toast/toast";
import { useRouter } from "next/navigation";

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { login } = useUserStore();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaLoginValidation),
  });

  const handleLogin = async (values: any) => {
    setIsLoading(true);
    try {
      const res: LoginResponse = await axiosApi.post("/auth/login", values);

      if (res.accessToken) {
        await login(res.accessToken);
        showToast(
          "success",
          " تایید ورود ",
          " بستن ",
          " کاربر با موفقیت وارد شد. "
        );
        setIsLoading(false);
        reset();
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
      showToast(
        "error",
        " کاربر پیدا نشد ",
        " بستن ",
        " کاربر با این مشخصات پیدا نشد "
      );
    }
  };

  return (
    <div>
      <form
        className="mt-8 space-y-6 text-foreground"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="rounded-md -space-y-px flex md:flex-nowrap flex-wrap gap-4">
          <div className="md:w-1/2 w-full flex gap-1 flex-col text-card-foreground">
            <Label htmlFor="email" className={`text-[13px] flex gap-0.5`}>
              <span> ایمیل شما </span>
              <p className="text-danger"> * </p>
              <span> : </span>
            </Label>
            <Input
              id="email"
              type="text"
              className="bg-transparent placeholder:text-card-foreground text-sm outline-none w-full py-3 border border-card-foreground text-card-foreground px-4 rounded-[16px] text-[16px]"
              placeholder="مثال : dakjsbd@email.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-danger text-sm font-semibold">
                {errors.email.message}{" "}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3 md:w-1/2 w-full">
            <div className="w-full flex gap-1 flex-col text-card-foreground">
              <Label htmlFor="email" className={`text-[13px] flex gap-0.5`}>
                <span> رمز عبور </span>
                <p className="text-danger"> * </p>
                <span> : </span>
              </Label>
              <div className="relative w-full">
                <Input
                  id="password"
                  type={showPassword ? "password" : "text"}
                  className="bg-transparent placeholder:text-card-foreground text-sm outline-none w-full py-3 border border-card-foreground text-card-foreground px-4 rounded-[16px] text-[16px]"
                  {...register("password")}
                />
                <Button
                  variant={"scale"}
                  onClick={() => {
                    if (showPassword) {
                      setShowPassword(false);
                    } else {
                      setShowPassword(true);
                    }
                  }}
                  className="cursor-pointer bg-transparent text-card-foreground absolute left-3 top-2"
                  type="button"
                >
                  {showPassword ? (
                    <EyeOff className={`size-[20px]`} />
                  ) : (
                    <Eye className={`size-[20px]`} />
                  )}
                </Button>
                <div />
                {errors.password && (
                  <p className="text-danger text-sm mt-0.5 font-semibold">
                    {errors.password.message}{" "}
                  </p>
                )}
              </div>
              <span className="text-card-foreground flex gap-2 text-sm cursor-pointer">
                {" "}
                <p> رمز عبور خود را فراموش کردم </p> <ArrowLeft size={20} />{" "}
              </span>
            </div>
          </div>
        </div>
        <div>
          <CommonButton
            type="submit"
            title={isLoading ? "در حال ورود..." : "ورود به حساب کاربری"}
            icon={isLoading ? <Loader /> : <ArrowLeft size={16} />}
            classname="w-full text-primary-foreground"
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
