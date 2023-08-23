//Lesson 4 HW
/* q1. Write a conditional statement that takes into consideration validations 
(i.e case sensitivity). this will be entire up to you as to what the conditional statement is on. 
(if this does not make sense please refer back to the recording)*/

// Using .toLowerCase

/*var day = "Monday".toLowerCase()

if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday"){
    console.log(`it is ${day}`)
} else{
    console.log("Error")
}*/

/* IN SWITCH CASE FORM
switch(day){
    case "monday":
        console.log(`it is ${day}`) //make sure the variable (case/if) is lowercase otherwise .toLowerCase won't work
        break;
    case "tuesday":
        console.log(`it is ${day}`)
        break;
    case "wednesday":
        console.log(`it is ${day}`)
        break;
    case "thursday":
        console.log(`it is ${day}`) 
        break;  
    case "friday":
        console.log(`it is ${day}`) 
        break;
    case "saturday":
        console.log(`it is ${day}`)
        break;
    case "sunday":
        console.log(`it is ${day}`)
        break;
    default:
        console.log("not possible")  
              

} */ 











/* q2. Write a conditional statement that prints whether the phone being used is an 
Iphone or an android*/

var phone = "nokia"

/*if (phone === "iphone" || phone === "iphone 14" || phone === "iphone 13" || phone === "iphone 12"){
    console.log ("This is an iPhone")
}else if (phone === "android" || phone === "samsung" || phone === "pixel" || phone === "oneplus"){
    console.log ("This is an android")
}else{
    console.log ("This is neither an android, nor an iPhone")
}*/

if (typeof phone === "string"){ // by writing this, boolean, numbers, etc will throw up an error
   if (phone === "iphone"){
    console.log("This is an iphone")
   } else if (phone === "android"){
    console.log("This is an android")
   } else{
    console.log("phone is neither an android, nor an iphone")
   } 
}else{
    console.log("error! I don't recognise this phone") // this will be printed when something other than a string is entered
}


/* q3. Write a switch case that checks if the operation is a math operation (+,-,*,/) 
if the options is any of the options given it should give me the result of 2 variables 
created above the switch case. For example. math operation is * and the variables are 
250 & 10 then the answer should log 2500*/

var num1 = 250
var num2 = 10
var operation = "division" //this is where you can choose what to do with the two numbers

if (typeof operation === "string"){   
    switch (operation){ //switch must always be the name of the variable that you change 
        case "addition":
            console.log(num1+num2)
            break;
        case "subtraction":
            console.log(num1-num2)
            break;
        case "division":
            console.log(num1/num2)
            break;
        case "multiplication":
            console.log(num1*num2)
            break;
        default:
            console.log("operator is not recognised")
            break;

    }
}
