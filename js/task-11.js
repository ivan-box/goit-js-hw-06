function highAndLow(numbers) {
  const arrNumbers = numbers.split(" ");
  console.log(arrNumbers);
  let newArr = [];
  newArr = newArr.push(Math.max(arrNumbers), Math.min(arrNumbers));
  return newArr;
}

highAndLow("1 2 3 4 5");
