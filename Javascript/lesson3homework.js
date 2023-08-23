/*q1. Write a conditional statement to state if hero is a dc character or marvel character. 
(i.e superman would be dc, spiderman would be marvel).*/

/*var hero = "Ramzan"

if(hero === "superman" || hero === "batman" || hero ==="captain america"){
    console.log(`${hero} is a DC character`)
}else if (hero === "spiderman" || hero === "ironman" || hero === "hulk"){
    console.log(`${hero} is a Marvel character`)
}else{
    console.log (`sorry I do not recognise ${hero}`)
}
*/

//can always add more heroes (conditions) by using OR PIPES (||)

/* q2. write a conditional statement taking age as variable and what year 
group they will be in a school (i.e 11-16 will be secondary school year group, 
16-18 college anyone above optional education).*/

/* const age = 
if (typeof age != "number"){ // or you could write if (typeof age === "string")
    console.log("Error 1")
}
  else if (age < 11 && age > 3){ //have to include && because the ages need a start and end point
    console.log("you are in primary school")
} else if (age >= 11 && age < 16){
    console.log("you are in secondary school")
} else if (age >= 16 && age <=18){
    console.log("you are in college")
} else if (age>18 && age<90){
    console.log("you are in optional education")
} else{
    console.log("Error 2")
}  */

/* q3. Create a shopping list of 5 items. Now make a conditional statement that checks if the list 
contains 5 items only. if above 5 print out error and if less than 5 print out error.*/

var array = [1, 2, 3, 4, 5]

if (typeof array != "object" || array.length > 5 || array.length < 5){ // Use array.length to find out how many items in a list
    console.log("Error")
}else{
    console.log("list has 5 items")
} 

// != means "not equal to"