export const Retailer = (retailer, distributor) => {
  return `
  <fieldset style="margin:10px">
  <h3><b>Business Name: </b>${retailer.businessName}</h3>
  <ul style="list-style:none">
    <li><b>City: </b>${retailer.city}</li>
    <li><b>State: </b>${retailer.state}</li>
    <li><b>Address: </b>${retailer.address}</li>
    <li><b>Distributor: </b>${distributor.businessName}</li>
  </ul>
  
  </fieldset>
  `
}
