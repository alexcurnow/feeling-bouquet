export const Retailer = (retailer) => {
  return `
  <fieldset style="margin:10px">
  <h3><b>Business Name: </b>${retailer.businessName}</h3>
  <ul style="list-style:none">
    <li><b>City: </b>${retailer.city}</li>
    <li><b>State: </b>${retailer.state}</li>
    <li><b>Address: </b>${retailer.address}</li>
  </ul>
  
  </fieldset>
  `
}
