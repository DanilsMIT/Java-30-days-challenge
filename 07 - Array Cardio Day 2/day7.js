// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const actualYear = new Date().getFullYear();

console.log("is someone 19 or older?");
const isSomeOneOlder = people.some((person) => {
  return actualYear - person.year >= 19;
});
console.log(isSomeOneOlder);

// Array.prototype.every() // is everyone 19 or older?
console.log("is everybody 19 or older?");
const isEveryBodyOlder = people.every(
  (person) => actualYear - person.year >= 19,
);
console.log(isEveryBodyOlder);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
console.log("comentario con la id 823423");
const commentary = comments.find((text) => text.id === 823423);
console.log(commentary);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

console.log("eliminando comentario con la id 823423");
console.table(comments);
const commentaryToDelete = comments.findIndex((text) => text.id === 823423);
console.log("encontrado... eliminando...");
const newComments = [
  ...comments.slice(0, commentaryToDelete),
  ...comments.slice(commentaryToDelete + 1),
];
console.table(newComments);
