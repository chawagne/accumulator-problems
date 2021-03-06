/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.

*/

function test() {
 var string ="This Works!";
 return string;
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/

// function sum(array){
// var sum = 0;
// for (var i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// return sum;
// };

//--OR--

function sum(array) {
    return array.reduce(function (previous, item) {
            return previous + item;
        },0);
    };







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/

function doubleNumbers(array){
  return array.map(function(item){
    return item *= 2;
  });
};







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/
function multiplyNumbers(array, multiplier) {
    return array.map(function(item) {
        return item *= multiplier;
    });
};








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/
function doubleLetters(string){
  array = string.split("");
  return array.map(function(item){
    return item += item;
  }).join("");
};









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/

function interleave(array1, array2){
var combined = [];
  for (var i = 0; i < array1.length; i++) {
    combined.push(array1[i]);
    combined.push(array2[i]);
  }
return combined;
}

// function interleave(array1, array2) {
//     var combined = array1.concat(array2);
//     return combined.map(function(item) {
//         return item;
//     });
//     return combined;
// };







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/


function createRange(number, defaultValue){
  var range=[];
  for (var i = 0; i < number; i++) {
    range.push(defaultValue);
  };
  return range;
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/

function flipArray(array){
  var range = {};
    array.forEach(function (current, index, item){
    range[current]=index;
  });
  return range;
};






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/

function arraysToObject(array){
  var object = {};
  array.forEach(function (current, index, item){
    object[current[0]]=current[1];
  })
  return object;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/

function reverseString(string){
  var reverse = "";
  for (var i = 0; i < string.length; i++){
    reverse += (string[(string.length)-1-i]);
  }
  return reverse;
};











/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/

function repeats(string) {
    return (string.slice(0,string.length/2) === string.slice(string.length/2,string.length));
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/

function everyOther(string) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
          result +=string[i];
        };
    };
return result;
};






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/

function allEqual (string){
  if(string.split("").filter(function (value, index, item) {
        return (value !== item[index-1]);
  },0).join("").length <= 1){
    return true;
  };
    return false;
};








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 10
*/
function sumLetters (string){
  return string.split("").reduce(function(total, number){
    return total += parseFloat(number);
  },0);
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/
function countVowels (string){
  return string.split("").reduce(function (total, item) {
    if (["a", "e", "i", "o", "u"].indexOf(item.toLowerCase()) != -1){
      return total += 1;
    }
      return total;
  },0);
}









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/

function split(string){
  var array = [];
  for (var i = 0; i < string.length; i++) {
    array.push(string[i]);
  }
  return array;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/

function getCodePoints(string){
  return string.split("").map(function (item) {
    return item.codePointAt();
  });
};







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/
function letterMap(string){
  var range = {};
    string.split("").forEach(function (current, index, item){
    range[current]=index;
  });
  return range;
};







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/

function letterCount(string){
  var counts = {};
    string.split("").forEach(function (current, index, item){
      if (counts[current]===undefined){
        counts[current]=0;
      }
    counts[current] +=1;
  });
  return counts;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/

function threeOdds(num1, num2){
  var count = 0;
  for (var i = num1+1; i < num2; i++) {
    if (i % 2 === 1){
      count +=1;
    }
  }
  return (count>=3) ? true : false;
  }









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/

function leftPad(string, length, fill) {
    var result = "";
    for (var i = string.length; i < length; i++) {
        result += fill;
    }
    return result += string;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/

function createString(number, letter){
  var result = "";
   for (var i = 0; i < number; i++) {
    result += letter;
  }
  return result;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/

function factorial (number){
  result = 1;
  for (var i = 0; i < number; i++) {
    result = (number - i) * result;
  }
  return result;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/

function arrayOfNumbers(number){
  array = [];
  for (var i = 0; i < number; i++) {
    array.unshift(number-i);
  }
  return array;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/

function evenOdd(num1, num2) {
    var result = {};
    for (var i = num1; i <= num2; i++) {
        if (num1 + num2 !== 0) {
            i % 2 ? result[i.toString()] = "odd" : result[i.toString()] = "even";
        }
    }
    return result;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/

//Note:  I hate this solution 😰
function growingKeys(number, string) {
    var result = {};
    if (number === 0){
      return result;
    }
    result[string]=true;
    for (var i = 0; i < number-1; i++) {
        result[Object.keys(result)[i]+string] = true;
    }
    return result;
}










/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/

function every (array, value){
  var result = array.filter(function (item){
    return (item === value);
  });
  return (array.length === result.length);
};






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/

function some (array, value){
  var result = array.filter(function (item){
    return (item === value);
  });
  return result.length >= 1;
};






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named toSentence that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/

function toSentence (array){
  var sentence = "";
  if (array.length === 2){
    sentence += (array[0] + " and " + array[1]);
    return sentence;
  };

  for (var i = 0; i < array.length; i++) {
      if (i === array.length - 1){
        sentence += (" and " + array[i]);
      }
      else if(i > 0){
        sentence += (", " + array[i]);
      }
      else {
        sentence += (array[i]);
      }
  }
  return sentence;
}












/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/

function acronym (array){
  return array.map(function (item) {
          return item[0];
      }).join("");
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/

function min(array) {
  if (array.length === 0){
    return undefined;
  }
    return array.reduce(function(previous, current, index) {
        return current < previous ? current : previous;
    });
}










/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/

function index (arrayOfObjects, name){
  var object = {};
  for (var i = 0; i < arrayOfObjects.length; i++) {
    object[arrayOfObjects[i][name]]=arrayOfObjects[i];
  }
  return object;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/

// function invert (object){
//   var inverted = {};
//   var array = Object.entries(object);
//   var invertedArray = array.map(function (current){
//     return [current[1],current[0]];
//   });
//   invertedArray.forEach(function (current){
//     inverted[current[0]]=current[1];
//   })
//   return inverted;
// }
function invert(object) {
    var inverted = {};
    var array = Object.entries(object);
    array.map(function(current) {
        return [current[1], current[0]];
    }).forEach(function(current) {
        inverted[current[0]] = current[1];
    });
    return inverted;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/

function addSignature(name, object){
  if (typeof name !== "string"){
    return {};
  };
  var signed = {};
  var array = Object.entries(object);
  var signedArray = array.map(function (current){
    return [current[0]+"-signed",current[1]+ " - " + name];
  });
  signedArray.forEach(function (current){
    signed[current[0]]=current[1];
  });
return signed;
};






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/
function pairs (object) {
  var array = Object.entries(object);
  return array.map(function(current){
    return current[0] + " - " + current[1];
  });
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/

function sumValues(object){
  var array = Object.entries(object);
  return array.reduce(function (total, current){
    return total += current[1];
  },0);
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/

function biggestProperty(object){
  var array = Object.entries(object);
  if (array.length === 0){
    return undefined;
  }
  return array.reduce(function (previous, current){
    return current[1] > previous[1] ? current : previous;
  },[0,0])[0];
}












/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/

function keyForValue(object, value) {
    for (var key in object) {
       if (object[key]===value){
         return key;
       }
    };
};









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/

function containsValue(object, value) {

    var keys = Object.keys(object).filter(function(item) {
        return item === value;
    });
    var pairs = Object.values(object).filter(function(item) {
        return item === value;
    });
    return (keys.concat(pairs)).length !== 0
}







//
