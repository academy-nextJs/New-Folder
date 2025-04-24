import Image from "next/image";
import arrow from "../../assets/arrow.svg";
import { ChevronLeft } from 'lucide-react';

const AuthHeader = ({pageName} : {pageName : string}) => {
  return (
    <div>
        <div className="flex gap-3">
            <p>خانه</p>
            <ChevronLeft/>
            <p className="text-[#8CFF45] ">{pageName}</p>
        </div>
      <div className="flex mt-5 gap-3">
        <h3 className="text-#8CFF45 font-bold text-[#8CFF45] ">خوش برگشتی !</h3>
        <Image src={arrow} className="text-#8CFF45 " alt="none" />
      </div>
      <h2 className="mt-5 text-3xl">به خانواده دلتا ، خوش برگشتی !</h2>
      <h6 className="mt-5 ">
        با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از پروژه هاتون
        خبر بگیرید !
      </h6>
    </div>
  );
};

export default AuthHeader;
