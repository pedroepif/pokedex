export default function PokemonType ({name, classname}:{name:string, classname:string}) {
  return (
    <p className={`flex items-center justify-center text-center text-sm font-medium py-0 px-4 rounded-md capitalize ${classname}`}>{name}</p>
  );
}