import { useFlowers } from './flowerProvider.js'
import { Flower } from './Flower.js'

const contentTarget = document.querySelector('.flowerContainer')

export const FlowerList = () => {
  const flowers = useFlowers()
  // convert array of flower objects into html string then
  // insert as the html for content target
  const render = () => {
    contentTarget.innerHTML = `
    <section class="flowers">
      ${flowers.map((flower) => Flower(flower)).join('')}
    </section>`
  }
  render()
}
