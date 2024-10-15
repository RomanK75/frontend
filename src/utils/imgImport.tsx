const images = import.meta.glob('@assets/*.png', { eager: true })

const getImageUrl = (name: string) => {
  const key = Object.keys(images).find(path => path.includes(name))
  return key ? (images[key] as { default: string }).default : ''
}

export default getImageUrl