
const grade1 = 90;
const grade2 = 85;
const grade3 = 88;

const grades = [grade1, grade2, grade3];

console.log("Grade Calculator");

const validGrades = grades.every(
  (grade) => grade >= 0 && grade <= 100
);

if (!validGrades) {
  console.log("Error: Grades must be between 0 and 100.");
} else {
  const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

  console.log("Grade 1:", grade1);
  console.log("Grade 2:", grade2);
  console.log("Grade 3:", grade3);
  console.log("Average Grade:", average.toFixed(2));

  let result;

  if (average >= 75) {
    result = "Passed";
  } else {
    result = "Failed";
  }

  console.log("Result:", result);
  console.log("Thank you for using the Grade Calculator!");
}
