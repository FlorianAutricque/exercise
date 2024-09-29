// sort by asc numbers

//ALGO DE TRI
// O(n^2) => 2 fois 2 for loop = 40000 operations * 40000 operations
// pleins d'algo de tri. Certains plus perf que d'autres

// const input = [3, 2, 4, 6, 7, 12, 53, 2, 4, 65, 1, 34];
// const input = [3, 2, 6, 5, 7, 12, 53, 2, 4, 65, 1, 34];
const input = Array.from({ length: 40000 }, () =>
  Math.floor(Math.random() * 40)
);

const sortingNumbers = numbers => {
  //2 parameters => return num, if num is - => change the order of numbers
  // const ouput = numbers.sort((a, b) => a - b);

  const output = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];

    let findIndexEl = null;

    //a quel index dans output je dois mettre el
    for (let index2 = 0; index2 < output.length; index2++) {
      const element2 = output[index2];
      if (element2 > element) {
        findIndexEl = index2;
        break;
      }
      if (index2 === output.length - 1) {
        findIndexEl = output.length;
        break;
      }
    }

    //une fois jai cet index, comment inserer el dans output dans cet index en decalant tout ce qui vient apres
    output.splice(findIndexEl, 0, element);
    console.log(findIndexEl);
  }

  return output;
};

console.log(sortingNumbers(input));
