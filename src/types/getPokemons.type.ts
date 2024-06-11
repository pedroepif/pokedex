export type GetPokemons = {
  count: number,
  next: string,
  previous: string,
  results: {
    name: string,
    url: string
  }[]
}