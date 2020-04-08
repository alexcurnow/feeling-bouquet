import { useRetailers } from './retailerProvider.js'
import { Retailer } from './Retailer.js'

const contentTarget = document.querySelector('.retailerContainer')

export const RetailerList = () => {
  const retailers = useRetailers()
  const render = () => {
    contentTarget.innerHTML = `
    <section class="retailers">
      ${retailers.map((retailer) => Retailer(retailer)).join('')}
    </section>
    `
  }
  render()
}
