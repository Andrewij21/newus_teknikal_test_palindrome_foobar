function isPalindrome(line) {
  const a = line.split("").reverse().join("");
  return a == line ? true : false;
}

const line = isPalindrome(".!!.");
console.info(line);
