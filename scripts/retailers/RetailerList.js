import { useRetailers } from './retailerProvider.js'
import { Retailer } from './Retailer.js'
import { useDistributors } from '../distributors/distributorProvider.js'
import { useNurseries } from '../nurseries/nurseryProvider.js'
import { useFlowers } from '../flowers/flowerProvider.js'
import { useDistributorNurseryRelations } from '../nurseries/distributorNurseryProvider.js'
import { useFlowerNurseryRelations } from '../nurseries/flowerNurseryProvider.js'

const contentTarget = document.querySelector('.retailerContainer')

export const RetailerList = () => {
  const retailers = useRetailers()
  const distributors = useDistributors()
  const nurseries = useNurseries()
  const flowers = useFlowers()
  const distributorNurseryRelations = useDistributorNurseryRelations()
  const flowerNurseryRelations = useFlowerNurseryRelations()

  const render = () => {
    contentTarget.innerHTML = `
    <section class="retailers">
      ${retailers
        .map((retailer) => {
          let relatedDistributor = distributors.find((distributor) => {
            return distributor.id === retailer.distributorId
          })

          let associatedDistNurseryRelations = distributorNurseryRelations.filter(
            (rel) => rel.distributorId === relatedDistributor.id
          )

          let associatedNurseries = associatedDistNurseryRelations.map((r) => {
            return nurseries.find((nursery) => nursery.id === r.nurseryId)
          })

          let flowerNurseryArray = []

          associatedNurseries.forEach((nursery) => {
            let relationships = flowerNurseryRelations.filter(
              (rel) => rel.nurseryId === nursery.id
            )
            relationships.forEach((rel) => flowerNurseryArray.push(rel))
          })

          let associatedFlowers = flowerNurseryArray.map((rel) => {
            return flowers.find((flower) => flower.id === rel.flowerId)
          })

          return Retailer(
            retailer,
            relatedDistributor,
            associatedNurseries,
            associatedFlowers
          )
        })
        .join('')}
    </section>
    `
  }
  render()
}
