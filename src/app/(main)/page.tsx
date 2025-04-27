import AboutUs from "@/components/Landing/aboutUs";
import { fetchApi } from "../../core/interceptore/fetchApi";
import CommentUsers from "@/components/Landing/CommentUsers";
import SpecialOffer from "@/components/Landing/SpecialOffer";
import HeroSection from "@/components/Landing/hero-section/HeroSection";

export default async function Home() {
  const res = await fetchApi.get("/houses");

  console.log(res);
  return (
    <div className="w-full flex flex-col gap-16 my-[-81px] overflow-x-hidden">
      <HeroSection />

      <div className="relative">
        <div className="w-[218] h-[218] bg-[#7569FF52] blur-[256px] z-10 absolute right-[-150px]">
          {" "}
        </div>
        <SpecialOffer />
      </div>
      <div className="relative">
        <div className="w-[218] h-[218] bg-[#8CFF4552] blur-[256px] absolute left-[-150px]">
          {" "}
        </div>
        <AboutUs />
        <CommentUsers />
      </div>
    </div>
  );
}
