function isPalindrome(word) {
  // Write your algorithm here

  //solution 1
  const flipWord = [];
  [...word].map(letter=>{
    flipWord.unshift(letter);
  });

  if(word === flipWord.join("")){
    return true;
  }
  return false;

  //solution 2
  // const wordArr = [...word];
  // let pali = true;
  // for(let startIndex = 0; startIndex < wordArr.length; startIndex++){
    
  //   const endIndex = (wordArr.length - 1 - startIndex);

  //   //ends the iteration when the middle point is reached
  //   if(startIndex === endIndex && wordArr[startIndex] === wordArr[endIndex]){
  //     pali = true;
  //     break;
  //   }
  //   //ends when letter dont match
  //   if(wordArr[startIndex] !== wordArr[endIndex]){
  //     pali = false;
  //     break;
  //   }

  // }

  // return pali;
}

/* 
  Add your pseudocode here

  ideas
  - solution 1
  - reverse the word and compare
  - iterate over each letter, unshift into a new array to reverse the word

  - solution 2
  - run two iterations in parallel one starting from the first letter and the second starting from the last letter.
  - compare each letter as it iterates over it
  - once met in the middle, end comparison and return true or break when a letter doesnt match

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
