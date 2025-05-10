/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import { ChevronLeft, Loader, RefreshCcw } from "lucide-react";
import CommonButton from "../common/buttons/common/CommonButton";
import { useForm } from "react-hook-form";
import { showToast } from "@/core/toast/toast";
import { useState } from "react";
import axiosApi from "@/core/interceptore/axiosApi";
import { redirect, useRouter } from "next/navigation";
import OtpInput from "../common/inputs/auth/OtpInput";
import TimerButton from "../common/buttons/timer/TimerButton";
import { useEmailStore, useUserStore } from "@/utils/zustand/store";
import { useTranslation } from "react-i18next";

const VerifyForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [code, setCode] = useState<string>()
    const tempUserId = useUserStore(state => state.tempUserId)
    const setUserId = useUserStore(state => state.setUserId)
    const email = useEmailStore(state => state.email)
    const setEmail = useEmailStore(state => state.setEmail)
    const setTempUserId = useUserStore(state => state.setTempUserId)
    const router = useRouter()
    const { t, i18n } = useTranslation("auth")

    const {
        handleSubmit,
        reset,
    } = useForm({})

    const handleRegister = async () => {
        setIsLoading(true)
        try {
            const data = {
                tempUserId: Number(tempUserId),
                verificationCode: code
            }
            const res = await axiosApi.post('/auth/verify-email', data) as any

            if (res.userId) {
                setUserId(res.userId)
            }

            if (res) {
                showToast("success", t("verifyCodeForm.success"), t("loginForm.close"), t("verifyCodeForm.successMessage"))
                setIsLoading(false)
                reset()
                router.push("/completeRegister")
            }
        } catch (error: any) {
            console.log(error)
            if (error.response.data.message) {
                showToast("error", t("loginForm.success"),
                    t("loginForm.close"),
                    t("loginForm.successMessage"))
            }
            else {
                showToast("error", t("loginForm.error"),
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
                    <div className="w-full flex xl:flex-row flex-col xl:gap-4 gap-8 justify-between xl:items-center items-start text-card-foreground">
                        <OtpInput onchange={(e) => setCode(e)} />
                        <TimerButton classname="flex-row" onclick={async () => {
                            try {
                                setEmail(email || "")
                                const res = await axiosApi.post('/auth/start-registration', {
                                    email: email
                                }) as any
                                if (res.tempUserId) {
                                    setTempUserId(res.tempUserId)
                                }
                                if (res) {
                                    showToast("success", t("verifyCodeForm.success"), t("loginForm.close"), t("verifyCodeForm.successMessage"))
                                    setIsLoading(false)
                                    reset()
                                    router.push("/verifyCode")
                                }
                            } catch (error: any) {
                                console.log(error)
                                if (error.response.data.message) {
                                    showToast("error", t("verifyCodeForm.error"),
                                        t("loginForm.close"),
                                        t("loginForm.errorMessage"))
                                }
                                else {
                                    showToast("error", t("verifyCodeForm.error"),
                                        t("loginForm.close"),
                                        t("loginForm.errorMessage"))
                                }
                            }
                        }
                        } />
                    </div>
                </div>

                <div dir={i18n.dir()} className="flex flex-row-reverse gap-4 md:flex-nowrap flex-wrap">
                    <CommonButton type="submit" title={isLoading ? t("verifyCodeForm.loading") : t("verifyCodeForm.login")}
                        icon={isLoading ? <Loader /> : <ChevronLeft size={16} />} classname="md:w-1/2 w-full text-primary-foreground" />
                    <CommonButton type="button" title={t("verifyCodeForm.changeEmail")}
                        onclick={() => redirect('/login')}
                        icon={<RefreshCcw size={16} />} classname="bg-transparent border border-card-foreground text-card-foreground md:w-1/2 w-full" />
                </div>
            </form>
        </div>
    )
}

export default VerifyForm
