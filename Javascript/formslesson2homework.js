/*HOMEWORK - VALIDATION CHECKS FOR LAST NAME AND EMAIL
would need to do regex for email but matches similar pattern as the stringRegex 
function except the pattern should be different for email*/


/* criteria we look for when creating a form: (what questions should we look to answer when creating a form)

1. if name input is empty, do not pass/accept the form/ same for email
2. if name is correct, pass the form and alert back to the user/ same for email
3. Does name meet length requirement? (doesn't really matter for email)
4. Check if name is a string
5. Point out any errors to the user
6. Point out if successful to the user
*/

/* 
1. if email input is empty, do not pass/accept the form
2. if email is correct, pass the form and alert back to the user
3. if email is valid, send correct response back to user (validity response)


-- going to have to create a function for email regex and a checkEmail function 
*/

const body = document.body
const head = document.head// always the first two things you do
const nameInput = document.getElementById("name")
const form = document.querySelector("form")
const lastNameInput = document.getElementById("last-name")
const emailInput = document.getElementById("email")

//When doing a form, we add the event listener onto the form itself:


function checkName(){
    let result = false//true statement means function has passed, false statement means function failed
    if (nameInput.value.length >= 2 && nameInput.value.length <= 20){
        result = stringRegex(nameInput.value)
        success(nameInput)
        /* You can run a success function if true*/
    }else{
        error("does not meet required length")// this needs to send out a message. Success() doesn't need to

    }


    return result   
}
    


function error(message){//the error message that will be shown is "does not meet required length"
    const outputMessage = document.querySelector("small")
    outputMessage.textContent = message
    nameInput.style.borderColor = "red"
    lastNameInput.style.borderColor = "red"
    emailInput.style.borderColor = "red"
    
    outputMessage.style.color = "red"


}
//textContent is the same as using innerText

function success(){
    nameInput.style.borderColor = "green"
    lastNameInput.style.borderColor = "green"
    emailInput.style.borderColor = "green"
    
}



function stringRegex(param){//param = parameter
    const pattern = /^[a-zA-Z]+$/;
    return pattern.test(param)
}/* all this function is doing is checking that the nameInput.value that was passed in matches the pattern 
[a-zA-Z] and if it does, then return it and set it equal to the param ( stringRegex(nameInput.value) )*/

function checkEmail(){
    let result3 = false

    if (emailInput.value.length > 0){
        result3 = emailRegex(emailInput.value)
    }

    return result3
}

function emailRegex(){
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/
    return pattern.test(emailInput.value)

}

function checkLastName(){
    let result2 = false//true statement means function has passed, false statement means function failed
    if (lastNameInput.value.length >= 2 && lastNameInput.value.length <= 20){
        result2 = stringRegex(lastNameInput.value)
        // console.log(result2)
        
    }
    return result2
}/* "checkName()" and "checkLastName()" functions are exactly the same because they're both checking the same 
things. Both are checking for strings and names. When we test the website now with the checkLastName(), the 
form fails unless the input in the "last name" box passes. The only difference is "lastNameInput" instead 
of "nameInput" and "result2" instead of "result"

Method2 - Instead of copying/pasting and switching over the names of the functions as we did above, we can 
also remove the checkLastName() function completely and just pass "param" into checkName() "checkName(param)" 
and instead of nameInput.value, we can just do param.value instead. Then we pass "nameInput" through
"var outcome = checkName()" and "lastNameInput" through "var result2 = checkName()"
----- With the second method, we only need to add one new line of code "var result2 = checkName(lastNameInput)
Because of this new line of code, the "checkName() function is checking both the nameInput as well as
the lastNameInput*/


form.addEventListener("submit", function(event){//instead of a click, it listens out for the submit event
    event.preventDefault()

    var outcome = checkName(nameInput)
    var result2 = checkLastName(lastNameInput)
    var emailOutcome = checkEmail(emailInput)
    // console.log(outcome)
    //true or false will be printed in the console

    if(outcome === true && result2 === true && emailOutcome === true){// can take "=== true" out and it still works
        alert("form passes") // only if all 3 are true does the form pass

    }else{
        alert("form fails")

    }
})