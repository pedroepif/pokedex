"use client";
import { useState } from "react";
import PokemonCard from "./card";
import { PokemonsData } from "@/types/pokemonsData.type";
import { getPokemons } from "@/utils/getPokemons";

export default function Pokemons ({pokemons}:{pokemons: PokemonsData[]}) {
  const [pokemonsValue, setPokemonsValue] = useState<PokemonsData[]>(pokemons);
  const [isLoading, setIsLoading] = useState(false);
  const loadMore = async () => {
    setIsLoading(true);
    const offset = pokemonsValue.length;
    const morePokemons = await getPokemons(offset);
    if (morePokemons) setPokemonsValue(prevPokemons => [...prevPokemons, ...morePokemons]);
    setIsLoading(false);
  }
  return (
    <section className="flex flex-col h-full flex-grow items-center justify-center w-full max-w-[1200px] bg-zinc-100 rounded-3xl shadow-lg p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {pokemonsValue.map((pokemon, index) => (
          <PokemonCard 
            key={index}
            number={pokemon.number} 
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
          />
        ))}
      </div>

      <div>
        <button onClick={loadMore} aria-disabled={isLoading} className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-xl shadow-sm hover:scale-105 transition-all">
          <p className="font-semibold">{isLoading ? "Loading" : "Load more"}</p>
        </button>
      </div>
    </section>
  );
}