import { data } from 'autoprefixer'
import Image from 'next/image'
import CatsButton from './components/CatsButton'

const getData = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  const data = await res.json()
  console.log(data)
  return data
}

export default async function Home() {
  const data = await getData()
  return (
    <main className="flex justify-center items-center h-screen">
      <Image src={data.sprites.front_default} width={100} height={100} alt="next logo" />
      <h1 className="text-3xl font-bold">
        {data.name}
      </h1>
      <br />
      <CatsButton />
    </main>
  )
}
