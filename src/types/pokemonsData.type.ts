export type PokemonsData = {
  name: string,
  number: number,
  image: string,
  types: {
    name: string,
    classname: string
  }[]
}