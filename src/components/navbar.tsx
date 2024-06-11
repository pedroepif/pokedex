"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function NavBar () {
  return (
    <nav className="flex items-center justify-center p-6 w-full max-w-[1200px] bg-zinc-100 rounded-t-[0] rounded-3xl shadow-lg">
      <motion.div initial="hidden" animate="visible" variants={{
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
      }}>
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt={"logo"} width={100} height={100} className="sm:w-80 w-56"/>
        </Link>
      </motion.div> 
    </nav>
  );
}