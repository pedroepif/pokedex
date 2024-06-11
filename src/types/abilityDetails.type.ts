export type AbilityDetail = {
  effect_changes: [],
  effect_entries: {
    effect: string,
    language: {
      name: string,
      url: string
    },
    short_effect: string
  }[],
  flavor_text_entries: {
    flavor_text: string,
    language: {
      name: string,
      url: string
    },
    version_group: {
      name: string,
      url: string
    }
  }[]
}