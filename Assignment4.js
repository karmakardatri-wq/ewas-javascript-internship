
const number = Number(prompt("Enter a positive integer:"));

if (!Number.isInteger(number) || number < 1) {
  console.log("Please enter a positive integer.");
} else {
  console.log("For loop:");

  for (let i = 1; i <= number; i++) {
    console.log(i);
  }

  console.log("While loop:");

  let count = 1;
  while (count <= number) {
    console.log(count);
    count++;
  }

  console.log("Multiplication table:");

  for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + number * i);
  }
}
