// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" }, // Product with price as string
  { product: 'mango', price: 6 }, // Product with price as number
  { product: 'potato', price: ' ' }, // Product with empty price
  { product: 'avocado', price: "8" }, // Product with price as string
  { product: 'coffee', price: 10 }, // Product with price as number
  { product: 'tea', price: '' }, // Product with empty price
];

// 1. ForEach Basics: Log each name and each province
console.log('Names:');
names.forEach(name => console.log(name)); // Log each name

console.log('Provinces:');
provinces.forEach(province => console.log(province)); // Log each province

console.log('Names with Matching Provinces:');
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`)); // Log name with its corresponding province

// 2. Uppercase Transformation: Create a new array of provinces in uppercase
const provincesUppercase = provinces.map(province => province.toUpperCase());
console.log('Uppercase Provinces:', provincesUppercase); // Log the new array of uppercase provinces

// 3. Name Lengths: Create a new array of name lengths
const nameLengths = names.map(name => name.length);
console.log('Name Lengths:', nameLengths); // Log lengths of each name

// 4. Sorting: Sort the provinces alphabetically
const sortedProvinces = [...provinces].sort(); // Use spread operator to avoid mutating the original array
console.log('Sorted Provinces:', sortedProvinces); // Log the sorted array of provinces

// 5. Filtering Cape: Remove provinces containing 'Cape' and log the count of remaining provinces
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log('Count of Provinces excluding "Cape":', nonCapeProvinces.length); // Log the count of remaining provinces

// 6. Finding 'S': Create a boolean array indicating if a name contains the letter 'S'
const containsS = names.map(name => name.toLowerCase().includes('s'));
console.log('Names containing "S":', containsS); // Log an array of booleans for each name

// 7. Creating Object Mapping: Map each name to its corresponding province
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index]; // Add each name as a key with its corresponding province as the value
  return acc; // Return the accumulator for the next iteration
}, {}); // Initialize with an empty object
console.log('Name to Province Mapping:', nameProvinceMap); // Log the mapping object

// ----------------------
// Advanced Exercises (Single `console.log` Execution)
// ----------------------

// 8. Log Products: Log each product name
console.log('Product Names:', products.map(product => product.product)); // Log an array of product names

// 9. Filter by Name Length: Filter out products with names longer than 5 characters
console.log('Products with names ≤ 5 characters:', products.filter(product => product.product.length <= 5)); // Log filtered products

// 10. Price Manipulation: Filter out products without prices, convert string prices to numbers, and calculate the total price
console.log('Total Price of Products with valid prices:', 
  products
    .filter(product => product.price !== '' && product.price !== ' ') // Remove products without valid prices
    .map(product => ({ ...product, price: Number(product.price) })) // Convert price to number
    .reduce((total, product) => total + product.price, 0) // Sum the prices
);

// 11. Concatenate Product Names: Concatenate all product names into a single string
console.log('Concatenated Product Names:', 
  products.reduce((acc, product) => acc + product.product + ' ', '').trim() // Concatenate product names with space
);

// 12. Find Extremes in Prices: Find the highest and lowest priced products
const priceExtremes = products
  .filter(product => product.price !== '' && product.price !== ' ') // Filter out products without valid prices
  .map(product => ({ ...product, price: Number(product.price) })) // Convert prices to numbers
  .reduce((extremes, product) => {
    if (product.price > extremes.highest.price) extremes.highest = product; // Update highest price product
    if (product.price < extremes.lowest.price) extremes.lowest = product; // Update lowest price product
    return extremes; // Return the extremes object for the next iteration
  }, { highest: { product: '', price: -Infinity }, lowest: { product: '', price: Infinity } }); // Initial high/low values

// Log the highest and lowest priced products with formatted output
console.log(`Highest: ${priceExtremes.highest.product} - Price: ${priceExtremes.highest.price}, ` +
            `Lowest: ${priceExtremes.lowest.product} - Price: ${priceExtremes.lowest.price}`);

// 13. Object Transformation: Recreate products object with keys 'name' and 'cost'
console.log('Recreated Products Object:', 
  products.map(({ product, price }) => ({ name: product, cost: price })) // Map to a new object structure
);


