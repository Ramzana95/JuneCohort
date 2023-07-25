/* A string interpolation is just a fancy way to say combining multiple variables
together without using the plus (+) symbol or the (,) symbol. */

const name = "Ramzan"
let age = 28
const dob = 1995

console.log("my name is", name,  "I am", age,
"years old and I was born in", dob)

//an example of string interpolation would be:
console.log(`my name is ${name} I am ${age} years old and I was born in ${dob}`)

/*Arrays - just a complicated word for "list".
Items that are organised in a square bracket.
Can contain strings, numbers, booleans, undefined, null, 
and other objects (or lists within lists)
-Each variable is separated by a comma
- An array is an object*/

let array = ["bread", "milk", "cheese", "fruits"]
console.log(array)
/*position/index is not the same as the number of items. 
bread is in position 0
milk is in position 1
cheese is in position 2
There are 3 items in the list above but the computer starts with 0.
positions are always going to be the total number of items minus 1. 
So in this case, there are 3 items but only 0, 1, and 2 positions
"!=" means "not equal to"*/

console.log(array[0]) //milk will be printed in terminal/console
console.log(array[1]) //bread will be printed in terminal/console
console.log(array[2]) //cheese will be printed in terminal/console

//array.length is what we use to find out how many items are in an array.

console.log(array.length)

/* array[n]= - calling onto the array via the position is how we reassign a specific item in the array*/
array[2]= "juice" 
array[3]= "pasta"

console.log(array)

/*array.push - adds on another item to the end of the array. In our example, 
it will become a 5 item array.*/
array.push("rice")
console.log(array)
/*When we do array.push we can also create a variable and push it into the 
array if the variable has been set. e.g.*/
array.push(name)
console.log(array)
/*array.pop - removes the last item added to the array. Think of array.push and array.pop
as last item in and last item out*/
//array.shift removes the first item of the list
//array.unshift adds item to the beginning of the list
/*array.splice (index, numberOfItems) allows you to take out x amount of items 
from the list starting from whichever position number you start from e.g.*/

array.splice(0,3) //starting from position 0, 3 items will be removed
console.log(array)
//delete.item or delete.array should never be used when deleting items from a list

