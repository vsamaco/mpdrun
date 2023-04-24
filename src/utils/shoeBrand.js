export const SHOE_BRANDS = [
  'Adidas',
  'Asics',
  'Brooks',
  'Hoka',
  'New Balance',
  'Nike',
  'Mizuno',
  'Puma',
  'Reebok',
  'Saucony'
]

const extractShoeBrand = (shoeName) => {
  for(const brand of SHOE_BRANDS) {
    if (shoeName.toLowerCase().includes(brand.toLowerCase())) {
      return brand;
    }
  }
  return '';
}

const removeShoeBrand = (shoeName, brand) => {
  if (!brand) return shoeName;

  const brandRegex = new RegExp(brand, "i");
  return shoeName.replace(brandRegex, '').trim();
}

export const parseShoeBrandModel = (shoeName) => {
  const brand = extractShoeBrand(shoeName);
  const model = brand ? removeShoeBrand(shoeName, brand) : shoeName;
  
  return {brand, model}
}