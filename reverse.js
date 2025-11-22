//              [7, 6, 5, 4, 3, 2, 1]

const numbers = [1, 2, 3, 4,6, 5, 6, 7];

// console.log(numbers)

// const reversed = numbers.reverse()

// console.log(reversed)


const reverseNumbers = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  const number = numbers[i];
    console.log(number)
  reverseNumbers.push(number);
}
console.log(reverseNumbers);

const rev_numbers = [];
for (const number of numbers) {
  // console.log(number)
  rev_numbers.unshift(number);
}
// console.log(rev_numbers);

let reversed_numbers = [];

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  reversed_numbers.unshift(num);
}
// console.log(reversed_numbers)
