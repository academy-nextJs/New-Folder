import AboutUs from "@/components/Landing/aboutUs";
import { fetchApi } from "../../core/interceptore/fetchApi";
import CommentUsers from "@/components/Landing/CommentUsers";
import SpecialOffer from "@/components/Landing/SpecialOffer";
import DivBlur from "@/components/common/blurFilter/DivBlur";
import DestinationOfDreams from "@/components/Landing/DestinationOfDreams";
import RealStateTraveling from "@/components/Landing/RealStateTraveling";
import NewPlaces from "@/components/Landing/NewPlaces";
import Categories from "@/components/Landing/categories/Categories";

export default async function Home() {
  const res = await fetchApi.get("/houses");

  console.log(res);
  return (
    <div className="w-full flex flex-col gap-16 mt-[100px]">
      {/* <HeroSection /> */}

      <div className="relative mt-36">
        <Categories />
      </div>
      <div className="relative px-8">
        <DivBlur className="bg-blur-blue right-[-150px]" />
        <SpecialOffer />
      </div>
      <div className="relative">
        <DivBlur className="bg-blur-primary left-[-150px] top-[150px]" />
        <DestinationOfDreams />
      </div>
      <div className="relative">
        <DivBlur className="bg-blur-primary left-[-150px] bottom-0" />
        <DivBlur className="bg-blur-blue right-[-150px]" />
        <AboutUs />
      </div>
      <div className="relative bg-secondary-light flex flex-col gap-32 py-[40px] rounded-[64px] px-8">
        <DivBlur className="bg-blur-blue right-[-150px] bottom-[500px]" />
        <RealStateTraveling />
        <NewPlaces />
      </div>
      <div className="relative">
        <CommentUsers />
      </div>
    </div>
  );
}
