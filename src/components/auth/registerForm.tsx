/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import { ChevronLeft, Loader } from "lucide-react";
import CommonButton from "../common/buttons/common/CommonButton";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaRegisterValidation } from "@/utils/validations/register-validation";
import { showToast } from "@/core/toast/toast";
import { useState } from "react";
import axiosApi from "@/core/interceptore/axiosApi";;
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {useUserStore, useEmailStore} from "@/utils/zustand/store";
import { useRouter } from "next/navigation";

const RegisterForm = () => {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const setTempUserId = useUserStore(state => state.setTempUserId)
  const setEmail = useEmailStore(state => state.setEmail)

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
      setEmail(values.email)
      const res = await axiosApi.post('/auth/start-registration', values) as any
      if (res.tempUserId) {
        setTempUserId(res.tempUserId)
      }
      if (res) {
        showToast("success", " کد ارسال شد ", " بستن ", " کد تایید برای ایمیل شما ارسال شد ")
        setIsLoading(false)
        reset()
        router.push("/verifyCode")
      }
    } catch (error: any) {
      console.log(error)
      if (error.response.data.message) {
        showToast("error", " ارور در ارسال کد ", " بستن ", error.response.data.message, 5000)
      }
      else {
        showToast("error", " ارور در ارسال کد ", " بستن ", " مشکلی در ارسال کد پیدا شد ")
      }
      setIsLoading(false)
    }
  }

  return (
    <div>
      <form className="mt-8 space-y-10" onSubmit={handleSubmit(handleRegister)}>
        <div className="flex flex-col gap-4">
          <div className="w-full flex gap-1 flex-col text-white">
            <Label htmlFor="email" className={`text-[13px] flex gap-0.5`}>
              <span> ایمیل شما </span>
              <p className='text-danger'> * </p>
              <span> : </span>
            </Label>
            <Input
              id="email"
              type="text"
              className="bg-transparent placeholder:text-white text-sm outline-none w-full py-3 border border-white text-white px-4 rounded-[16px] text-[16px]"
              placeholder=" لطفا ایمیل خود را وارد فرمایید... "
              {...register("email")}
            />
            {errors.email && <p className='text-danger text-sm font-semibold'>{errors.email.message} </p>}
          </div>
        </div>

        <div>
          <CommonButton title={isLoading ? "در حال ارسال..." : " ارسال کد تایید "}
            icon={isLoading ? <Loader /> : <ChevronLeft size={16} />} classname="w-full" />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
