let arr = [11, -31, 20, 11, 23, 44, 23];

// console.log(arr);

let aSet = new Set(arr);
// console.log(aSet);
// console.log(aSet.size);

aSet.forEach((e) => {
  console.log(e);
});

// console.log(Array.from(aSet)); // converting set into Array
