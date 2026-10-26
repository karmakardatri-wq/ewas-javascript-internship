
const marks = Number(prompt("Enter your marks (0-100):"));

if (Number.isNaN(marks) || marks < 0 || marks > 100) {
  console.log("Please enter marks between 0 and 100.");
} else {
  if (marks >= 80) {
    console.log("Grade: A");
  } else if (marks >= 60) {
    console.log("Grade: B");
  } else if (marks >= 40) {
    console.log("Grade: C");
  } else {
    console.log("Grade: F");
  }

  const result = marks >= 40 ? "Pass" : "Fail";
  console.log("Result:", result);
}

const day = Number(prompt("Enter a day number (1-7):"));

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number.");
}
