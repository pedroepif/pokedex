import DetailedPokemon from "@/components/details";
import NavBar from "@/components/navbar";
import { detailedPokemons } from "@/utils/detailedPokemon";
import { Suspense } from "react";

export default async function Pokemon({params}:{params:{pokemon:string}}) {
  const detailsPromise = detailedPokemons(params.pokemon);
  return (
    <>
      <main className="flex flex-col items-center px-12 pb-12 gap-8 min-h-screen">
        <NavBar />
        <section className="flex flex-col h-full flex-grow items-center justify-center w-full max-w-[1200px] bg-zinc-100 rounded-3xl shadow-lg p-4">
          <Suspense fallback={<div className="flex justify-center items-center font-semibold text-2xl">Loading...</div>}>
            <DetailedPokemonWrapper detailsPromise={detailsPromise} />
          </Suspense>
        </section>
      </main>
    </>
  );
}

async function DetailedPokemonWrapper({ detailsPromise }: { detailsPromise: Promise<any> }) {
  const details = await detailsPromise;
  return <DetailedPokemon details={details} />;
}