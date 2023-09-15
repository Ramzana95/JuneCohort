/* create a basic website with just 1 button. when button is pressed it should randomly 
change the background colour to something else, should have at least 5 different 
background colour changes */

const body = document.body;
const head = document.head;
const button = document.querySelector("button");//button holds the event listener as shown below
const addButton = document.getElementById("addButton")



var array = ["green", "blue", "purple", "pink", "yellow", "brown", "coral", "#39522b"]



function changeColour(e){
    var generator = Math.floor(Math.random()*array.length) /*gives you a random number between 0 and 1 unless you multiply it. 
    We're multiplying by "array.length" to include every colour in the array.
    - Could also multiply by 7 because that's how many items there are in the array (6 positions)
    Math.floor() rounds a number down to the largest whole number e.g. 6.9999 would get rounded down to 6
    (Math.ceil() rounds a number up) */
    console.log(array[generator])//this will just console log the randomised colour
    body.style.backgroundColor = array[generator]//this will apply the randomised colour to the background

}

button.addEventListener("click", changeColour)/*after listening for the click event on the button, it will fire
off the "changeColour" function above*/





/* Don't use the for loop method because it goes too quickly, much easier to use the event listener method
for (let i=0; i<array.length; i=i+1){
    console.log(array[i])// goes through each colour in the array 1 by 1 very quickly
    return array[i]

}*/

/* Ways to improve this 1 button website:
 - Remember, the user (whoever is using the website) is the target audience.

 - Whenever they press the button, they'll only see the set of colours that the developer chose.

 - We can improve the website is by taking suggestions from the user, you would take suggestions by using
 an input or a prompt

 --- users might say: the website should ask the user for the colour they want the background to be, and the 
 generator should append (add) that colour to the array

 some validations would be:

 1. If the prompt has no value inputted, don't store it in the variable

 2. If the colour already exists, respond back to say it exists already

 3. If the colour doesn't exist, background shouldn't change

 4. Hexa-decimals (colours) e.g. "#39522b"

 5. Add a button which asks users to add a colour


 
 Here is how we do that:
 */

//answer to q1: 
//var response = prompt ("Which colour would you like to add to the background?")
/* the response is what the user replies to the prompt, this response is stored in var and pushed into array.
Any response that isn't a string should not be stored*/
//console.log(response.length > 0)
/*prints "false" when the prompt is kept blank because if left empty, it won't be
greater than 0 and nothing will be added to the array. If a colour is entered into the prompt, "true" will be 
printed on the console and the colour entered will be added to the array.
NOTE: anything inside a prompt will always be converted to a string. 
This is the conditional statement we would have to run: */

/* .includes() method is simple because it does a "for loop" for you, sifts through the array for you*/

/* pseudo code for how the conditional statement should be set out:

if response.length > 0, then check if the item in the var response is already included in the array,
if it is, do an alert saying the colour is in the list and send the prompt again, if not, push the new
item into the array
*/

// if (response.length > 0){//checking if empty, if not empty it'll execute another cs to check if it's already in list
//    colour(response);// if the prompt box is not empty, run the colour() function

// }   
// /*need to put it in a function so that the cs runs again if the colour you input into the prompt is already
// in the array here's how we do that: */

// function colour(colour){
//     if (array.includes(colour)){
//         alert("colour is already in the list!")
//         question()// if array already has colour you inputted, fire alert and run the question() function
//     }else{
//         array.push(colour)
//     }
// }

// function question(){
//     var response = prompt ("Which colour would you like to add to the background?")
//     colour(response)

// }

// console.log(array)

/* WHY DID WE DIVIDE IT INTO FUNCTIONS?

Because you can't rerun the same conditional statement without using a function. We had to rerun the 
prompt asking the user which colour they want to add to the background because it would only run once,
even if the colour we mentioned was already in the array.

Essentially, it looped around again if the colour input into the prompt was already in the array

The original conditional statement is still there to check if the prompt box is empty or not

NOTE: we didn't use a return statement
- If you wanted to find the result of a private function and store it inside a variable, then you would use
a return statement*/

//==============================================================================================================

//Here is how to add another button which allows you to add a new colour

// var response = prompt ("Which colour would you like to add to the background?")

// console.log(response.length > 0)

addButton.addEventListener("click", question);



function colour(colour){
    if (array.includes(colour)){
        alert("colour is already in the list!")
        question()
    }else{
        array.push(colour)
    }
}

function question(){
    var response = prompt ("Which colour would you like to add to the background?")

    if (response.length > 0){
        colour(response);
    } 
   

}

// console.log(array)







