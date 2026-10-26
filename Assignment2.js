
const billAmount = Number(prompt("Enter the bill amount:"));
const tipPercent = Number(prompt("Enter tip percentage:"));

if (
  Number.isNaN(billAmount) ||
  Number.isNaN(tipPercent) ||
  billAmount < 0 ||
  tipPercent < 0
) {
  console.log("Please enter valid non-negative numbers.");
} else {
  const tipAmount = billAmount * tipPercent / 100;
  const totalBill = billAmount + tipAmount;

  console.log("Bill Amount:", billAmount);
  console.log("Tip Amount:", tipAmount.toFixed(2));
  console.log("Total Bill:", totalBill.toFixed(2));
}
