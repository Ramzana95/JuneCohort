//q1. From your understanding of arrays create an array with 15 items inside.

let array = ["bread", "milk", "eggs", "cheese", "yoghurt", "apples", "grapes", "mangoes", "melons", 
"watermelons", "oranges", "avocados", "pears", "potatoes", "onions"]
console.log(array)

//q2. From the array just created in the above question remove the last item in the array. You cannot alter the original array.
//array.pop()
//console.log(array)

//q3. Add an item to the end of the list. Cannot alter the original array.
array.push("bananas")
console.log(array)

//q4. Find the position of the first item, middle item and last item of the list and print them off separately.
console.log(array[0]) //bread will be printed in the console
console.log(array[7]) //mangoes will be printed in the console
console.log(array[15]) //bananas will be printed in the console

//q5. Modify 3 items in the array and print them off
array [0]= "juice"
array [1]= "pasta"
array [2]= "ice cream"

console.log(array)

//q6. Using string interpolation combine 5 different variables together

const name = "Ramzan"
const dob = 1995
let age = 28
let home = "Manchester"
let job = "teacher"

console.log(`my name is ${name}, I am ${age} years old, I was born in ${dob}. I live in ${home} and I work as a ${job}`)

//q7. Delete 2 items in the array
//array.splice(0,2)
//console.log(array)

//q8. remove the first item from the array
//array.shift()
//console.log(array)

//q9. add an item to the first position of the array
array.unshift("chicken")
console.log(array)
