/* .split() method is used when you want to divide a string into smaller strings (substrings)
with a separator.
- creates an array of all the words in the string */

let string = "Ramzan";
let array = string.split('').reverse().join('');//passing a space as the separator
/* the "splits" will happen every time a space comes in the string so every time 
it comes across a space, it will "split" that word
console.log(array) // ["It", "is", "a", "nice", "day", "today."]*/
console.log(array)

//let string2 = "I am 28 years old"
//let array2 = string2.split("")// this will now separate each letter individually
//console.log(array2)


//-------------------------------------------------------------------------------------------
/* function palindrome(word){
    if (word === word.split('').reverse().join('')){ 
// if the word you pass through the function
    console.log(`${word} is a palindrome`)
    }else{
        console.log(`${word} is not a palindrome`)
    }
}
palindrome("ramzan")

var word = "ramzan"
var reversedWord = ""

for (let i=word.length-1; i>=0; i=i-1){
    reversedWord += word [i]
}
console.log(reversedWord) // this prints out the word in reverse. Checks to see if the loop works

if (word === reversedWord){
    console.log(`${word} is a palindrome`)
}else{
    console.log(`${word} is not a palindrome`)
}
//---------------------------------------------------------------------------------------------
function palindrome(word){
    if (word === word.split('').reverse().join('')){
        console.log(`${word} is a palindrome`)
    }else{
        console.log(`${word} is not a palindrome`)
    }
}
palindrome("john")*/

console.log(Math.floor(999.9999999))


// to comment lots of things out, highlight everything and 
// press cmd and 
// forward slash!