let distributorNurseryRelations = []

export const getDistributorNurseryRelations = () =>
  fetch('http://localhost:8088/distributorNursery')
    .then((res) => res.json())
    .then((parsedRelations) => (distributorNurseryRelations = parsedRelations))

export const useDistributorNurseryRelations = () =>
  distributorNurseryRelations.slice()
