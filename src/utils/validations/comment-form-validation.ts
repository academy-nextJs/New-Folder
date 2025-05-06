import { z } from 'zod';

export const schemaCommentFormValidation = z.object({
    name: z.string({ required_error: 'نام و نام خانوادگی الزامی است' })
        .min(1, 'نام و نام خانوادگی الزامی است'),
    email: z.string({ required_error: 'ایمیل الزامی است' })
        .min(1, 'ایمیل الزامی است').email('ایمیل نامعتبر است'),
    caption: z.string({ required_error: ' پیام الزامی است ' })
        .min(10, 'پیام شما باید حداقل ۱۰ کاراکتر باشد')
});
