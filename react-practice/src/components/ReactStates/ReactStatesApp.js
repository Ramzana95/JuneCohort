/*
When you press the button that has the minus symbol on it, it will then fire off the function called 
"handleMinus()"

REMEMBER VARIABLES INSIDE FUNCTIONS ARE PRIVATE, WITH RETURN STATEMENTS YOU CAN ACCESS PRIVATE VARIABLES
OUTSIDE OF A FUNCTION (MAKING THEM GLOBAL VARIABLES)

How do we modify the event handlers so that they change the number?
 - This is where useStates/Hooks come into play

   -- useState() is a hook in React. It takes a snapshot of what it is looking at.
    (In this case, it'll take a snapshot of the {number} and anytime you pass a change in the number through the 
    event Handlers, you are able to re-render that snapshot because the snapshot has been changed)
 
*/

import React, { useState } from "react";
import '../ReactApp.css'

function ReactStatesApp() {

    var [number, setNumber] = useState(0)

    const [name, setName] = useState("")

    /* The useState() variable is passing in a variable in the brackets.
    - useState() variable is an array which provides a function and a variable at the same time

    - Anything passed into the useState() is going to structure our variable to be set to that e.g. if
    you pass 0 "useState(0)" this will create a variable and it will start at the number 0.

    If it is set as a string e.g. useState("Ramzan"), we will have a variable that is stated as the string
    "Ramzan". It will be set automatically.

    The way useState works is:
    [var, function of useState(setNumber)] - both inside an array 
    */

    function handleMinus(){
        console.log(number)//shows you what the number used to be
        setNumber (number=number-1)//(number=number-1/number-- = number decreases by 1 every time)
        console.log(number)//shows you what the number is now after it's been updated
        /*the first console.log shows the snapshot of the previous number before it changes (this demonstrates
        what the useState is doing)
        */
        
    }
    //When the number(variable) decreases/increases, it's re-rendering every time the button is being pressed

    function handlePlus(){
        console.log(number)
        setNumber (number=number+1)//(number=number+1/number++ = number increases by 1 every time)
        console.log(number)
    }

   /* When we want to increase the number every time we click the + button:

    - Inside the handlePlus function, we call on the setNumber function. Essentially, the handlePlus function 
    will fire off the setNumber function which takes a snapshot of what the number is e.g. number = 0
    and we're saying the count will be be equal to number+1(number=number+1)
      - Now, everytime we press the + button, it knows what the previous button used to be (because of the 
        snapshot) and re-renders what the new number should be

        - Telling the setNumber function to reassign the new variable to be what we want it to be
    */

        function handleChange(e){ //"e" for event that will be changing
            // console.log(e.target.value)
            setName(e.target.value)

        }

 /* The useState for a string works in exactly the same way as the useState for a number. It takes a snapshot
 of what it used to be, when there is a change, it re-renders the element it's supposed to be passing into.

 We can do <p>{name}</p> so whatever is typed in the input box is shown on the screen, OR we can do
 a ternary conditional statement as shown below
        
 */
  return (

    <div>
        <button onClick={handleMinus}>-</button> 
        <span>{number}</span>
        <button onClick={handlePlus}>+</button>

        <input
          autoComplete = "off"
          value = {name}
          onChange = {handleChange}

        
        />
        <h1>Hello</h1>
        {name ? <p>Welcome, {name}</p> : <p></p>}


    </div>
    //p tag re-renders as soon as a change happens
  )
}

export default ReactStatesApp
