/* q1.

suppose we have a list of numbers [1,2,3,45,90,125,2001,1001]

identify and print the largest number in the array. e.g example above 2001 should be the answer */

// method 1
const array = [1, 2, 3, 45, 90, 125, 2001, 1001]
//console.log(Math.max(...array))
// ellipsis (...) is the "array spreader" (spreads out the array)

//method 2 - how to do the same question without a spreader and math.max:

function findLargestValue(array){
    var list = [0] /* var list = [] creates empty array. Gonna compare the array with whatever is 
input in these brackets. If the value in the square brackets is greater than the number it is being 
compared with, it will be compared with the next value. If the value it is being compared with is 
greater, that will replace the value in the square brackets*/
for (let i=0; i<array.length; i=i+1){
    if (list [0] < array [i]){//if list position 0 is less than array position i (list/array are different)
        console.log(list)
        console.log(list [0] > array [i]) /* asking if 0 is greater than array[i] (array[i] will start
        from 1, then go to 2, 3, 45 etc, it changes automatically due to the loop) 
        returns false and then 0 is replaced by 1 (list.shift() takes 0 out and list.push puts in the
        next number)
        Then asks if 1 > 2, returns false and 1 is taken out of the squared brackets (var list []) 
        due to the "list.shift()" below and replaced with 2 (due to list.push (array [i]) the other
        numbers in the array are shifted and pushed until the largest value is found. Process is 
        repeated because of the loop*/

        list.shift() //takes out the smaller value
        list.push (array [i]) //puts in the greater value from the array

    } 
}

console.log(list)
}
findLargestValue(array)


// var word1 = "name"
// var word2 = []

//word1.split()
// ["n", "a", "m", "e"].reverse()
// ["e", "m", "a", "n"].join("")
// ["eman"]
// "eman" = word2
// if true then palindrome


/* q2.

lets say we have a word “thequickbrownfoxjumpsoverthelazydog” remove every character that 
appears more than once (will need to search for a method in js that checks if a string holds 
the same character already). so the answer should reveal “thequickbrownfxjmpsvlazydg” */

var word1 = "thequickbrownfoxjumpsoverthelazydog"
var word2 = [] //empty array

// function repeatedCharacters(word){
//     word = word1.split('')// word is word1 split up into individual letters
//     console.log(word1.split('')) //splits word1 into an array and puts every letter into individual characters
// /* when the word is split up into individual characters, you can then use the .includes() method.
// .includes() checks an array to see if a value already exists in the array*/
// for (let i = 0; i < word.length; i=i+1){
//     if (word2.includes (word[i])){/*[i] is checking each individual letter one by one (i++/i=i+1)
//     need to do word2.includes() because we are trying to push the new characters into the new empty array*/
//        console.log("nothing") //if word includes word position i, nothing will happen
//     }else{
//         word2.push(word[i])
//     }
// }
// console.log(word2.join(''))// .join() joins all the individual letters up

// }
// repeatedCharacters(word1)

/* WHAT HAPPENED???
 word1 is split into individual characters. 
 We then loop through the individual characters 
 if word2 (empty array) includes that character e.g. "t" or "h" etc, don't do anything but if it
 doesn't have that character, add it onto the word2 array
 Every time it sees a repeated letter, it will ignore it and console.log "nothing"
 "nothing" is console.logged every time it comes across a repeated letter.
-----------------------------------------------------------------------------------------------
 The conditional statement used in this example forces you to check if the letters are repeated
 and if they are repeated (i.e. they've already been pushed into the new empty array), "nothing"
 is printed. This conditional statement can be made shorter. 

The "else" statement is where the action is happening, letters are being added into the new 
word2 array.

WAY TO MAKE IT SHORTER: */

// function repeatedCharacters(word){
//     word = word1.split('')
//     //console.log(word1.split('')) 
// for (let i = 0; i < word.length; i=i+1){
//     if (!word2.includes (word[i])){// the "!" changes meaning to "if word2 does NOT include"
//        /* this is not efficient, ideally, you just want to push in the 
//        letters that aren't repeated to make it rather than including an unnecessary step*/
//     }else{
//         word2.push(word[i])
//     }
// }
// console.log(word2.join(''))

// }
// repeatedCharacters(word1)

//----------------------------------------------------------------------------------------------

function repeatedCharacters(word){
         word = word1.split('')

     for (let i = 0; i < word.length; i=i+1){
         if (!word2.includes (word[i])){
            word2.push(word[i])
         }
     }
     console.log(word2.join(''))
    
     }
     repeatedCharacters(word1)

     /* This method makes the process shorter.

     This new conditional statement asks if a letter is NOT included in word2, if not, it then 
     pushes that letter (word[i]) into the word2 array.

     In a normal conditional statement, the if part is the true statement and the else part is
     the false statement. 

     What we have done in this example is manipulate (change) the conditional statement to look
     for the false part first using the "!"
     - skipped over the true statement and immediately jumped into the false statement
     - allows you to reduce the conditional statement and make it smaller*/



