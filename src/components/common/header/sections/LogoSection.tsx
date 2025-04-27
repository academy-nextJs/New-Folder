import Link from "next/link";

const LogoSection = () => (
  <div className="bg-subBg2 w-[72px] lg:w-[92px] md:w-[72px] h-[80%] flex items-center justify-center rounded-[12px] lg:mr-[8px] md:mr-[4px]">
    <Link href="/" className="text-foreground font-bold text-lg">
      لوگو
    </Link>
  </div>
);

export default LogoSection;
