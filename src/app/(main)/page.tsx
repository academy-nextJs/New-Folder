import AboutUs from "@/components/Landing/aboutUs";
import { fetchApi } from "../../core/interceptore/fetchApi";

export default async function Home() {
  const res = await fetchApi.get("/houses");

  console.log(res);
  return (
<<<<<<< HEAD
    <div>
      <AboutUs />
=======
    <div className="bg-danger text-primary font-bold w-full h-100">
      <h1>Hello</h1>
>>>>>>> 86b44e04a73ef0a36c9b8a2f61fcb5d2ba3b18d8
    </div>
  );
}
