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
import { useTranslation } from "react-i18next";

const RegisterForm = () => {

  const {t,i18n} = useTranslation("auth")
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
        showToast("success", t("registerForm.success"), t("loginForm.close"), t("registerForm.successMessage"))
        setIsLoading(false)
        reset()
        router.push("/verifyCode")
      }
    } catch (error: any) {
      console.log(error)
      if (error.response.data.message) {
        showToast("error", t("registerForm.error"), t("loginForm.close"), error.response.data.message, 5000)
      }
      else {
        showToast("error", t("registerForm.error"),
        t("loginForm.close"),
        t("loginForm.errorMessage"))
      }
      setIsLoading(false)
    }
  }

  return (
    <div dir={i18n.dir()}>
      <form className="mt-8 space-y-10" onSubmit={handleSubmit(handleRegister)}>
        <div className="flex flex-col gap-4">
          <div className="w-full flex gap-1 flex-col text-card-foreground">
            <Label htmlFor="email" className={`text-[13px] flex gap-0.5`}>
              <span> {t("registerForm.email")} </span>
              <p className='text-danger'> * </p>
              <span> : </span>
            </Label>
            <Input
              id="email"
              type="text"
              className="bg-transparent placeholder:text-card-foreground text-sm outline-none w-full py-3 border border-card-foreground text-card-foreground px-4 rounded-[16px] text-[16px]"
              placeholder={t("registerForm.emailPlaceholder")}
              {...register("email")}
            />
            {errors.email && <p className='text-danger text-sm font-semibold'>{errors.email.message} </p>}
          </div>
        </div>

        <div>
          <CommonButton title={isLoading ? t("registerForm.loading") : t("registerForm.login")}
            icon={isLoading ? <Loader /> : <ChevronLeft size={16} />} classname="w-full text-primary-foreground" />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
