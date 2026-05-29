///Conditional Statements:

//1.selection (or) Decision making statements:
//if statements
let age = 18;
if (age >= 18) {
  console.log("you are eligible for vote.");
}

//if-else statements
let marks = 45;
if (marks >= 50) {
  console.log("you are eligible for next grade.");
} else {
  console.log("you are not eligible for next grade.");
}

//else-if ladder
let marks2 = 80;
if (marks2 >= 90) {
  console.log("Grade A");
} else if (marks2 >= 80) {
  console.log("Grade B");
} else if (marks2 >= 70) {
  console.log("Grade C");
} else if (marks2 > 60) {
  console.log("Grade D");
} else {
  console.log("Fail.");
}

//nested-if statement
let age1 = 20;
let license = true;
if ((age1) => 18) {
  if (license) {
    console.log("you can drive.");
  }
}

//switch statements
let day = 2;
switch (day) {
  case 1:
    console.log("Monday.");
    break;
  case 2:
    console.log("Tuesday.");
    break;
  case 3:
    console.log("Wednesday.");
    break;
  case 4:
    console.log("Thursday.");
    break;
  case 5:
    console.log("Friday.");
    break;
  case 6:
    console.log("Saturday.");
    break;
  case 7:
    console.log("Sunday.");
    break;
}

let age3 = prompt("What is your age?");
if (age3 < 18) {
  alert("yor are a minor.");
} else if (age3 >= 18) {
  alert("You are an adult.");
} else {
  alert("You are an Senior.");
}

//2.loop concept - to repeat more times and reduce repetation of code and save Time.
// These are of 5 types
//1.for loop
//2.while loop
//3.do while loop
//4.for in loop
//5.for of loop
for (let i = 1; i <= 2; i++) {
  console.log("Hello!");
}

//for loop
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + "=" + 5 * i);
}

//patterns in for loop
for (let i = 1; i <= 5; i++) {
  let pattern = "*";
  for (let j = 1; j <= i - 1; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

//while loop
let i = 2;
while (i <= 10) {
  console.log(i);
  i += 2;
}

//do while loop
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 10);

//nested loop
for (let i = 1; i <= 4; i++) {
  let pattern = "";
  for (let j = 1; j <= i - 1; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

//for of and for in loops
////for of
///using array
let fruits = ["apple", "banana", "watermelon"];
for (let fruit of fruits) {
  console.log(fruit);
}

///using string
let name = "Nityasri";
for (let char of name) {
  console.log(char);
}

///for in loop - indexes/keys of objects or arrays
//keys
let student = {
  name: "Nityasri",
  age: 22,
  city: "Tadepalligudem",
};
for (let key in student) {
  console.log(key + ":" + student[key]);
}
//index
let colors = ["red", "pink", "black"];
for (let index in colors) {
  console.log(index + ":" + colors[index]);
}

//functions
///normal function
function greet(name) {
  console.log("Welcome to the world of programming." + name);
}
greet("nitya");
//adding 2 num in function
function add(a, b) {
  console.log(a + b);
}
add(10, 20);
// checking function
function check(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("odd");
  }
}
check(11);
// reverse string in functions
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("Nityasri"));
console.log(reverse("Javascript"));

//arrow function-shortest syntax to reduce code

//Arrays - a variable that is used to store multiple values (or) data type under a single variable name.
let fruit = ["apple", "banana", "cherry"];
for (
  let i = 0;
  i < fruit.length;
  i++ //in fruit.length we can also write value as 3
) {
  console.log(fruit[i]);
}

let arr = [10, 20, 30, 40, 50];
let sum = 0;
for (
  let i = 0;
  i < arr.length;
  i++ //in arr.length place we can also withe the value as 4
) {
  sum += arr[i];
}
console.log(sum);

let n = []; //n=number
let s = 0; //s=sum
n[0] = Number(prompt("Enter your First Number :"));
n[1] = Number(prompt("Enter your Second Number :"));
n[2] = Number(prompt("Enter your Third Number :"));
n[3] = Number(prompt("Enter your Fourth Number :"));
n[4] = Number(prompt("Enter your Fifth Number :"));

for (let i = 0; i < n.length; i++) {
  s += n[i];
}
console.log(`sum of the number is : ${s}`);
alert(`Sum of the number is: ${s}`); //use ` this insted of ""

//matrix
let A = [
  [20, 30],
  [30, 40],
];
let B = [
  [50, 60],
  [60, 70],
];
let result = [];
for (let i = 0; i < A.length; i++) {
  result[i] = [];
  for (let j = 0; j < A[i].length; j++) {
    result[i][j] = A[i][j] * B[i][j]; //into * place we can put any numbers
  }
}
alert(result);
console.log(`Matrix of two numbers:${result}`); //we should use ` this insted of "" to get output

//DOM - Document object model (It converts web pages to tree like structure.)
//  (It is mainly used in Javascript to 1.Acces elements of HTML; 2.Manuplating Elements-button style,content; 3.Event-onclick,mouse)
