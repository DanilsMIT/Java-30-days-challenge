// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
function birth() {
  console.log(`Aquellos que nacieron en los 1500's son:`);
  for (let inventor of inventors) {
    let birthDay = inventor.year;
    if (birthDay >= 1500 && birthDay < 1600) {
      console.log(`${inventor.first} ${inventor.last} ${birthDay}`);
    }
  }
}
birth();

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorNames = inventors.map((inventor) => ({
  first: inventor.first,
  last: inventor.last,
}));
console.log(`Inventores:`);
console.table(inventorNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventoresAntiguedad = inventors.sort((prevOne, nextOne) => {
  return prevOne.year > nextOne.year ? 1 : -1;
});
console.log(`Inventores según su antiguedad:`);
console.table(inventoresAntiguedad);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const yearsTogether = inventors.reduce((acumulador, inventor) => {
  return acumulador + (inventor.passed - inventor.year);
}, 0);
console.log(`Los inventores han vivido ${yearsTogether} años en conjunto.`);

// 5. Sort the inventors by years lived
const longestInvertor = inventors.sort((prevOne, nextOne) => {
  let yearLivedPreviousOne = prevOne.passed - prevOne.year;
  let yearLivedNextOne = nextOne.passed - nextOne.year;

  return yearLivedPreviousOne > yearLivedNextOne ? 1 : -1;
});

console.log("Inventores según años vividos:");
console.table(longestInvertor);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
/*En la consola dentro del link poner : */
/*
const landsElements = Array.from(
  document.querySelector(".mw-category").querySelectorAll("a"),
)
  .map((landLink) => landLink.textContent)
  .filter((title) => title.includes("de"));
console.table(landsElements);
*/

// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleAlphabeticLast = people.sort((prevOne, nextOne) => {
  const [Prevname, Prevlastname] = prevOne.split(", ");
  const [Nextname, Nextlastname] = nextOne.split(", ");
  return Prevlastname > Nextlastname ? 1 : -1;
});
console.log("Gente con apellido en orden  de lista alfabetica");
console.table(peopleAlphabeticLast);
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const dataReduced = data.reduce((ObjetoContador, item) => {
  /* Si el contador no esta anotado, crearlo*/
  if (!ObjetoContador[item]) {
    ObjetoContador[item] = 0; /* iniciar contador en 0 */
  }

  ObjetoContador[item]++; /* sumo el contador si encuentro otro */
  return ObjetoContador; /* retorno la lista de los objetos contados*/
}, {});

console.log("Lista contabilizada de juguetes:\n", dataReduced);
