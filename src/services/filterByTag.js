export const filterByTag = (tag, data) => {
  return data.filter(element => Object.keys(element).includes(tag))
}