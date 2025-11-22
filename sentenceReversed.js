const statement = "I am a hard working person";

splittedStatement = statement.split(" ");

const reversedStatement = [];
for (let i = splittedStatement.length - 1; i >= 0; i--) {
  //   console.log(splittedStatement[i]);
  reversedStatement.push(splittedStatement[i]);
}
console.log(reversedStatement.join(" "))
