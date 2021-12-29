export const getValue = (obj) => {
  const finalArray = [];

  function percorrer(obj) {
    for (const key in obj) {
      if(!Object.keys(obj).includes('ticker')){
        percorrer(obj[key])
      } else {
        finalArray.push(obj)
        break
      }
    }
  }
  percorrer(obj)
  return finalArray;
}

