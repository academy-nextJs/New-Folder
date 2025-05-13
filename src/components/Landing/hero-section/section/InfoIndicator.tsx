import React from "react";
import Image from "next/image";
import Frame from "@/assets/images/heroSection/Frame.svg";

const InfoIndicator = () => {
  return (
    <div className="hidden sm:flex flex-cols text-right justify-center items-center align-center w-[25%] ">
      <div className=" text-foreground">
        <p className="md:text-xl sm:text-xs mb-1"> بیش از 7000+ </p>
        <p className="text-sm sm:text-xs">
          {" "}
          رضایت مشتریانی که به دلتا اعتماد کرده اند{" "}
        </p>
      </div>
      <Image
        src={Frame}
        className="relative lg:block md:hidden hidden  top-8"
        alt="Frame"
        width={45}
        height={46}
      />
    </div>
  );
};

export default InfoIndicator;
