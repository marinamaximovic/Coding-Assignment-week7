//1.
let ages = [3, 6, 23, 64, 2, 8, 28, 93];

// a)
let result = ages[ages.length - 1] - ages[0];
console.log(result);

// b)
ages.push(37);
console.log(ages);
let result1 = ages[ages.length - 1] - ages[0];
console.log(result1);

// c)
let sum = 0;
for (i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let average = sum / ages.length;
console.log(average);

//2.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
// a)
let total = 0;
for (let i = 0; i < names.length; i++) {
  total += names[i].length;
}
let avg = total / names.length;
console.log(avg);

// b)
let alltoghether = "";
for (i = 0; i < names.length; i++) {
  alltoghether += names[i];
  if (i < names.length - 1) {
    alltoghether += " ";
  }
}
console.log(alltoghether);

// 3.
// We are accessing the last element in the array with lenght property. Arrays are 0 indexed, and the
//   last element is always -1.(sample: array.lenght-1)

//4.
//The first element in the array is always indexed 0. (sample: array[0])

//5.
let nameLenghts = [];
for (i = 0; i < names.length; i++) {
  nameLenghts.push(names[i].length);
}
console.log(nameLenghts);

//6.
let sumOfNameLengths = 0;
for (i = 0; i < nameLenghts.length; i++) {
  sumOfNameLengths += nameLenghts[i];
}
console.log(sumOfNameLengths);

//7.
let function7 = (word, n) => {
  let result = " ";
  for (i = 0; i < n; i++) {
    result += word;
  }
  return result;
};
console.log(function7("Hello", 3));

//8.
let fullName = (firstName, lastName) => firstName + " " + lastName;
//                   or we could do: => `${firstName} ${lastName}`;
console.log(fullName("Marina", "Maksimovic"));

//9.
function sumGreathertThen100(arrayOfNumbers) {
  let sumOfAllNumbers = 0;
  for (i = 0; i < arrayOfNumbers.length; i++) {
    sumOfAllNumbers += arrayOfNumbers[i];
  }
  if (sumOfAllNumbers > 100) {
    return true;
  } else {
    return false;
  }
}

//let see the result:
let arrayOfNumbers = [42, 58, 17];
console.log(sumGreathertThen100(arrayOfNumbers));

//10.
function elementsAverage(arrayofNum) {
  let elementsSum = 0;
  for (i = 0; i < arrayofNum.length; i++) {
    elementsSum += arrayofNum[i];
  }
  let average = elementsSum / arrayofNum.length;
  return average;
}

let arrayofNum = [25, 78, 31];
console.log(elementsAverage(arrayofNum));

//11.
function whichArrayIsGreather(array1, array2) {
  let sumOfArray1 = array1.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
  let sumOfArray2 = array2.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
  let avgOfArray1 = sumOfArray1 / array1.length;
  let avgOfArray2 = sumOfArray2 / array2.length;

  return avgOfArray1 > avgOfArray2;
}
let array1 = [3, 2, 9];
let array2 = [7, 11, 6];
console.log(whichArrayIsGreather(array1, array2));

//12.
function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside === true && moneyInPocket > 10.5) {
    return true;
  } else {
    return false;
  }
}
console.log(willBuyDrink(true, 12));

//13.

function isItEven(f) {
  if (f % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isItEven(5));

//Comment: This function should return true if the number is even, if it is odd, it should return false.
