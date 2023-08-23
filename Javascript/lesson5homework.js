/* q1. Fizzbuzz task (medium)

Using a loop, print numbers from 1 to 100 but here’s the catch, multiple of 3 should print “Fizz” 
and multiples of 5 should print “Buzz”. Lastly print “FizzBuzz” for multiples of three and five.

example below (screenshot contains from 1-15) question is to continue to 100*/

/*for (let i=1; i<=100; i=i+1){
    if (i%15 === 0){// if you are comparing 2 values, use "==="
        console.log("FizzBuzz")
    }else if (i%5 === 0){
        console.log("Buzz")
    }else if (i%3 === 0){
        console.log("Fizz")
    }else{
        console.log(i)
    }
}*/
    
/*

Take the following phrase and translate it to a different word depending on vowels shown.

phrase “turpentine and turtles” 

word equivalent "UUEEIEEAUUEE”

Note for every u&e character in the phrase the word equivalent should contain 2 of those characters. 
If it is not a vowel it is not stored in the word equivalent.*/

/*var phrase = "turpentine and turtles"
var array = []

for (let i = 0; i < phrase.length; i=i+1){ //phrase length=how many characters in the phrase = 22
    if (phrase[i].toLowerCase() === "u" || phrase[i].toLowerCase() === "e"){
        //if (phrase[i] === u) means "if the letter in position i is a u"
        array.push(phrase[i])
        array.push(phrase[i]) // printed twice because the letter "u" and "e" are doubled
    }else if (phrase [i].toLowerCase() === "i" || phrase [i].toLowerCase() === "a"){
        array.push(phrase[i]) // printed once because "i" and "a" only come once
    }
}
word = "UUEEIEEAUUEE"
console.log(array.join('').toUpperCase() === "UUEEIEEAUUEE")
// array.join() method concats (joins) all the elements in an array. ('') joins the elements without gaps

console.log(`phrase is equal to ${phrase}`)
console.log(`word equivalent is equal to ${word}`)*/

/*

Take the following phrase and translate it to a different word depending on vowels shown.

phrase “turpentine and turtles” 

word equivalent "UUEEIEEAUUEE”

Note for every u&e character in the phrase the word equivalent should contain 2 of those characters. 
If it is not a vowel it is not stored in the word equivalent.*/

var phrase = "turpentine and turtles"
var equivalent = ""

for (let i = 0; i < phrase.length; i=i+1){ //for loop
    if (phrase[i].toLowerCase() === "a" || phrase[i].toLowerCase() === "e" || phrase[i].toLowerCase() === "i" || phrase[i].toLowerCase() === "o" || phrase[i].toLowerCase() === "u"){
        equivalent = equivalent.concat(phrase[i]) // .concat is used to combine 2 strings
    }
    if (phrase[i].toLowerCase() === "u" || phrase[i].toLowerCase() === "e"){ 
        equivalent = equivalent.concat(phrase[i])
    }// e and u were printed a second time because they appear twice in the equivalent thingy
}
console.log(equivalent.toUpperCase())
