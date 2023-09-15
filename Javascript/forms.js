/* criteria we look for when creating a form: (what questions should we look to answer when creating a form)

1. if name input is empty, do not pass/accept the form
2. if name is correct, pass the form and alert back to the user
3. Does name meet length requirement?
4. Check if name is a string
5. Point out any errors to the user
6. Point out if successful to the user
*/

const body = document.body
const head = document.head// always the first two things you do
const nameInput = document.getElementById("name")
const form = document.querySelector("form")

//When doing a form, we add the event listener onto the form itself:

//criteria 1.

function checkName(){
    let result = false /*true statement means function has passed, false statement means function failed.
    We set this to false because we only want it to pass as true if the requirements
    are met. This forces the form to respond the way we want it to. We set the form up to fail originally
    and it only passes if conditions are met*/


    if (nameInput.value.length >= 2 && nameInput.value.length <= 20){
        result = stringRegex(nameInput.value)/*result variable stores the answer it will obtain from the
        stringRegex function below. The stringRegex function defines the pattern the parameter (nameInput.value) 
        must follow, i.e. it has to follow [a-zA-Z] after that, it checks if the parameter matches the pattern
        using the return pattern.test(param) i.e. checks if the nameInput.value only contains letters. In this 
        case it will return the statement as true. Then it will console.log "true" and return the result as 
        true and then get sent on to the next conditional statement below (if (outcome === true)*/
        console.log(result)
        
    }
    
    return result
    /*reason for return statement: need to be able to make sure of what the outcome of the function is
    going to be equal to.
    - we can store the result of this function inside a variable in the function below
    - can also run a conditional statement inside the event listener*/

}

function stringRegex(param){//param = parameter
    const pattern = /^[a-zA-Z]+$/;
    return pattern.test(param)
}/* all this function is doing is checking that the nameInput.value that was passed in matches the pattern 
[a-zA-Z] and if it does, then return it and set it equal to the param ( stringRegex(nameInput.value) )*/


form.addEventListener("submit", function(event){//instead of a click, it listens out for the submit event
    event.preventDefault()

    var outcome = checkName()
    console.log(outcome)//true or false will be printed in the console

    if(outcome === true){
        alert("form passes")

    }else{
        alert("form fails")

    }

})

//IN ORDER TO SUBMIT THE FORM, IT HAS TO GO THROUGH SEVERAL CHECKS

/* .preventDefault() stops the form from submitting if it does not pass/accept the form
-- Normally, in forms, if you press "submit", the form gets submitted, .preventDefault() stops it

- if nameInput.value.length is greater than 0, then the result is equal to "true" and the result is returned
using the return statement. The event listener is then able to access what the outcome was equal to in the 
checkName() function

from console.log(outcome), we can see what the outcome would be.

Regular Expression (RegEx) = a way to build a sequence of patterns for it to match a certain scenario
-- There is a sequence of patterns for strings, numbers, dob, emails etc which the computer can't check for
based off their data types e.g. in the input box on the webpage, we can input numbers and the form will pass
even though no one is named a number. 

-There is a regex to check if a string is entirely a string (the string will check if it is letters only
    or not)
    --regex check = [a-zA-Z] - when looking for the sequence, you need to know that it matches the 
    a-z sequence in lowercase and the A-Z sequence in uppercase

    The regex to check numbers is: [0-9]

With regular expressions, you can ask Javascript to check "does the string match the pattern of [0-9]?", 
if it does, it passes. If it doesn't, it fails.

The regex for emails is long because an email accepts letters as well as numbers and symbols, Also, 
the conditions for an email to pass are that it has to have an @ and it has to have a full stop

In the example we are working on, we will be using [a-zA-Z] as we are checking that the name is only letters.

We wouldn't do "typeof === string" because the typeof for an input box <input ___> is always going to be
a string, even if you type in numbers, they are still seen as a string. HTML forces you to have type = "text"
Javascript picks up type = "text" as a string



HOW DOES THIS FORM WORK???

Step 1. Form

Step 2. Check Name Length

Step 3. Check pattern

Step 4. Back to the form to run the final conditional statement

- After pressing the SUBMIT BUTTON, the FORM.EVENTLISTENER is fired off.
- sees the var = outcome and sets it equal to the checkName() function
(it doesn't now the outcome of the checkName function unless it goes into the function)
- It goes inside the checkName function and creates a variable called "result" and sets it to "false"
(it is set to false because if it was set to true, it would immediately pass the outcome conditional statement
    without checking if it meets the requirements)
- Then it sees the conditional statement, checks if it meets the minimum and maximum length requirement
- If it passes, it goes on to the next step which is to pass the inoutName through the fstringRegex function
to check if it matches the pattern [a-zA-Z]
- This then returns true or false depending on if it matches the regex pattern.
- If it returns "true", 
*/


