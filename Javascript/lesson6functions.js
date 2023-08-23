/*Functions = statements which hold other statements (packages which hold bigger statements/
executable pieces of code)

FUNCTIONS ARE A PRIVATE PIECE OF EXECUTABLE CODE THAT IS EXECUTED ONLY WHEN EXPLICITLY TOLD

e.g. a variable might store strings or numbers etc, a function is the same sort of thing but on 
a much larger scale. 

functions are like a package that can hold loops, arrays, conditional statements, variables,
objects, and other functions inside them.

Functions are NOT GLOBAL e.g.

var age = 35 // this is global to the entire script (the entire page of code sees this variable,
reads it, and executes it). 

Variables inside functions are PRIVATE (the script can't see it, read it, nor execute it unless
the function is called upon)

(You can have a function written up on the page but it won't be executed until you call upon it)
example of how to write a function NOTE: you can name "functionName" whatever you want

function functionName(){
    
var age = 35
console.log(age)

}

functionName()
*/

function functionName (){// function parameters go into the brackets
//this is where the private piece of code is written   
var age = 35 

// the var above can't be accessed or printed unless called upon 

console.log(age)
/*need to console.log within the function and then call upon the 
functionName outside the brace to print to console*/


}// anything outside of the brace {} is a global variable

var age = 25 // this will be printed as it is a global variable (it is outside the braces)


console.log(age) //var = 35 won't get printed because it is private as it is in a function

functionName()// need to call upon functionName with brackets outside of the function braces to print it
/* both vars are running simultaneously because one is global and the other is private
therefore they do not communicate with each other, the script looks at both of them as
two different variables that have nothing to do with each other because one var is 
within the function braces and the other var is outside.

The computer skips over whatever is in the function*/

//how to write a function using the arrow method:

/*
const printAge = () => { // NOTE: printAge is the function name for this example
    const age = 28 
    console.log(age)

}
printAge()*/ // the brackets let you know it's a function

/* if you have a repeating script e.g. a script in which you ask for someone's age
10 times, instead of writing console.log(age) 10 times, you can just print off
printAge() function 10 times instead (or you can do a for loop)*/


//-------------------------------------------------------------------------------------


/* FUNCTION PARAMETERS = AKA FUNCTION ARGUMENTS. You input the parameters/arguments in 
the brackets/parentheses after the functionName.
 e.g. function functionName(ARGUMENTS GO HERE){}

 if you want to pass information through a function, you pass it through an argument.

 If a function is built properly, it can accept arguments.

 function printAge(){
    var age = 28
    console.log(age)
 } 

 ^^^ This function does not accept arguments, only prints off the predefined age that is already
 given.

 You can create a function that stores a variable (argument) for age that can change 
 throughout when the function is executed rather than giving a predefined age e.g.*/

 function printAgeAndName(age, name){ //the argument is put into the brackets 
    console.log(age) // the argument is written separately in the console.log too
    console.log(name)

 }
 printAgeAndName(1000, "Ramzan") /* the number in the brackets is passed into the function and then passed
 into the console.log() and then printed. Whatever number is written here will be printed. 
 You can add whatever you want here e.g. you can even write your name but only the first thing 
 will be printed if there is only one argument/parameter in the brackets.
 - If you write ("Ramzan", 28), only "Ramzan" will be printed because only the first argument
 is printed.
 - you can add arguments but they will print in the order that you write them so keep this
 in mind.e.g. if you write printAgeAndName() but in the brackets you write 
 ("Ramzan", 1000), computer will think "Ramzan" is the age and 1000 is the name*/

  function examGrader(){ // this conditional statement is wrapped inside a function
    var score =49

    if (typeof score === "number"){
        switch(true){
            case (score > 100):
                console.log("score can't be higher than 100")
                break;
            case (score >= 90 && score <= 100):
                console.log("A*")
                break;
            case (score >= 80):
                console.log("A")
                break;
            case (score >= 70):
                console.log ("B")
                break;
            case (score >= 60):
                console.log("C")
                break;
            case (score >= 50):
                console.log("D")
                break;
            default: 
                console.log("fail")       
        }
    }else{
        console.log (`error "${score}" is not a number`) // this will print if a number isn't entered
    }
}
//this function will only run when called upon like this:
examGrader()//otherwise, this entire function will be ignored

 // SAME EXAMPLE BUT WITH AN ARGUMENT INSTEAD OF A PREDEFINED VARIABLE (VAR):


 function examGrader2(score){// we've taken "var score" out and are now using "score" as an argument
    

    if (typeof score === "number"){
        switch(true){
            case (score > 100):
                console.log("score can't be higher than 100")
                break;
            case (score >= 90 && score <= 100):
                console.log("A*")
                break;
            case (score >= 80):
                console.log("A")
                break;
            case (score >= 70):
                console.log ("B")
                break;
            case (score >= 60):
                console.log("C")
                break;
            case (score >= 50):
                console.log("D")
                break;
            default: 
                console.log("fail")       
        }
    }else{
        console.log (`error "${score}" is not a number`) 
    }
}
examGrader2(78) /* INPUT THE VAR SCORE HERE, this is passed through the function and matched up with the suitable grade
and then passed through the console.log() and printed*/


/*-- some people online use "p1" and "p2" to mean "parameter 1" and "parameter 2" or "param1" or 
 "argument1" etc

The ideal way of a function argument working is:

you execute the Function(argument) -> does function have argument? -> if so
-> goes through function and updates variables through argument

ANOTHER EXAMPLE OF A FUNCTION ARGUMENT*/

function multiply(p1, p2){
    console.log(p1*p2)

}
multiply(10, 5) /* 10 and 5 are the parameters (p1, p2), when we console logged them, we
multiplied them 

NaN = Not a Number --- an error message that could appear*/

