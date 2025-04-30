import Image from "next/image";
import arrow from "../../assets/arrow.svg";
import { ChevronLeft } from 'lucide-react';
import Link from "next/link";

const AuthHeader = ({pageName} : {pageName : string}) => {
  return (
    <div>
        <div className="flex gap-3 text-xs">
            <Link href={'/'}>خانه</Link>
            <ChevronLeft size={16}/>
            <p className="text-primary ">{pageName}</p>
        </div>
      <div className="flex mt-5 gap-3 lg:text-base text-sm">
        <h3 className=" font-bold text-primary">خوش برگشتی !</h3>
        <Image src={arrow} alt="none" />
      </div>
      <h2 className="mt-5 lg:text-3xl text-xl">به خانواده دلتا ، خوش برگشتی !</h2>
      <h6 className="mt-5 lg:text-base text-sm">
        با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از پروژه هاتون
        خبر بگیرید !
      </h6>
    </div>
  );
};

export default AuthHeader;
