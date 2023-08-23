//conditional statements
//A statement which essentially says "if this is true, do x, if this is not true, do y instead"
/* first you would create a variable (for the condition), then:
if (condition){
   doThis 
}else{
    doThis
}*/

/* if (condition) passes{
    do "x"
}
else{ (if it doesn't pass)
do "y"
}*/

//a common use for conditional statements would be for validation of your name on websites

//conditional statements can be extended for example:

/*if (condition){
    doThis
} else if (condition){
    doThis
}else{
    doThis
} */

//CREATING YOUR OWN CONDITIONAL STATEMENT


/*let name = "Ramzan"

if (name === "Ramzan"){
    console.log("Hello Ramzan, welcome back!")
    name = "Ramzan Ahmad"
}else{
    console.log("Idk you lol")
}
console.log(name)*/
 /* you can execute a different line too, We have changed the variable inside (name)
because we are using conditional statements to make changes to the script which prints in the console.*/

/* In JS, there are 3 types of equals signs (=)
1. Single equals sign (=) - Used for setting variables.
2. Double equals sign (==) - Used for a loose translation of something being equal to something
e.g. 1 is technically equal to the "1" that can be found in a string. 1 == "1"
3. triple equals sign (===) - Used when we're trying to say every single thing inside is equal.
(STRICT EQUALITY) 1 and "1" will never be equal because 1 is a number and "1" is a string.
*/

/*console.log("Ramzan" === "ramzan")This prints false because they are not the same.
one is capitalised, one is fully lowercase*/

console.log("Ramzan" === "Ramzan") //will print "true" because they are EXACTLY the same

let name = "Ramzan"
var age = 28
let array = ["oranges", "apples", "milk"]
console.log(array)

if (name === "Ramzan" && age === 28){
    console.log("Hello Ramzan, welcome back!")
    name = "Ramzan Ahmad"
    array [0] = "cheese"
}else{
    console.log("Idk you lol")
}
console.log(name) 
console.log(array) 

//These conditional statements are boolean (true/false)

/*you can see the changes being made in front of you in the console.
The first console log doesn't contain the change but the console log after the conditional
statement DOES contain the change showing that you can make changes to the script within a conditional 
statement*/


/* LOGIC GATES - 2 to remember

All logic gates do is allow you to add an extra condition in order for your conditional statement to 
work

AND gate - displayed as && - BOTH conditions must be met for it to work

OR gate - displayed as || - ONLY ONE consition must be met for it to work

Both logic gates are used in the same way e.g. 
if(name === "Ramzan" || age === 28) - as long as one of these conditions is met, it will work
*/ 

//Conditional statements can take "greater than" and "less than" symbols
// greater than > || greater than and equal to >=
// less than < || less than and equal to <=
//e.g.

if (array.length >=3){
    console.log("array meets criteria")
}else{
    console.log("ERROR")
}

//Conditional statements with "else if" (else if statements) e.g.
let day = "sunday" /* this variable will determine what goes into the conditional statement 
and which statement will be printed in the console.*/

if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday"){
    console.log(`${day} is a weekday`) //string interpolation 
} else if (day === "saturday" || day === "sunday"){
    console.log(`${day} is on the weekend`)
}else{
    console.log("Not Possible")
} 



