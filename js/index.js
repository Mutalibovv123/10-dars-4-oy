// Sodda masalalar 
// Length masalalar
// 1-masala

// let arr = [1,2,3,4,5,6,7];
// console.log(arr.length);

// 2-masala

// let text = "Hello bro, now i am trying my best to make as much money as i can since i have so much stuff to do and i wanna achieve financial freedom at a young age";
// console.log(text.length);

// 3-masala

// let lastElement = [true, false, 12, 1234, 56];
// console.log(lastElement.length - 1);

// Concat

// 1-masala

// let mass1 = [123,4553,1445,"a","b","c"];
// let mass2 = [0,1,2,3,4,5,6,7,];
// console.log(mass1.concat(mass2));

// 2-masala

// let first = " Hi"
// let second = " My last name is"
// let third = " Mutalibov"
// let collect = first.concat(second,third);
// console.log(collect);

// 3-masala

// let first = [123,123];
// let second = [124,124];
// first.push("New element");
// second.unshift("Second New element");
// console.log(first.concat(second));


// INCLUDES

// 1-masala
// let value = prompt("Qiymatni kirting")
// let numbers = [12,13,14,"salom", "xayr"];
// console.log(numbers.includes(value));

// 2-masala

// let textValue = prompt("Matndagi so'zni kirting");
// let text = "Hello my name is Mutalibov, i am enteprenur";
// console.log(text.includes(textValue));

// 3-masala

// let numbers = [1,2,3,4,5,6,9,];
// console.log(numbers.includes() >= 10);

// Indexof // Lastindexof

// 1-masala

// let numbers = [1,2,3,4,5,1,6,7,8,9,1];
// console.log(numbers.indexOf(1));

// 2-masala

// let numbers = [2,3,4,5,6,7,8,9,2];
// console.log(numbers.lastIndexOf(2));

// 3-masala

// let text = "I am Mutalibov, I took part in Speaking Mock exam";
// console.log(text.indexOf("a"));
// console.log(text.lastIndexOf("a"));

// Sort

// 1-masala

// let numbers = [9,8,7,6,5,4,3,2,1];
// numbers.sort();
// console.log(numbers);

// 2-masala

// let text = ["My", "name", "is", "Mutalibov", "and", "I", "am", "part-time", "teacher"];
// text.sort();
// console.log(text)

// 3-masala

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.sort(function(a, b) {
//     return b - a; 
// });
// console.log(numbers); 

// Reverse

// 1-masala

// let massive = [true, false, "salom", "xayr"];
// massive.reverse();
// console.log(massive);

// // 2-masala
// let str = "salom";
// let res ="";
// for (let i = str.length -1; i >= 0; i--) {
//     res += str[i]
// }
// console.log(res);

// Split orqali

// let str1 = "Salom"
// console.log(str1.split(' '));

// 3-masala

// let numbers = [3,4,5,7,8,0,1,3,5];
// numbers.sort();
// numbers.reverse();
// console.log(numbers);

// ToString

// 1-masala
// let numbers = [1,2,3,4,5,6];
// let res = numbers.toString();
// console.log(res);

// 2-masala

// let elements = [true, false, "salom", "xayr"];
// let res = elements.toString();
// console.log(res);

// 3-masala

// let numbers = [9,8,7,6,5,4,3,2,1];
// numbers.sort();
// let res = numbers.toString();
// console.log(res);

// Join
// 1-masala

// let massive = [12,13,14,15];
// let res = massive.join('-');
// console.log(res);

// 2-masala

// let massive = [123,1235,123456,];
// let res = massive.join('',);
// console.log(res);

// 3-masala

// let massive = [12,1,14,15,16];
// let res = massive.join('|');
// console.log(res);

// Push //Shift

// 1-masala

// let massive = [123,123,123];
// massive.push(123);
// console.log(massive);

// 2-masala

// let massive = [123,456,12345,];
// massive.shift();
// console.log(massive);

// 3-masala

// let massive = [123,567,23,5,4,32,4,4,45,5,4,3,2,];
// massive.push(12,45,24,2,44,3,4,3,3,4);
// massive.shift();
// console.log(massive);

// Unshift Pop

// 1-masala

// let massive = [12,13,14,13,5,];
// massive.unshift("salom");
// console.log(massive);

// 2-masala

// let massive = [123,12,33,4,5];
// massive.pop();
// massive.pop();
// console.log(massive);

// 3-masala

// let massive = [124,2459,1294,1384,19383,12,1,23,4,];
// massive.shift();
// massive.unshift("Salom");
// massive.pop();
// massive.push("Xayr")
// console.log(massive);

// Qiyinroq masalalar

// 1-masala
// let arr = [6,7,8,9,10];
// if (arr.length % 2 == 1) {
//     arr.splice(Math.trunc(arr.length / 2), 1)
//  console.log(arr);
// } else {
//     let first = arr.slice(0, arr.length / 2);
//     let second = arr.slice(arr.length / 2);
//     console.log(first);
//     console.log(second); 
// }

// 2-masala

// let arr1 = [1,3,2];
// let arr2 = [5,6,7];
// let merged = arr1.concat(arr2);
// let numbers = merged.filter((element) = typeof element == "number");
// console.log(numbers);

// 3-masala

// let arr = [1,2,3,4];
// let element = 4;

// let index = arr.indexOf(element)
// if (index > - 1) {
//     arr.splice(index, 1)
// } else {
//     arr.push(element);
// }
// console.log(arr);

// 4-masala

// let massive = [3, 5, 7, 8, 4, 2, 4, 3,];
// let newMassive = [];

// let firstIndex = massive.indexOf(3); 
// let lastIndex = massive.lastIndexOf(3); 

// for (let i = firstIndex+1; i <= lastIndex-1; i++) {
//   newMassive.push(massive[i]); 
// }
// console.log(newMassive);

// 5-masala
// let array = [1, "olma", 2, "nok", 3, "uzum", 4, "anor"];
// let numbers = [];
// let words = [];
// for (let i = 0; i < array.length; i++) {
//   if (typeof array[i] == 'number') {
//     numbers.push(array[i]);
//   } else if (typeof array[i] === 'string') {
//     words.push(array[i]);
//   }
// }
// function sortNumbers(array) {
//     array.sort((a, b) => a - b);
//     return arr;
//   }
// console.log(numbers);

// 6-masala

// let massiv = [1, 2, 3, 4, 5,6,7,8,9,0];
// let matn = "";
// for (let i = 0; i < massiv.length; i++) {
//   massiv[i] *= 2;
//   matn += massiv[i]; 
//   if (i < massiv.length - 1){ 
//     matn += ", "
//   }
// }
// console.log(matn)


























































































