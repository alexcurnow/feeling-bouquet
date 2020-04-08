export const Flower = (flower) => {
  return `
    <fieldset style="margin:10px">
    <h3><b>Flower Name: </b>${flower.commonName}</h3>
    <h4><b>Color: </b>${flower.color}</h4>
    </fieldset>
  `
}
