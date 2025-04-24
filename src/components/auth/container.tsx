import authBanner from "../../assets/auth banner.svg";
import Image from "next/image";

const Container = ({children}:{children: React.ReactNode;}) => {
  return (
    <div className="flex  text-white mt-10">
      <div className="w-1/2">
        {children}
      </div>
      <div className="w-1/2">
        <Image src={authBanner} alt="none" />
      </div>
    </div>
  );
};

export default Container;
