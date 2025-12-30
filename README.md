
# 🧠 JavaScript Array Recap

A simple collection of JavaScript array-related exercises & utility scripts to help you practice and solidify your understanding of array operations in JS.

This repo includes small standalone JavaScript programs demonstrating common array patterns such as looping, reversing, sorting, and string manipulation.

## 📁 Repository Contents

| File | Description |
|------|-------------|
| `looping.js` | Demonstrates how to loop through an array — using `for`, `for…of` and array iteration methods. |
| `reverse.js` | Shows how to reverse an array using built-in methods and logic. |
| `sentenceReversed.js` | Reverses words inside a sentence (string manipulation + array logic). |
| `sort.js` | Sorts arrays (alphabetically or numerically) using array methods. |

## 🧩 What You’ll Learn

This project touches on fundamental JavaScript array concepts:

- 📌 Creating and managing arrays
- 🔁 Iterating over arrays
- 🔄 Reversing array contents
- 🧠 Manipulating array items for string processing
- 🔢 Sorting arrays ascending/descending

Arrays in JavaScript are powerful data structures that let you store and work with ordered collections of values. They are zero-indexed and come with many built-in methods to manipulate them efficiently. :contentReference[oaicite:0]{index=0}

## 🚀 Example Snippets

Here are some core techniques you’ll see:

### 🔁 Looping Through an Array
```js
const arr = [1,2,3];
for (let value of arr) {
  console.log(value);
}
````

### 🔄 Reversing an Array

```js
const arr = ['a','b','c'];
console.log(arr.reverse()); // ['c','b','a']
```

### 🔤 Sorting an Array

```js
const words = ['banana','apple','cherry'];
console.log(words.sort()); // ['apple','banana','cherry']
```

### 📝 Reversing Words in a Sentence

Break a sentence into words, reverse them and join back:

```js
const sentence = "Hello World";
const reversed = sentence.split(' ').reverse().join(' ');
```

## 🧪 How to Use

1. **Clone the repository**

   ```sh
   git clone https://github.com/Piash2K/js-array-recap.git
   ```

2. **Navigate inside**

   ```sh
   cd js-array-recap
   ```

3. **Run the scripts in Node.js**

   ```sh
   node looping.js
   node reverse.js
   node sentenceReversed.js
   node sort.js
   ```

## 📘 Resources

Learn more about JavaScript arrays:

* MDN JavaScript Array Reference – docs & examples of built-in array methods. ([MDN Web Docs][1])
* JavaScript Array fundamentals and practical patterns.

## 💡 Tips for Practicing

* Try writing your own versions of these functions.
* Experiment with different array methods like `map`, `filter`, `reduce`.
* Mix arrays with objects to handle more complex data.


