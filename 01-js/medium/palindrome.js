/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  // convert str into lowercase 
  str = str.toLowerCase();
  var strt=0,end = str.length-1;
  //check if starting and last index have same char or not 
  while(strt<=end){
    //escape if you encounter a  char out of this range [a,z] .
    if(str[strt]>'z'||str[strt]<'a'){
      strt+=1;
      continue;
    } 
    if(str[end]>'z'||str[end]<'a'){
      end-=1;
      continue;
    }

    if(str[strt]!==str[end]){
      return false;
    }
    strt+=1;end-=1;
  }
  return true;
}

module.exports = isPalindrome;
