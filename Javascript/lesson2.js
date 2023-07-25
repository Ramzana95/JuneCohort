let age = 28 //remember, you don't need to put numbers in quotation marks
console.log(age)
const name = "Ramzan" //const can never be overwritten. Remains constant.
 //let and var can be overwritten e.g.
 age = 29
 console.log(age)

 /* if you try to overwrite a const, an error will appear because const can never be overwritten, 
 it remains the same. note: The error will only appear on line 8, everything before
 that will be printed.*/

 /* 6 Types of variables:
 String - anything in between quotation marks. e.g. "Ramzan" or "28" (because the number is in qt marks)
 Numbers - anything that shows up as numbers e.g. 28 
 Null - empty
 undefined - can't be recognised because it hasn't been set, eg if no age has been written, it would
 be undefined.
 object -  things that make up other things eg array function
 boolean - true/false - important for conditional statements*/

 // the "typeof" property tells you the makings of the variable i.e. if it's a number or a string etc.
 
 console.log(typeof age);
 console.log(typeof name)

 var place = "Manchester"
 console.log(place)
 console.log(typeof place) // this is a string

 let age2 = `30` //this diagonal quotation mark (on the left of the Z key) sets the number as a string.
 console.log(age2)
 console.log(typeof age2)

 /* String Interpolation is a combination of multiple different variables. We can execute a print statement
 between multiple different variables without having to do any plus symbols by using the diagonal quotation mark (``)*/
 


 

  
