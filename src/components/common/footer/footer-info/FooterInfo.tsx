'use client'
import { Instagram, Linkedin, MessageCircle, TextCursor } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

const FooterInfo = () => {
    const { t, i18n } = useTranslation("footer")

    return (
        <div dir={i18n.dir()} className="dark:bg-secondary bg-secondary-static dark:text-foreground text-primary-foreground w-full py-12 lg:px-16 px-8 rounded-[56px]">
            <h2 className="text-2xl font-extrabold mb-4">{t("info.title")}</h2>
            <div className="grid lg:grid-cols-4 gap-8">
                <div>
                    <p className="text-sm leading-7">
                        {t("info.description")}
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">{t("info.booking.title")}</h3>
                    <ul className="text-sm space-y-4">
                        <li>{t("info.booking.guide")}</li>
                        <li>{t("info.booking.register")}</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">{t("info.customerService.title")}</h3>
                    <ul className="text-sm space-y-4">
                        <li>{t("info.customerService.guestFAQ")}</li>
                        <li>{t("info.customerService.hostFAQ")}</li>
                        <li>{t("info.customerService.howToRegister")}</li>
                        <li>{t("info.customerService.privacy")}</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">{t("info.contact.title")}</h3>
                    <ul className="text-sm space-y-4">
                        <li>{t("info.contact.phones")}</li>
                        <li>{t("info.contact.email")}</li>
                        <li>{t("info.contact.address")}</li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-700 pt-6 flex lg:flex-row-reverse flex-col lg:gap-0 gap-4 items-center justify-between">
                <div className="flex gap-4 flex-row-reverse text-xl">
                    <div className='border rounded-2xl p-1.5'>
                        <a href="#" aria-label="Whatsapp"> <MessageCircle className='size-[17px]' /></a>
                    </div>
                    <div className='border rounded-2xl p-1.5'>
                        <a href="#" aria-label="Telegram"> <TextCursor className='size-[17px]' /></a>
                    </div>
                    <div className='border rounded-2xl p-1.5'>
                        <a href="#" aria-label="Instagram"> <Instagram className='size-[17px]' /></a>
                    </div>
                    <div className='text-card bg-card-foreground rounded-2xl p-1.5'>
                        <a href="#" aria-label="LinkedIn"> <Linkedin className='size-[17px]' /></a>
                    </div>
                </div>
                <p className="text-base">{t("info.copyright")}</p>
            </div>
        </div>
    )
}

export default FooterInfo
