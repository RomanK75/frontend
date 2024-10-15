const getImageUrl = (name: string) => {
  return import.meta.env.PROD ? `./assets/${name}` : `./src/assets/${name}`
}

export default getImageUrl