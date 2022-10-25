function reverseString(word) {
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");

  return reversedWord;
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word);

  return word === reversedWord;
}

/* 
  Add your pseudocode here
  take a word and iterate over each letter,
  reverse the word,
  join the letters together again

  return the reverse word

  reversed word should strictly equal to word
*/

/*
  Add written explanation of your solution here
  take the word and seperate it but each letter.  
  Reverse the letters,
  Join the letters 
 the reverse word should be a palindrome when reversed. if not it is false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
