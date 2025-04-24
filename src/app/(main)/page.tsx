import {api} from "../../core/interceptore/fetchApi"


export default async function Home() {
  const res = await api.get('/houses')

  console.log(res)
  return (
    <div></div>
  );
}
