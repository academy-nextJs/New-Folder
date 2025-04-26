import {fetchApi} from "../../core/interceptore/fetchApi"


export default async function Home() {
  const res = await fetchApi.get('/houses')

  console.log(res)
  return (
    <div className="bg-danger text-primary font-bold w-full h-100">
      <h1>Hello</h1>
    </div>
  );
}
