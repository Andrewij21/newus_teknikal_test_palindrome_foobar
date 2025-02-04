function isPalindrome(line) {
  const formatedLine = line.replace(/\s+/g, "").toLowerCase();
  const reverseFormatedLine = formatedLine.split("").reverse().join("");
  return formatedLine == reverseFormatedLine ? true : false;
}

const line = isPalindrome("123 321");
console.info(line);
