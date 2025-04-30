/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import { ChevronLeft, Loader } from "lucide-react";
import CommonButton from "../common/buttons/common/CommonButton";
import PasswordInput from "../common/inputs/auth/PasswordInput";
import CommonInput from "../common/inputs/common/CommonInput";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaRegisterValidation } from "@/utils/validations/register-validation";
import { showToast } from "@/core/toast/toast";
import { useState } from "react";
import axiosApi from "@/core/interceptore/axiosApi";
import { removeToken } from "@/core/cookie/auth";
import { redirect } from "next/navigation";

const RegisterForm = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaRegisterValidation)
  })

  const handleRegister = async (values: any) => {
    setIsLoading(true)
    try {

      const res = await axiosApi.post('/auth/register', values)

      if (res) {
        showToast("success", " تایید ثبت نام ", " بستن ", " ثبت نام با موفقیت انجام شد ")
        setIsLoading(false)
        reset()
        await removeToken()
        redirect("/login")
      }
    } catch (error) {
      console.log(error)
      // showToast("error", " ارور در ثبت نام ", " بستن ", " مشکلی در ثبت نام پیدا شد ")
      setIsLoading(false)
    }
  }

  return (
    <div>
      <form className="mt-8 space-y-10" onSubmit={handleSubmit(handleRegister)}>
        <div className="flex flex-col gap-4">
          <div className="w-full flex sm:flex-nowrap flex-wrap gap-4">
            <div className="sm:w-1/2 w-full flex flex-col gap-1">
              <CommonInput register={register} type="text" label=" ایمیل شما " mandatory={true} placeholder=" ایمیل را وارد کنید... " classname="placeholder:text-white text-sm w-full border-white" color="text-white" background="bg-transparent" id="email" name="email" />
              {errors.email && <p className='text-danger text-sm font-semibold'>{errors.email.message} </p>}
            </div>
            <div className="sm:w-1/2 w-full flex flex-col gap-1">
              <PasswordInput register={register} label=" رمز عبور " placeholder=" رمز عبور را وارد کنید... " mandatory={true} id="password" name="password" color="text-white" background="bg-transparent" classname="text-sm w-full placeholder:text-white border-white" />
              {errors.password && <p className='text-danger text-sm font-semibold'>{errors.password.message} </p>}
            </div>
          </div>
          <div className="w-full flex sm:flex-nowrap flex-wrap gap-4">
            <div className="sm:w-1/2 w-full flex flex-col gap-1">
              <CommonInput register={register} type="firstName" label=" نام " mandatory={true} placeholder=" نام را وارد کنید... " classname="w-full placeholder:text-white text-sm border-white" color="text-white" background="bg-transparent" id="firstName" name="firstName" />
              {errors.firstName && <p className='text-danger text-sm font-semibold'>{errors.firstName.message} </p>}
            </div>
            <div className="sm:w-1/2 w-full flex flex-col gap-1">
              <CommonInput register={register} type="lastName" label=" نام خانوادگی " mandatory={true} placeholder=" نام خانوادگی را وارد کنید... " classname="text-sm placeholder:text-white w-full border-white" color="text-white" background="bg-transparent" id="lastName" name="lastName" />
              {errors.lastName && <p className='text-danger text-sm font-semibold'>{errors.lastName.message} </p>}
            </div>
          </div>
        </div>

        <div>
          <CommonButton title={isLoading ? "در حال ورود..." : " ساخت حساب کاربری"}
            icon={isLoading ? <Loader /> : <ChevronLeft size={16} />} classname="w-full" />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
