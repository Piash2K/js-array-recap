// const persons = ["rakib", "nokib", "sakib", "akib", "dakib"];
const persons = ["rakib", "nokib", "sakib", "akib", "dakib", "Pakib", "Anib"];

const sortedPersons = persons.sort((a, b) => a.localeCompare(b));
console.log(sortedPersons);

// sort --->

// const numbers = [2,3,4,6,7,8]
/*
 * Ascending ---> smaller to larger: [2,3,4,6,7,8]
 * Descending ----> larger to smaller: [8,7,6,4,3,2]
 */

const numbers = [4, 7, 12, 8, 38, 3, 6, 1];
const numbers_asc = [...numbers].sort((a, b) => a - b);

// console.log(numbers)

console.log(numbers_asc)
