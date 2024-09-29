const family = [
  {
    name: "Adrien",
    isActive: false,
  },
  {
    name: "Floflo",
    isActive: true,
  },
  {
    name: "Véro",
    isActive: false,
  },
  {
    name: "Alex",
    isActive: true,
  },
];

//filter remove some el from array
// map reshape el from array
const activeF = family.filter(x => x.isActive === true);

const nameF = family.map(x => x.name);

const activeFName = family.filter(x => x.isActive === true).map(x => x.name);
console.log(activeFName);

const y = [
  {
    name: "Adrien",
    isActive: false,
    nbBalls: "2",
  },
  {
    name: "Floflo",
    isActive: true,
    nbBalls: 2,
  },
  {
    name: "Véro",
    isActive: false,
    nbBalls: 0,
  },
  {
    name: "Alex",
    isActive: true,
    nbBalls: 2,
  },
];

const b = y.reduce((acc, cur) => acc + Number(cur.nbBalls), 0);
console.log(b);

const words = [
  { name: "abricot", price: 10 },
  { name: "prune", price: 20 },
  { name: "apple", price: 12 },
  { name: "banana", price: 40 },
  { name: "orange", price: 5.5 },
];

const sortedWords = words.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

const sortedPrice = words.sort((a, b) => {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
});

const top3 = sortedPrice.slice(0, 3);

console.log(sortedWords);
console.log("//////////////////");
console.log(sortedPrice);

console.log(top3);
