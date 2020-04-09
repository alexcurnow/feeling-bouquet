let flowerNurseryRelations = []

export const getFlowerNurseryRelations = () =>
  fetch('http://localhost:8088/nurseryFlower')
    .then((res) => res.json())
    .then((parsedRelations) => (flowerNurseryRelations = parsedRelations))

export const useFlowerNurseryRelations = () => flowerNurseryRelations.slice()
