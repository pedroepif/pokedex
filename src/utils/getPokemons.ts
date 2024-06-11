"use server";

import { GetPokemons } from "@/types/getPokemons.type";
import { PokemonDetails } from "@/types/pokemonDetails.type";
import { pokemonTypeColors } from "./typeColors";
import { PokemonsData } from "@/types/pokemonsData.type";

export async function getPokemons(offset?: number) {
  try {
    const url = offset ? `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20` : `https://pokeapi.co/api/v2/pokemon`;
    const results: GetPokemons = await (await fetch(url)).json();
    const pokemons: PokemonsData[] = await Promise.all(results.results.map(async pokemon => {
      const name = pokemon.name;
      const details: PokemonDetails = await (await fetch(pokemon.url)).json();
      return {
        name,
        number: details.id,
        image: details.sprites.other["official-artwork"].front_default,
        types: details.types.map(type => {
          return {
            name: type.type.name,
            classname: pokemonTypeColors[type.type.name] 
          }
        })
      }
    }));
    return pokemons;
  } catch (error) {
    console.log(error);
    return null;
  }
}