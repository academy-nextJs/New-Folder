
'use client'
import { ChevronLeft, Loader, RefreshCcw } from "lucide-react";
import CommonButton from "../common/buttons/common/CommonButton";
import { useForm } from "react-hook-form";
import { showToast } from "@/core/toast/toast";
import { useState } from "react";
import axiosApi from "@/core/interceptore/axiosApi";
import { redirect } from "next/navigation";
import OtpInput from "../common/inputs/auth/OtpInput";
import TimerButton from "../common/buttons/timer/TimerButton";

const VerifyForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [code, setCode] = useState<string>()

    const {
        handleSubmit,
        reset,
    } = useForm({})

    const handleRegister = async () => {
        setIsLoading(true)
        try {

            const res = await axiosApi.post('/auth/verify-email', {
                verificationCode: code,
                tempUserId: 1,
            })

            if (res) {
                showToast("success", " کد تایید شد ", " بستن ", " کد ارسال شده برای ایمیل شما تایید شد ")
                setIsLoading(false)
                reset()
                redirect("/completeRegister")
            }
        } catch (error) {
            console.log(error)
            showToast("error", " ارور در تایید کد ", " بستن ", " مشکلی در تایید کد پیدا شد ")
            setIsLoading(false)
        }
    }

    return (
        <div>
            <form className="mt-8 space-y-10" onSubmit={handleSubmit(handleRegister)}>
                <div className="flex flex-col gap-4">
                    <div className="w-full flex gap-4 justify-between items-center text-white">
                        <OtpInput onchange={(e) => setCode(e)} />
                        <TimerButton classname="flex-row" onclick={async () => {
                            try {
                                const email = localStorage.getItem("email")
                                const res = await axiosApi.post('/auth/start-registration', {
                                    email: email
                                })

                                if (res) {
                                    showToast("success", " کد ارسال شد ", " بستن ", " کد تایید برای ایمیل شما ارسال شد ")
                                    setIsLoading(false)
                                    reset()
                                    redirect("/verifyCode")
                                }
                            } catch (error) {
                                console.log(error)
                                showToast("error", " ارور در ارسال کد ", " بستن ", " مشکلی در ارسال کد پیدا شد ")
                                setIsLoading(false)
                            }

                        }} />
                    </div>
                </div>

                <div className="flex flex-row-reverse gap-4 md:flex-nowrap flex-wrap">
                    <CommonButton type="submit" title={isLoading ? "در حال تایید..." : " ساخت حساب کاربری "}
                        icon={isLoading ? <Loader /> : <ChevronLeft size={16} />} classname="md:w-1/2 w-full" />
                    <CommonButton type="button" title={" تغییر ایمیل "}
                        onclick={() => redirect('/login')}
                        icon={<RefreshCcw size={16} />} classname="bg-transparent border border-white text-white md:w-1/2 w-full" />
                </div>
            </form>
        </div>
    )
}

export default VerifyForm
