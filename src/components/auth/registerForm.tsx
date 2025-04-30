import { ChevronLeft } from "lucide-react";
import { fetchApi } from "../../core/interceptore/fetchApi"
import CommonButton from "../common/buttons/common/CommonButton";
import PasswordInput from "../common/inputs/auth/PasswordInput";
import CommonInput from "../common/inputs/common/CommonInput";


const RegisterForm =  () => {
  const handleRegister = async (formData: FormData) => {
    "use server";

    try {
      const res = await fetchApi.post('/auth/register', {
        email: formData.get('email'),
        password: formData.get('password'),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
      });

      
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <form className="mt-8 space-y-10" action={handleRegister}>
        <div className="flex flex-col gap-4">
          <div className="w-full flex sm:flex-nowrap flex-wrap gap-4">
            <div className="sm:w-1/2 w-full">
              <CommonInput type="text" label=" ایمیل شما " mandatory={true} placeholder=" ایمیل را وارد کنید... " classname="placeholder:text-white text-sm w-full border-white" color="text-white" background="bg-transparent" id="email" name="email" />
            </div>
            <div className="sm:w-1/2 w-full">
              <label htmlFor="password" className="sr-only">
                رمز عبور
              </label>
              <PasswordInput label=" رمز عبور " placeholder=" رمز عبور را وارد کنید... " mandatory={true} id="password" name="password" color="text-white" background="bg-transparent" classname="text-sm w-full placeholder:text-white border-white" />
            </div>
          </div>
          <div className="w-full flex sm:flex-nowrap flex-wrap gap-4">
            <div className="sm:w-1/2 w-full">
              <CommonInput type="firstName" label=" نام " mandatory={true} placeholder=" نام را وارد کنید... " classname="w-full placeholder:text-white text-sm border-white" color="text-white" background="bg-transparent" id="firstName" name="firstName" />
            </div>
            <div className="sm:w-1/2 w-full">
              <CommonInput type="lastName" label=" نام خانوادگی " mandatory={true} placeholder=" نام خانوادگی را وارد کنید... " classname="text-sm placeholder:text-white w-full border-white" color="text-white" background="bg-transparent" id="lastName" name="lastName" />
            </div>
          </div>
        </div>



        <div>
          <CommonButton icon={<ChevronLeft size={16} />} title=" ساخت حساب کاربری " classname="w-full"  />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
