import { z } from 'zod';

export const schemaRegisterValidation = z.object({
    email: z.string({ required_error: ' لطفا ایمیل خود را وارد کنید ' }).email({ message: 'ایمیل نادرست است' }).min(1, ' لطفا ایمیل خود را وارد کنید '),
    password: z.string({ required_error: ' لطفا رمز عبور خود را وارد کنید ' }).min(1, ' لطفا رمز عبور خود را وارد کنید '),
    firstName: z.string({ required_error: ' لطفا نام خود را وارد کنید ' }).min(1, ' لطفا نام خود را وارد کنید '),
    lastName: z.string({ required_error: ' لطفا نام خانوادگی خود را وارد کنید ' }).min(1, ' لطفا نام خانوادگی خود را وارد کنید '),
});
