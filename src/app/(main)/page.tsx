import AboutUs from "@/components/Landing/aboutUs";
import { fetchApi } from "../../core/interceptore/fetchApi";

export default async function Home() {
  const res = await fetchApi.get("/houses");

  console.log(res);
  return (

    <div className=" text-primary font-bold w-full h-100">
      <AboutUs />
    </div>
  );
}
