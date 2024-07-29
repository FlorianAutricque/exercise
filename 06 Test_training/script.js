function parseToRoman(number) {
  const numberRoman = [
    { value: 1000, numeral: "M" },
    { value: 500, numeral: "D" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";

  for (const { value, numeral } of numberRoman) {
    //loop start from the top, 1000, and stops when the value is > or = the inputed number.
    while (number >= value) {
      //the result is 'transfered to it's numeral value
      result += numeral;

      //the number is substract from the value and then the loop start again
      number -= value;
    }
  }

  //ex : 37. 37 >10 => X. 37-10=27. loop start again. 27 >10 => X and so on
  return result;
}

console.log(parseToRoman(4));
console.log(parseToRoman(37));
console.log(parseToRoman(143));
console.log(parseToRoman(1234));
