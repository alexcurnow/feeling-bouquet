import { getFlowers } from './flowers/flowerProvider.js'
import { FlowerList } from './flowers/FlowerList.js'
import { getRetailers } from './retailers/retailerProvider.js'
import { RetailerList } from './retailers/RetailerList.js'

getFlowers().then(FlowerList)
getRetailers().then(RetailerList)
