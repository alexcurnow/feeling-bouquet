import { getFlowers } from './flowers/flowerProvider.js'
import { FlowerList } from './flowers/FlowerList.js'
import { getRetailers } from './retailers/retailerProvider.js'
import { RetailerList } from './retailers/RetailerList.js'
import { getDistributors } from './distributors/distributorProvider.js'
import { getNurseries } from './nurseries/nurseryProvider.js'
import { getDistributorNurseryRelations } from './nurseries/distributorNurseryProvider.js'
import { getFlowerNurseryRelations } from './nurseries/flowerNurseryProvider.js'

getFlowers()
  .then(FlowerList)
  .then(getRetailers)
  .then(getDistributors)
  .then(getNurseries)
  .then(getDistributorNurseryRelations)
  .then(getFlowerNurseryRelations)
  .then(RetailerList)