//-------------------------------------------------------------------------------------------
/* 
FUNCTION MANIPULATION = manipulating one function to hold another function

e.g. in a conditional statement, look at an error statement and imagine it being used 
10 different times. Having to write:
}else{
    console.log(error)
}
10 different times

it would get boring and annoying but there are times where you come across the same error
multiple times and you have to make a separate error statement for each of them.

BUT YOU DON'T HAVE TO DO THAT

INSTEAD you can create an error function e.g.*/

function errorMessage (){
    console.log("error from errorMessage function")
}
errorMessage() // this prints "error from error message" as the error message 
//this is the first error message out of the two similar ones printed in console

function examGrader3(score){ 
    if (typeof score === "number"){
        switch(true){
            case (score > 100):
                console.log("score can't be higher than 100")
                break;
            case (score >= 90 && score <= 100):
                console.log("A*")
                break;
            case (score >= 80):
                console.log("A")
                break;
            case (score >= 70):
                console.log ("B")
                break;
            case (score >= 60):
                console.log("C")
                break;
            case (score >= 50):
                console.log("D")
                break;
            default: 
                console.log("fail")       
        }
    }else{ //if typeof score is not a "number"
        errorMessage()/* whenever an error occurs, it will print the error message instead of 
        needing to console.log an error message. Saves time! */
    }
}
examGrader3("Ramzan") // an error will occur because a string has been inputted instead of a number

/* runs the function -> sees that score is defined as a number -> runs through the conditional
statement -> doesn't pass the first condition of the conditional statement as a string 
has been inputted -> runs the "else" statement which is running the 
errorMessage function -> goes up the script and looks for the errorMessage function -> prints it 
out in the console.

IT DOESN'T MATTER IF THE ERROR FUNCTION IS AT THE TOP OR BOTTOM OF THE PAGE, WHENEVER THE 
ERROR MESSAGE IS CALLED UPON, IT WILL BE PRINTED. IT DISREGARDS THE CHRONOLOGICAL ORDER

SEES AN ERROR MESSAGE BEING CALLED SO IT LOOKS TO SEE IF THE ERROR MESSAGE IS BEING CALLED
EVERY TIME*/


//---------------------------------------------------------------------------------------------

/* RETURN STATEMENTS - Allow private functions with their local variables to be accessible 
outside of that function

RETURN STATEMENTS ARE USED TO RETURN SOMETHING (A VALUE) FROM A FUNCTION!!!

When we do a return statement + variable, we can now access that variable outside of the 
function

BUT 

everytime a return statement is called, it ends the function. 
- When used in a for loop, the loop cuts off when a return statement is called. 
- When a return statement is used in a conditional statement, the conditional statement cuts off

A return statement can only hold one variable and cannot be called multiple times*/

var answer = multiply(2, 2)

function multiply(num1, num2){
    return num1*num2 // do this instead of a console.log() this will give an answer
}// "RETURNS THE PRODUCT OF THE MULTIPLICATION BETWEEN NUM1 AND NUM2"
// nothing underneath a return statement is executed. If you type anything, it comes up grey

//console.log(answer)   //the "answer" variable is storing a private variable 
//found inside the function (num1, num2)

//RETURN STATEMENTS CAN ONLY HOLD ONE VARIABLE AND CAN ONLY EXTRACT ONE THING AT A TIME


/* when you have a return statement, the variable (in this case, "answer") can be
extracted from the function which means, it is no longer going to be a private variable.

The way to access that variable is by storing it inside a global variable (in this case,
we can store it inside the "answer" variable) e.g.

var answer = multiply (2, 2);

*/

//----------------------------------------------------------------------------------------------
/* Using RETURN STATEMENTS for function manipulation

We are able to use FUNCTION MANIPULATION by using the return statement and passing it as
an argument e.g. */

function multiply(num1, num2){
    answer = num1*num2// to get the ANSWER to the sum, you have to multiply the two
    return answer //RETURNS THE PRODUCT OF THE MULTIPLICATION BETWEEN NUM1 AND NUM2
} //This is the same return statement as the one above just copied/pasted 

function addition (num){
    var answer = multiply (5, 10)//the product from the multiplication above is stored in this "answer"
    console.log(answer + num)
}

addition(25) /* this is what starts the whole thing off
// expected output = 75

addition(25) is basically the first line it processes then works backwards 
to find the functions
addition(25) sees answer, sees another function, and then works backwards to find that answer.
Doesn't go to console.log until it works out the answer to the multiply function
*/

/* When this function is executed, it sees function multiply and the return
statement and ignores it -> it sees function addition -> ignores it -> THEN it sees that
a function (addition) with an argument (25) is being called upon -> it passes 25 through the
function addition -> sees that another variable is being called (answer) which is storing
an answer inside it. This answer is set based on the multiply function being executed ->
The multiply function is then executed with the two arguments (5,10) passed through it ->
puts the arguments into the function (num1*num2) runs the answer -> 5x10 -> stores the answer
inside the new answer that has been set inside the addition function -> then a console.log is
done (answer + num) the answer, 50, which was obtained from "function multiply" is added to the
number which is passing through the functions (25) therefore, 50 + 25 = 75*/


/*function multiply(num1, num2){
    answer = "hello world! "
    return answer
} //This is the same return statement as the one above just copied/pasted 

function addition (num){
    var answer = multiply (5, 10) // calling upon 2 arguments (5 and 10)
    console.log(answer + num)
}

addition(25) "hello world! 25 would be printed in the console"

ONLY USED THIS AS AN EXAMPLE TO SHOW THAT A STRING CAN ALSO BE PASSED THROUGH RETURN STATEMENTS
*/ 




//function purpose

//function manipulation

//return statements - allow you to use private items inside a function and make them global 
