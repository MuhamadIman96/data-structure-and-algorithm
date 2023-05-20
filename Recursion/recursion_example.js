function looping(num) {
  if (num <= 0) {
    console.log("Looping Selesai");
    return;
  }
  console.log(num);
  num--;
  looping(num);
}
// looping(5)

/*********************************************************************************/
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

/*********************************************************************************/
function mathPower(num, pow) {
  if (pow <= 0) return 1;

  return num * mathPower(num, pow - 1);
}

/*********************************************************************************/
function factorial(num) {
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}
// factorial(5)

/*********************************************************************************/
function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

// productOfArray([1,2,3,10]) = 60

/*********************************************************************************/
function recursiveRange(num) {
  if (num <= 0) return 0;

  return num + recursiveRange(num - 1);
}
// recursiveRange(6) = 21

/*********************************************************************************/
function fibonancci(n) {
  // add whatever parameters you deem necessary - good luck!
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}

// fibonancci(10) = 55

function reverseString(str) {
  if (str === "") return str;
  console.log(str);
  return reverseString(str.slice(1)) + str[0];
}
// reverse("awesome")

/*********************************************************************************/
function isPalindrom(str) {
  if (str.length <= 1) return true;
  else {
    if (str[0] === str[str.length - 1]) {
      return isPalindrom(str.slice(1, str.length - 1));
    } else {
      return false;
    }
  }
}
// isPalindrom("foobar") = false
// isPalindrom("tacocat") = true

/*********************************************************************************/
function someRecursive(arr, callback) {
  if (arr.length <= 0) return false;
  else {
    if (callback(arr[0])) {
      return true;
    } else {
      return someRecursive(arr.slice(1), callback);
    }
  }
}
const isOdd = (value) => value % 2 !== 0;
// someRecursive([2,4,6,1] , isOdd) = true
// someRecursive([2,4,6] , isOdd) = false

/*********************************************************************************/
function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}
// flatten([1, 2, 3, [4, 5] ]) = [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) = [1, 2, 3, 4, 5]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) = [1, 2, 3]

/*********************************************************************************/
function capitalFirst(arr) {
  if (arr.length <= 0) return arr;

  const capitaled = arr[0][0].toUpperCase() + arr[0].slice(1);
  return [capitaled].concat(capitalFirst(arr.slice(1)));
}
// capitalFirst(['car','taco','banana'])

/*********************************************************************************/
function nestedEvenSum(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]); // Recursively call nestedEvenSum for nested objects
      console.log(`mengembalikan nilai Sum : ${sum}`);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key]; // Add even numbers to the sum
      console.log(`menjumlahkan  Sum : ${sum}`);
    }
  }

  return sum;
}
// nestedEvenSum({
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: {
//         numbers : 4
//       }
//     }
//   }
// })

/*********************************************************************************/
function capitalizeWords(arr) {
  if (arr.length === 0) return arr;

  let capitalize = arr[0].toUpperCase();
  return [capitalize].concat(capitalizeWords(arr.slice(1)));
}
// capitalizeWords(['i', 'am', 'learning', 'recursion']) = 'I', 'AM', 'LEARNING', 'RECURSION']

/*********************************************************************************/
function stringifyNumbers(obj) {
  const result = {};

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      result[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      result[key] = stringifyNumbers(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }
// stringifyNumbers(obj)

/*********************************************************************************/
function collectStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      strings = strings.concat(collectStrings(obj[key]));
    }
  }
  return strings;
}
const obj1 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};
// collectStrings(obj1)

function confirmEnding(str, target) {
  let n = str.length - 1;
  let cocok = "";
  for (let i = n; i > 0; i--) {
    for (let j = target.length - 1; j > 0; j++) {
      if (str[i] === target[j]) {
        cocok = cocok + target[j];
      } else {
        return false;
      }
    }
    if (cocok == target) {
      break;
    }
  }

  return true;
}

confirmEnding("Congratulation", "on");
// confirmEnding("Bastian", "n");
