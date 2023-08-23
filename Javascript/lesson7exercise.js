var word1 = "thisissomethingthatcontainsnothing"
var word2 = []//thisomengac

for(let i=0; i<word1.split('').length; i=i+1){
    if (!word2.includes(word1.split('')[i])){
        word2.push(word1.split('')[i])
    }

}
console.log(word2.join(''))
// expected outcome: thisomengac

/* i is smaller than the length of the word when it is split up into individual letters

if (!word2.includes(word1.split('')[i])) = if word 2 does not include the character I am 
currently on "[i]"

 word2.push(word1.split('')[i]) = push the character I am currently on into this word2 array

 basically: split word up, add letters into a new array, compare with the new array
*/
