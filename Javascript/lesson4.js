// nested conditionals - something inside something else e.g.

/*if(){ //instead of executing a console.log, a second condition is "nested" within the first condition.
    if(){
        if(){

        }
    }

}*/

// if the first cs passes, the second cs will run. And this can be extended as many times as needed.

//EXAMPLE

/*if (typeof array != "object" || array.length > 5 || array.length < 5){ // Use array.length to find out how many items in a list
    console.log("Error")
}else{
    console.log("list has 5 items")
} */

/*var array = [1,2,3,4,5]

if (typeof array != "object"){ // could also say if(type of array === "boolean") || "number" etc
    console.log("Error, not an object!")
} else if(array.length >= 5 && array.length < 10){
    console.log("list has correct number of items")
} else{ 
    console.log("error, incorrect number of items")
} */

//-------------
//New method - ".includes()" used in arrays. Does all the searching in a list for you e.g.

/*var array = [1,2,3,4,5,6, "Ramzan"]

if (array.includes("Ramzan")){
    console.log("array has that item")
} */


//------------------

//SWITCH CASES - a form of conditional statement but not written in the typical way e.g.


/*switch(){ // variable you're looking inside is put in the brackets after "switch"
    case ("") // this is where the different scenarios go (checks the var)
    console.log("")
    break; (always have to write a break statement otherwise the switch-case doesn't finish)
}*/


var day = "MONDAY"

switch(day.toLowerCase()){
    case "monday": //this is checking if the var = monday
         console.log(`it's ${day.toLowerCase()}`)
         break;
    case "tuesday":
         console.log(`it's ${day}`)
         break;
    case "wednesday":
         console.log(`it's ${day}`)
         break;
    case "thursday":
         console.log(`it's ${day}`)
         break;
    case "friday":
         console.log(`it's ${day}`)
         break;
    case "saturday":
         console.log(`it's ${day}`)  
         break;  
    case "sunday":
         console.log(`it's ${day}`)
         break;
    default:
         console.log("not possible") // default will be printed if anything outside of the variables is given

    }


/* SWITCH = condition
CASE = variables

SWITCH CASES are often used as a replacement for conditional statements. 
if we have so many "else if" statements, it might be easier to put them into a switch-cases
Makes it easier to write "else if" statements*/


