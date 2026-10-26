
function calculateTotal(price, quantity) {
  return price * quantity;
}

function calculateDiscount(total, discountPercent) {
  return total * discountPercent / 100;
}

const price = Number(prompt("Enter product price:"));
const quantity = Number(prompt("Enter quantity:"));
const discountPercent = Number(prompt("Enter discount percentage:"));

if (
  !Number.isFinite(price) ||
  !Number.isFinite(quantity) ||
  !Number.isFinite(discountPercent) ||
  price < 0 ||
  quantity < 0 ||
  discountPercent < 0 ||
  discountPercent > 100
) {
  console.log("Please enter valid values.");
} else {
  const total = calculateTotal(price, quantity);
  const discount = calculateDiscount(total, discountPercent);
  const finalAmount = total - discount;

  console.log("Total before discount:", total.toFixed(2));
  console.log("Discount:", discount.toFixed(2));
  console.log("Final amount:", finalAmount.toFixed(2));
}

function demonstrateScope() {
  let message = "This variable is inside the function.";
  console.log(message);
}

demonstrateScope();
