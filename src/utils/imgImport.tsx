const getImageUrl = (name: string) => {
  if (import.meta.env.DEV) {
    return new URL(`../assets/${name}`, import.meta.url).href
  }
  return `./assets/${name}`
}

export default getImageUrl