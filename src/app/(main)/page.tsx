import {fetchApi} from "../../core/interceptore/fetchApi"


export default async function Home() {
  const res = await fetchApi.get('/houses')

  console.log(res)
  return (
    <div></div>
  );
}
