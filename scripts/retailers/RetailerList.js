import { useRetailers } from './retailerProvider.js'
import { Retailer } from './Retailer.js'
import { useDistributors } from '../distributors/distributorProvider.js'

const contentTarget = document.querySelector('.retailerContainer')

export const RetailerList = () => {
  const retailers = useRetailers()
  const distributors = useDistributors()

  const render = () => {
    contentTarget.innerHTML = `
    <section class="retailers">
      ${retailers
        .map((retailer) => {
          let relatedDistributor = distributors.find((distributor) => {
            return distributor.id === retailer.distributorId
          })

          return Retailer(retailer, relatedDistributor)
        })
        .join('')}
    </section>
    `
  }
  render()
}
