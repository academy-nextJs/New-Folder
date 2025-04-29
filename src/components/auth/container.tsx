import authBanner from "../../assets/auth banner.svg";
import Image from "next/image";

const AuthContainer = ({children}:{children: React.ReactNode;}) => {
  return (
    <div className="flex gap-16 text-white h-fit mt-10 px-8 my-[100px]">
      <div className="w-1/2">
        {children}
      </div>
      <div className="w-1/2">
        <Image src={authBanner} alt="none" />
      </div>
    </div>
  );
};

export default AuthContainer;
