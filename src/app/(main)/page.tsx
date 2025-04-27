import AboutUs from "@/components/Landing/aboutUs";
import { fetchApi } from "../../core/interceptore/fetchApi";
export default async function Home() {
  const res = await fetchApi.get("/houses");

  console.log(res);
  return (

    <div className="w-full flex flex-col gap-16 my-[100px]">
      <div className="relative">
        <div className="w-[218] h-[218] bg-[#8CFF4552] blur-[256px] absolute left-[-150px]"> </div>    
        <AboutUs />
      </div>
    </div>
  );
}
