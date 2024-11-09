// Initial arrays for the example:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// 1. Iterating Over Arrays to Log Elements
console.log('Names:');
names.forEach(name => console.log(name)); // Outputs each name in the 'names' array.

console.log('Provinces:');
provinces.forEach(province => console.log(province)); // Outputs each province in the 'provinces' array.

console.log('Names with Matching Provinces:');
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`)); // Outputs each name and its matching province based on index.

// 2. Transforming Array to Uppercase
const provincesUppercase = provinces.map(province => province.toUpperCase());
console.log('Uppercase Provinces:', provincesUppercase); // Converts each province to uppercase and logs the new array.

// 3. Mapping Name Lengths
const nameLengths = names.map(name => name.length);
console.log('Name Lengths:', nameLengths); // Logs an array containing the length of each name.

// 4. Sorting Array Alphabetically
const sortedProvinces = [...provinces].sort(); // Creates a sorted version of 'provinces' without altering the original.
console.log('Sorted Provinces:', sortedProvinces); // Logs the alphabetically sorted provinces.

// 5. Filtering Provinces by Name Content
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape')); // Filters out provinces with 'Cape' in the name.
console.log('Count of Provinces excluding "Cape":', nonCapeProvinces.length); // Logs the count of provinces without 'Cape'.

// 6. Checking for Letter 'S' in Names
const containsS = names.map(name => name.toLowerCase().includes('s')); // Checks if each name contains 's' and returns true/false.
console.log('Names containing "S":', containsS); // Logs an array of booleans representing each name's inclusion of 'S'.

// 7. Mapping Names to Provinces
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index]; // Maps each name to the province at the same index.
  return acc;
}, {}); // Initializes as an empty object.
console.log('Name to Province Mapping:', nameProvinceMap); // Logs an object mapping each name to a province.

// ----------------------
// Advanced Exercises (Single `console.log` Execution)
// ----------------------

console.log({
  // 8. Logging Each Product Name
  "Product Names": products.map(product => product.product), // Creates and logs an array of all product names.

  // 9. Filtering Products by Name Length
  "Products with names ≤ 5 characters": products.filter(product => product.product.length <= 5), // Filters products with names of 5 characters or less.

  // 10. Calculating Total Price with Valid Entries
  "Total Price of Products with valid prices": products
    .filter(product => product.price !== '' && product.price !== ' ') // Excludes products with empty or whitespace prices.
    .map(product => ({ ...product, price: Number(product.price) })) // Converts string prices to numbers.
    .reduce((total, product) => total + product.price, 0), // Sums up all valid prices and logs the total.

  // 11. Concatenating Product Names into a Single String
  "Concatenated Product Names": products.reduce((acc, product) => acc + product.product + ' ', '').trim(), // Concatenates all product names with spaces, trims any extra space at the end.

  // 12. Finding Products with Extreme Prices
  "Price Extremes": (() => {
    const extremes = products
      .filter(product => product.price !== '' && product.price !== ' ') // Excludes products without prices.
      .map(product => ({ ...product, price: Number(product.price) })) // Converts prices to numbers.
      .reduce((extremes, product) => {
        if (product.price > extremes.highest.price) extremes.highest = product; // Updates highest price.
        if (product.price < extremes.lowest.price) extremes.lowest = product; // Updates lowest price.
        return extremes;
      }, { highest: { product: '', price: -Infinity }, lowest: { product: '', price: Infinity } }); // Initializes extremes.
    return {
      "Highest": `${extremes.highest.product} - Price: ${extremes.highest.price}`, // Logs highest price product.
      "Lowest": `${extremes.lowest.product} - Price: ${extremes.lowest.price}` // Logs lowest price product.
    };
  })(), 

  // 13. Reformatting Product Objects
  "Recreated Products Object": products.map(({ product, price }) => ({ name: product, cost: price })) // Maps products to a new format with 'name' and 'cost' keys.
});
