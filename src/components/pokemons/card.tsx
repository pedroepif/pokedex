import Image from "next/image";
import { motion } from 'framer-motion';
import PokemonType from "./type";
import Link from "next/link";

export default function PokemonCard ({number, name, image, types}:{number:number, name:string, image:string, types:{name:string, classname:string}[]}) {
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
      className="flex flex-col items-center p-4"
    >
      <Link href={`/${name}`} className="hover:scale-105 transition-all max-w-64">
        <Image 
          src={image} 
          alt={name} 
          width={1200} 
          height={1200}
          className="bg-zinc-200 rounded-lg border border-zinc-300 shadow-sm w-full"
        />
        <p className="text-sm font-semibold text-zinc-400 mt-1">Nº {number.toString().padStart(5, "0")}</p>
        <p className="text-xl font-medium capitalize">{name}</p>
        <div className="flex flex-row gap-2">
          {types.map((type, index) => (
            <PokemonType key={index} name={type.name} classname={type.classname} />
          ))}
        </div>
        <p className="font-semibold mt-1 underline">More details</p>
      </Link>
    </motion.div>
  );
}