// Question1:Simple function
function greet(name) {
  return "Hello, " + name + "!";
}
console.log("Question 1:");
console.log(greet("Sarah"));
console.log("\n");

// 2. Array Basics
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
const numbers = [1, 2, 3, 4, 5];
console.log("Question 2:");
console.log(sumArray(numbers)); // Outputs: 15
console.log("\n");

// 3. Object Creation
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2024,
};

function getCarInfo(car) {
  return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`;
}
console.log("Question 3:");
console.log(getCarInfo(car));
console.log("\n");

// 4. Loop through Array
function printArray(arr) {
  arr.forEach((element) => console.log(element));
}
console.log("Question4:");
printArray(numbers);
console.log("\n");

// 5. Conditional Statements
function checkNumber(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log("Question5:");
console.log(checkNumber(10));
console.log(checkNumber(3));
console.log("\n");

// 6. Array of Objects
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
];

function getBookInfo(book) {
  return `${book.title} by ${book.author} (${book.year})`;
}
console.log("Question6:");
books.forEach((book) => console.log(getBookInfo(book)));
console.log("\n");

//7 Loop with Condition
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Question7:");
console.log(filterEvenNumbers(Numbers));
console.log("\n");

//8 Modify Object Property
function celebrateBirthday(person) {
  person.age += 1;
  console.log(`${person.name} is now ${person.age} years old.`);
}
console.log("Question 8:");
celebrateBirthday({ name: "John", age: 30 });
console.log("\n");

//9 Array Manipulation
function removeFirstAndLast(arr) {
  const result = arr.slice(1, -1);
  console.log("Modified array:", result);
  return result;
}
console.log("Question 9:");
removeFirstAndLast([1, 2, 3, 4, 5]);
console.log("\n");

//10 Function inside Object
const person = {
  name: "John",
  age: 30,
  introduce: function () {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old!`);
  },
};
console.log("Question 10:");
person.introduce();
console.log("\n");

//11 Nested Loops
function multiplyTable(n) {
  console.log(`Multiplication table for ${n}:`);
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += i * j + "\t";
    }
    console.log(row);
  }
}
console.log("Question 11:");
multiplyTable(5);
console.log("\n");

//12 Combining Arrays and Loops
function mergeArrays(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  console.log("Merged array:", merged);
  return merged;
}
console.log("Question 12:");
mergeArrays([1, 2], [3, 4]);
console.log("\n");

//13 Searching in an Array
function findStudentByName(students, name) {
  const student = students.find((student) => student.name === name) || null;
  console.log(`Student found:`, student);
  return student;
}
console.log("Question 13:");
findStudentByName([{ name: "Alice" }, { name: "Bob" }], "Bob");
console.log("\n");

//14 Conditional with Objects
function checkPassing(students) {
  const passingStudents = students.filter((student) => student.grade >= 50);
  console.log("Passing students:", passingStudents);
  return passingStudents;
}
console.log("Question 14:");
checkPassing([{ name: "Alice", grade: 60 }, { name: "Bob", grade: 40 }]);
console.log("\n");

//15 Object with Array Property
const myCar = {
  make: "Toyota",
  model: "Corolla",
  features: ["air conditioning", "navigation"],
};

function printCarFeatures(car) {
  console.log(`Features of the ${car.make} ${car.model}:`);
  car.features.forEach((feature) => console.log(feature));
}
console.log("Question 15:");
printCarFeatures(myCar);
console.log("\n");

//16 Array of Functions
const mathOperations = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a / b,
];
console.log("Question 16:");

function executeOperations(arr, a, b) {
  arr.forEach((operation, index) => {
    console.log(`Operation ${index + 1}: ${operation(a, b)}`);
  });
}
executeOperations(mathOperations, 10, 5);
console.log("\n");

//17 Filter Array using a callback
function filterArray(arr, callback) {
  const filteredArr = arr.filter(callback);
  console.log("Filtered array:", filteredArr);
  return filteredArr;
}
console.log("Question 17:");
filterArray([1, 2, 3, 4, 5], (x) => x > 2);
console.log("\n");

