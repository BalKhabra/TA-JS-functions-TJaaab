// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(a) {
  return a+1
}

// - Write a Function Expression

let addOne = function (a) {
  return a+1;
};

// - Write an Arrow Function without curly brackets(if possible)
let addOne = (a) => a+1;
addOne(2)


// - Write an Arrow Function with curly brackets
let addOne = (a) => {
  return a+1;
};
addOne(2)


// - Execute the function

function addOne(a) {
  return a+1
}
addOne(2)

// - Execute the function and store the return value in a variable.

function addOne(a) {
  let answer =  a+1
  return answer
}
addOne(2)

// - What is the typeof returnValue

string


/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function subtractOne(a) {
  return a-1
}
subtractOne(2)
// - Write a Function Expression
let subtractOne = function (a) {
  return a-1;
};
// - Write an Arrow Function without curly brackets(if possible)
let subtractOne = (a) => a-1;

// - Write an Arrow Function with curly brackets
let subtractOne = (a) => {
  return a-1;
};
// - Execute the function
function subtractOne(a) {
  return a-1
}
subtractOne(2)
// - Execute the function and store the return value in a variable.
function subtractOne(a) {
  let answer =  a-1
  return answer
}
subtractOne(2)

// - What is the typeof returnValue
string



/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum (a,b){
  return a+b
}
sum()
// - Write a Function Expression
let sum = function (a, b) {
  return a-b;
};
sum()
// - Write an Arrow Function without curly brackets(if possible)
let sum = (a, b) => a + b;
sum()


// - Write an Arrow Function with curly brackets
let sum = (a,b) => {
  return a+b;
};


// - Execute the function
sum ()
// - Execute the function and store the return value in a variable
function sum(a,b) {
  let answer =  a+b;
  return answer
}
// - What is the typeof returnValue
string


/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square (a){
  return a ** 2
}
// - Write a Function Expression
let square = function (a) {
  return a ** 2;
};
// - Write an Arrow Function without curly brackets(if possible)
let square = (a) => a ** 2;

// - Write an Arrow Function with curly brackets
let square = (a) => {
  return a ** 2;
};
// - Execute the function
square ()
// - Execute the function and store the return value in a variable
function square(a) {
  let answer =  a ** 2;
  return answer
}
// - What is the typeof returnValue
string



/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater (x, y) {
return x>y;
} 

// - Write a Function Expression
let isGreater = function (x, y) {
  return x > y;
};
// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (x, y) => x > y;

// - Write an Arrow Function with curly brackets
let isGreater = (x, y) => {
  return x > y;
};
// - Execute the function
isGreater ()
// - Execute the function and store the return value in a variable
function isGreater(x, y) {
  let answer =  x > y;
  return answer
}
// - What is the typeof returnValue

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven (num) {
if (num % 2 === 0) {
  return `Number is even`;
} else {
  return `Number is odd`;
}
};
// - Write an anonymous Function Expression
let oddOrEven = function isOdd(num) {
  if (num % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
  };
// - Write an named Function Expression
let oddOrEven = (num) => {
  if (num % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
  };
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (num) => num % 2 === 0 ? `Number is even` : `Number is odd`;


// - Write an Arrow Function with curly brackets
let oddOrEven = (num) => {
  if (num % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
  };

// - Execute the function
oddOrEven ()
// - Execute the function and store the return value in a variable
function oddOrEven(num) {
  let answer =  num % 2 === 0;
  return answer
}
// - What is the typeof returnValue
string