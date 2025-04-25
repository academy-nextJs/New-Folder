import { setToken } from "@/core/cookie/serverAuth";
import {fetchApi} from "../../core/interceptore/fetchApi"


const LoginForm = () => {
  const handleLogin =  async (formData: FormData) => {
            "use server";
        
            try {
              const res = await fetchApi.post('/auth/login', {
                email: formData.get('email'),
                password: formData.get('password'),
              });
              console.log(res)

              if (res.accessToken) {
                setToken(res.accessToken);
              }
            } catch (error) {
                console.log(error)
            }
  };
  return (
    <div>
      <form className="mt-8 space-y-6" action={handleLogin}>
        <div className="rounded-md shadow-sm -space-y-px flex flex-wrap">
          <div className="w-1/2">
            <label htmlFor="email" className="sr-only">
              ایمیل
            </label>
            <input
              id="email"
              name="email"
              type="text"
              className="appearance-none bg-white rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="ایمیل"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="password" className="sr-only">
              رمز عبور
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="appearance-none bg-white rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="رمز عبور"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            ورود
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
