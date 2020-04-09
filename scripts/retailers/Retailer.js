export const Retailer = (
  retailer,
  distributor,
  distNurseryRelArray,
  relatedFlowersArr
) => {
  return `
  <fieldset style="margin:10px">
  <h3><b>Business Name: </b>${retailer.businessName}</h3>
  <ul style="list-style:none">
    <li><b>City: </b>${retailer.city}</li>
    <li><b>State: </b>${retailer.state}</li>
    <li><b>Address: </b>${retailer.address}</li>
    <li><b>Distributor: </b>${distributor.businessName}</li>
    <ul>
    <li style="list-style:none"><b>Sources from the following nurseries:</b></li>
      ${distNurseryRelArray.map((rel) => `<li>${rel.name}</li>`).join('')}
    </ul>
    <li><b>Available flowers for purchase:</b></li>
      <ul>
        ${relatedFlowersArr
          .map(
            (flower) => `
          <li><b>Name:</b> ${flower.commonName} <b>Color:</b> ${flower.color}</li>

          `
          )
          .join('')}
      </ul>
  </ul>
  
  </fieldset>
  `
}
