function fooBar(x) {
  let lists = [];
  for (let i = 1; i <= x; i++) {
    if (i % 5 == 0 && i % 3 == 0) lists.push("catkitty");
    else if (i % 3 == 0) lists.push("cat");
    else if (i % 5 == 0) lists.push("kitty");
    else lists.push(i);
  }
  return lists.join(",");
}
const result = fooBar(15);

console.log(result);

// Expected
// 1, 2, cat, 4, kitty, cat, 7, 8, cat, kitty, 11, cat, 13, 14, catKitty .
