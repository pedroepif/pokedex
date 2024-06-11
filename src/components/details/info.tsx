"use client";
import { motion } from 'framer-motion';

export function PokemonInfo () {
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

    </motion.div>
  );
}