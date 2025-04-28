import AboutUs from "@/components/Landing/aboutUs";
import { fetchApi } from "../../core/interceptore/fetchApi";
import CommentUsers from "@/components/Landing/CommentUsers";
import SpecialOffer from "@/components/Landing/SpecialOffer";
import DivBlur from "@/components/common/blurFilter/DivBlur";
import HeroSection from "@/components/Landing/hero-section/HeroSection";

export default async function Home() {
  const res = await fetchApi.get("/houses");

  console.log(res);
  return (
    <div className="w-full flex flex-col gap-16 my-[-160px] overflow-x-hidden">
      <HeroSection />

      <div className="relative">
        <DivBlur className="bg-blur-blue right-[-150px]" />
        <SpecialOffer />
      </div>
      <div className="relative">
        <DivBlur className="bg-blur-primary left-[-150px]" />
        <AboutUs />
      </div>
      <div className="relative">
        <CommentUsers />
      </div>
    </div>
  );
}
