//ARRAYS-FUNCTION ASSIGNMENT

// Question 1

//mutating methods modify the original array

/*push() - adds elements to the end of an array.
pop() - removes the last element from an array.
splice() - removes or replaces existing elements and/or adds new elements to an array.
reverse() - reverses the order of the elements in an array.
sort() - sorts the elements of an array in place.*/

// non-mutating methods do not modify the original array and return a new array instead


/*slice() - returns a new array that is a subset of an existing array.
concat() - returns a new array by combining two or more arrays.
map() - returns a new array by applying a function to each element of an existing array.
filter() - returns a new array by selecting elements from an existing array that meet a certain condition.
reduce() - returns a single value by applying a function to each element of an existing array and accumulating the results.*/


//Question 2

/*Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
Add ‘Kotlin’ to the end of the array
Add ‘Java’ after ‘Ruby’
Remove the first item in the array
Add ’Scala’ and ‘Swift’ to the beginning of the array
Replace ‘PHP’ with ‘Go’ and ‘Rust’*/

let lang= ["c#", "Javascript", "Ruby", "PHP", "Python"];
 console.log(lang.push("Kotlin"))
 //Add 'Java' after 'Ruby'
 lang.splice(3,0, "Java")
console.log(lang)
//Remove the first item in the array
lang.pop()
console.log(lang)

//Add ’Scala’ and ‘Swift’ to the beginning of the array
lang.unshift("Scale","Swift")
console.log(lang)

// Replace ‘PHP’ with ‘Go’ and ‘Rust’
lang.
console.log(lang)


//Question 3
// What will be the value of fruit after calling the function changeFruit?
// let fruit = ['apple', 'mango', 'banana'];
// 		function changeFruit( fruit ) {
//     			fruit[2] = "orange";
//     			return fruit;
// 		}

// The value of friut will be:
//['apple','mango','orange']
        