//18 Update Grades
function updateGrades(students, bonus) {
  students.forEach((student) => {
    student.grade = Math.min(100, student.grade + bonus);
    console.log(`${student.name}'s updated grade: ${student.grade}`);
  });
}
console.log("Question 18:");
updateGrades([{ name: "Alice", grade: 45 }, { name: "Bob", grade: 70 }], 10);
console.log("\n");

//19 Factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log("Question 19:");
console.log("Factorial of 5:", factorial(5));
console.log("\n");

//20 Promote Students
function promoteStudents(students) {
  students.forEach((student) => {
    student.grade = Math.min(100, student.grade * 1.1);
    console.log(`${student.name}'s promoted grade: ${student.grade}`);
  });
}
console.log("Question 20:");
promoteStudents([{ name: "Alice", grade: 60 }, { name: "Bob", grade: 90 }]);
console.log("\n");

//21 Sort Students by Grade
function sortStudentsByGrade(students) {
  const sortedStudents = students.sort((a, b) => b.grade - a.grade);
  console.log("Sorted students by grade:", sortedStudents);
  return sortedStudents;
}
console.log("Question 21:");
sortStudentsByGrade([{ name: "Alice", grade: 60 }, { name: "Bob", grade: 90 }]);
console.log("\n");

//22 Average Grade
function averageGrade(students) {
  const sum = students.reduce((acc, student) => acc + student.grade, 0);
  const avg = sum / students.length;
  console.log("Average grade:", avg);
  return avg;
}
console.log("Question 22:");
averageGrade([{ name: "Alice", grade: 60 }, { name: "Bob", grade: 90 }]);
console.log("\n");

//23 School Classrooms
const school = {
  classrooms: [
    { name: "Math", students: ["Alice", "Bob", "Charlie"] },
    { name: "Science", students: ["David", "Eve", "Frank"] },
  ],
};

function printClassrooms(school) {
  school.classrooms.forEach((classroom) => {
    console.log(`${classroom.name}: ${classroom.students.length} students`);
  });
}
console.log("Question 23:");
printClassrooms(school);
console.log("\n");

//24 Filter Passing Students in Class
function filterPassingStudentsInClass(school, className) {
  const classroom = school.classrooms.find((c) => c.name === className);

  if (!classroom) {
    console.log(`Class "${className}" not found.`);
    return;
  }

  const passingStudents = classroom.students
    .filter((student) => student.grade >= 50)
    .map((student) => student.name);

  console.log(`Passing students in "${className}":`, passingStudents);
}
console.log("Question 24:");
const classWithGrades = {
  classrooms: [
    {
      name: "Math",
      students: [{ name: "Alice", grade: 55 }, { name: "Bob", grade: 40 }],
    },
    {
      name: "Science",
      students: [{ name: "David", grade: 75 }, { name: "Eve", grade: 65 }],
    },
  ],
};
filterPassingStudentsInClass(classWithGrades, "Math");
filterPassingStudentsInClass(classWithGrades, "Science");
console.log("\n");


//25
class Gradebook {
  constructor() {
    this.students = [];
  }

  addStudent(name, grade) {
    this.students.push({ name, grade });
  }

  viewAllStudents() {
    return this.students;
  }

  searchStudent(name) {
    return this.students.find((student) => student.name === name) || null;
  }

  updateGrade(name, newGrade) {
    const student = this.searchStudent(name);
    if (student) {
      student.grade = newGrade;
      return true;
    }
    return false;
  }

  getPassingStudents() {
    return this.students.filter((student) => student.grade >= 50);
  }
}

const gradebook = new Gradebook();

gradebook.addStudent("Alice", 85);
gradebook.addStudent("Bob", 72);
gradebook.addStudent("Charlie", 45);
console.log("Question25:");
console.log(gradebook.viewAllStudents());
console.log(gradebook.searchStudent("Bob"));
console.log(gradebook.updateGrade("Charlie", 55));
console.log(gradebook.getPassingStudents());
