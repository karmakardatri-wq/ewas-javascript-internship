
const products = [
  { name: "Laptop", price: 45000, category: "Electronics" },
  { name: "Phone", price: 15000, category: "Electronics" },
  { name: "Book", price: 500, category: "Education" },
  { name: "Bag", price: 1200, category: "Accessories" }
];

console.log("All products:");

products.forEach(function(product) {
  console.log(product.name + " - Rs. " + product.price);
});

const expensiveProducts = products.filter(function(product) {
  return product.price > 1000;
});

console.log("Products costing more than Rs. 1000:");
console.log(expensiveProducts);

const productNames = products.map(function(product) {
  return product.name;
});

console.log("Product names:");
console.log(productNames);

const totalValue = products.reduce(function(total, product) {
  return total + product.price;
}, 0);

console.log("Total inventory value: Rs. " + totalValue);
