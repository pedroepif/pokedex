"use server";
import { AbilityDetail } from "@/types/abilityDetails.type";
import { PokemonDetails } from "@/types/pokemonDetails.type";

export async function detailedPokemons(pokemon: string) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const details: PokemonDetails = await (await fetch(url)).json();
    const abilities = await Promise.all(details.abilities.map(async ability => {
      const info: AbilityDetail = await (await fetch(ability.ability.url)).json();
      return info.effect_entries.filter(item => item.language.name === "en");
    }));
    return {
      pokemon: details,
      abilities: abilities.flat()
    };
  } catch (error) {
    return null;
  }
}