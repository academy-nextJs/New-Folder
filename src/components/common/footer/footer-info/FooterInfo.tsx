import { Instagram, Linkedin, MessageCircle, TextCursor } from 'lucide-react'
import React from 'react'

const FooterInfo = () => {
    return (
        <div className="dark:bg-secondary bg-secondary-static dark:text-foreground text-primary-foreground py-12 lg:px-16 px-8 rounded-[56px]">
            <h2 className="text-2xl font-extrabold mb-4">پلتفرم دلتـا</h2>
            <div className="grid lg:grid-cols-4 gap-8">
                <div>
                    <p className="text-sm leading-7">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">نحوه رزرو اقامتگاه</h3>
                    <ul className="text-sm space-y-4">
                        <li>راهنمای رزرو اقامتگاه</li>
                        <li>ثبت اقامتگاه</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">خدمات مشتریان</h3>
                    <ul className="text-sm space-y-4">
                        <li>پرسش های متداول مهمان</li>
                        <li>پرسش های متداول میزبان</li>
                        <li>چطور اقامتگاه ثبت کنم؟</li>
                        <li>حریم شخصی کاربران</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">راه ارتباطی دلتا</h3>
                    <ul className="text-sm space-y-4">
                        <li>09392198743 - 09385412312</li>
                        <li>Delta@gmail.com</li>
                        <li>گیلان، رشت، میدان آزادی، جنب چهار راه عظیمی‌زاده</li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-700 pt-6 flex lg:flex-row-reverse flex-col lg:gap-0 gap-4 items-center justify-between">
                <div className="flex gap-4 flex-row-reverse text-xl">
                    <div className='border rounded-2xl p-1.5'><a href="#" aria-label="Whatsapp"> <MessageCircle className='size-[17px]' /></a></div>
                    <div className='border rounded-2xl p-1.5'><a href="#" aria-label="Telegram"> <TextCursor className='size-[17px]' /></a></div>
                    <div className='border rounded-2xl p-1.5'><a href="#" aria-label="Whatsapp"> <Instagram className='size-[17px]' /></a></div>
                    <div className='text-card bg-card-foreground rounded-2xl p-1.5'><a href="#" aria-label="Whatsapp"> <Linkedin className='size-[17px]' /></a></div>
                </div>
                <p className="text-base">تمام حقوق مادی و معنوی این اثر برای دلتا محفوظ است.</p>
            </div>
        </div>
    )
}

export default FooterInfo
