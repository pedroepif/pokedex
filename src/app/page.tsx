import NavBar from "@/components/navbar";
import Pokemons from "@/components/pokemons";
import { getPokemons } from "@/utils/getPokemons";

export default async function Home() {
  const pokemons = await getPokemons();
  return (
    <main className="flex flex-col items-center px-12 pb-12 gap-8 min-h-screen">
      <NavBar />
        {pokemons && (
          <Pokemons pokemons={pokemons}/>
        )}
    </main>
  );
}