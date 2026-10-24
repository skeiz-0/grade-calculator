
const grade1 = 90;
const grade2 = 85;
const grade3 = 88;

const average = (grade1 + grade2 + grade3) / 3;

console.log("Grade Calculator");
console.log("Grade 1:", grade1);
console.log("Grade 2:", grade2);
console.log("Grade 3:", grade3);
console.log("Average Grade:", average.toFixed(2));

if (average >= 75) {
  console.log("Result: Passed");
} else {
  console.log("Result: Failed");
}
