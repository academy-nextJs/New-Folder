'use client'
import authBanner from "../../assets/authBanner.png";
import score from "@/assets/score.png"
import Image from "next/image";
import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next";

const AuthContainer = ({ children }: { children: React.ReactNode; }) => {
  const {t , i18n} = useTranslation("auth")
  return (
    <div dir={i18n.dir()} className="flex gap-16 text-card-foreground h-fit lg:pr-8 px-8 mt-[100px] items-center">
      <div className="lg:w-1/2 w-full">
        {children}
      </div>
      <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="w-1/2 h-4/5 relative lg:flex justify-center hidden">
        <Image src={authBanner} width={200} height={40} className="w-full" alt="none" />
        <div className="w-10/12 mx-[20px] h-[97] px-4 py-2 bg-[#363636C7] backdrop-blur-[8] border-[#686868] text-white absolute bottom-14 flex justify-between items-center rounded-[32px]">

          <div className="flex flex-col gap-4">
            <h2 className="text-[20px]"> {t("container.moreAbout")} </h2>
            <span> {t("container.about")} </span>
          </div>
          <Image src={score} width={170.02197265625} height={166.09234619140625} alt="none" className="absolute xl:block hidden bottom-0 left-0" />
        </div>
      </motion.div>
    </div>
  );
};

export default AuthContainer;
