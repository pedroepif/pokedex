"use client";
import { PokemonDetails } from "@/types/pokemonDetails.type";
import Image from "next/image";
import PokemonType from "../pokemons/type";
import { pokemonTypeColors } from "@/utils/typeColors";
import { motion } from 'framer-motion';
import Link from "next/link";

export default function DetailedPokemon ({details}:{details:{pokemon: PokemonDetails, abilities: {effect: string, language: {name: string, url: string}, short_effect: string}[]}}) {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .1
          }
        },
      }} 
      className="flex flex-col items-center gap-8 max-w-[800px]"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center text-center">
          <p className="font-semibold text-zinc-400 mt-1">Nº {details.pokemon.id.toString().padStart(5, "0")}</p>
          <h1 className="text-3xl font-semibold capitalize">{details.pokemon.name}</h1>
        </div>
        
        <div className="flex items-center sm:flex-row flex-col gap-4">
          <div className="flex sm:w-[50%] w-full">
            <Image 
              src={details.pokemon.sprites.other["official-artwork"].front_default} 
              alt={details.pokemon.name} 
              width={1200} 
              height={1200}
              className="bg-zinc-200 rounded-lg border border-zinc-300 shadow-sm object-contain"
            />
          </div>
          
          <div className="flex flex-col gap-3 sm:w-[50%] w-full">
            <div className="flex flex-row gap-2 w-full">
              {details.pokemon.types.map((type, index) => (
                <PokemonType key={index} name={type.type.name} classname={`${pokemonTypeColors[type.type.name]} text-lg`} />
              ))}
            </div>
            <div className="flex flex-row gap-8">
              <p className="text-lg font-semibold">Height: {details.pokemon.height}</p>
              <p className="text-lg font-semibold">Weight: {details.pokemon.weight}</p>
            </div>
            
            <div className="flex flex-col gap-2 p-4 bg-gradient-to-tr from-black/80 to-black/60 text-white rounded-xl">
              <p className="text-lg text-center font-semibold">Stats</p>
              <div className="grid grid-cols-2 gap-6 items-center">
                {details.pokemon.stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <p className="text-lg font-semibold">{stat.base_stat}</p>
                    <p className="text-sm capitalize font-medium">{stat.stat.name.split("-").join(" ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="text-3xl font-semibold capitalize">Abilities</p>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 items-center">
          {details.pokemon.abilities.map((abilitie, index) => (
            <div key={index} className="flex flex-col items-center text-center py-6 px-4 gap-2 rounded-xl shadow-sm bg-gradient-to-tr from-blue-800 to-blue-500 text-white">
              <p className="text-xl font-semibold capitalize">{abilitie.ability.name}</p>
              <p>{details.abilities[index].effect}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Link href={"/"} className="flex px-4 py-2 rounded-xl shadow-md hover:scale-105 transition-all bg-orange-600 hover:bg-orange-500 text-white">
          <p className="font-semibold">See more Pokemons</p>
        </Link>
      </div>
    </motion.div>
  );
}