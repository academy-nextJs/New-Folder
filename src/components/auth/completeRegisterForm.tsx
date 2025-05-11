/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import { ChevronLeft, Loader } from "lucide-react";
import CommonButton from "../common/buttons/common/CommonButton";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaCompleteRegisterValidation } from "@/utils/validations/register-validation";
import { showToast } from "@/core/toast/toast";
import { useState } from "react";
import axiosApi from "@/core/interceptore/axiosApi";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useUserStore } from "@/utils/zustand/store";
import { useRouter } from "next/navigation";

const CompleteRegisterForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    const userId = useUserStore(state => state.userId)

    const {
        handleSubmit,
        reset,
        register,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schemaCompleteRegisterValidation)
    })

    const handleRegister = async (values: any) => {
        setIsLoading(true)
        try {
            const data = {
                userId: userId,
                password: values.password,
                phoneNumber: `${"+98" + values.phoneNumber}`
            }
            console.log(data)
            const res = await axiosApi.post('/auth/complete-registration', data)
            console.log(res)
            if (res) {
                showToast("success", " حساب کاربری ساخته شد ", "بستن", " حساب کاربری شما با موفقیت ساخته شد ")
                setIsLoading(false)
                reset()
                router.push("/login")
            }
        } catch (error: any) {
            console.log(error)
            if (error.response.data.message) {
                showToast("error", "ثبت نام تایید نشد", "بستن", error.response.data.message)
            }
            else {
                showToast("error", "ثبت نام تایید نشد", " بستن ", " مشکلی در ثبت نام پیش آمد ")
            }
            setIsLoading(false)
        }
    }

    return (
        <div>
            <form className="mt-8 space-y-10" onSubmit={handleSubmit(handleRegister)}>
                <div className="flex md:flex-row flex-col gap-4">
                    <div className="md:w-1/2 w-full flex gap-1 flex-col text-card-foreground">
                        <Label htmlFor="password" className={`text-[13px] flex gap-0.5`}>
                            <span> رمز عبور </span>
                            <p className='text-danger'> * </p>
                            <span> : </span>
                        </Label>
                        <Input
                            id="password"
                            type="text"
                            className="bg-transparent placeholder:text-card-foreground text-sm outline-none w-full py-3 border border-card-foreground text-card-foreground px-4 rounded-[16px] text-[16px]"
                            placeholder="لطفا رمز عبور خود را وارد کنید"
                            {...register("password")}
                        />
                        {errors.password && <p className='text-danger text-sm font-semibold'>{errors.password.message} </p>}
                    </div>
                    <div className="md:w-1/2 w-full flex gap-1 flex-col text-card-foreground">
                        <Label htmlFor="phoneNumber" className={`text-[13px] flex gap-0.5`}>
                            <span> شماره تلفن </span>
                            <p className='text-danger'> * </p>
                            <span> : </span>
                        </Label>
                        <Input
                            id="phoneNumber"
                            type="text"
                            className="bg-transparent placeholder:text-card-foreground text-sm outline-none w-full py-3 border border-card-foreground text-card-foreground px-4 rounded-[16px] text-[16px]"
                            placeholder="لطفا شماره تلفن خود را وارد کنید"
                            {...register("phoneNumber")}
                        />
                        {errors.phoneNumber && <p className='text-danger text-sm font-semibold'>{errors.phoneNumber.message} </p>}
                    </div>
                </div>

                <div>
                    <CommonButton type="submit" title={isLoading ? "در حال تایید..." : "ساخت حساب کاربری"}
                        icon={isLoading ? <Loader /> : <ChevronLeft size={16} />} classname="w-full text-primary-foreground" />
                </div>
            </form>
        </div>
    )
}

export default CompleteRegisterForm
