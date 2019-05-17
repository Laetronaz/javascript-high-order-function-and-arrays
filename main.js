const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach
companies.forEach(function(company) {
  console.log(company);
});

// filter

// 21 and older
// const canDrink = ages.filter(function(age) {
//   if (age >= 21) {
//     return true;
//   }
// });

const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

// is retail company
// const retailCompagnies = companies.filter(function(compagny) {
//   if (compagny.category === "Retail") {
//     return true;
//   }
// });

const retailCompagnies = companies.filter(
  compagny => compagny.category === "Retail"
);
console.log(retailCompagnies);

//Compagnies from the 80ies
// const eightiesCompagnies = companies.filter(
//   compagny => compagny.start >= 1980 && compagny.end < 1990
// );
// console.log(eightiesCompagnies);

// Last more than 10 years
// const lastedTenYears = companies.filter(
//   compagny => compagny.end - compagny.start >= 10
// );
// console.log(lastedTenYears);

// map
//Create ages of compagny names
// const compagniesNames = companies.map(function(compagny) {
//   return compagny.name;
// });

// const compagniesNames = companies.map(
//   compagny => `${compagny.name}[${compagny.start}-${compagny.end}]`
// );
// console.log(compagniesNames);

const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);
console.log(ageMap);

// sort
// const sortedCompagnies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const sortedCompagnies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompagnies);

const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

// reduce

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// const totalYears = companies.reduce(function(total, compagny) {
//   return total + (compagny.end - compagny.start);
// }, 0);

const totalYears = companies.reduce(
  (total, compagny) => total + (compagny.end - compagny.start),
  0
);
console.log(totalYears);

//Combined

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
