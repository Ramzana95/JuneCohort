const body = document.body;
const head = document.head;
const h1 = document.querySelector("h1")
const button = document.querySelector("button")
const inputName = document.querySelector("input")


// button.addEventListener("click", function(e){
//     body.style.backgroundColor = "pink"
//     var responseToPrompt = prompt("How are you today?")
//     h1.innerText = responseToPrompt
    
//     console.log(responseToPrompt)

// })

/* if I click on the cancel button or ok button without typing anything on the prompt, 
the background colour changes to pink but nothing else happens (none of the other things 
in the function take place, h1 changes to an empty string because nothing was entered 
in the prompt)

//prompt("How are you today?")

alert ("hello") // adds an alert box without looking out for a click and a function being run

 var responseToPrompt = prompt("How are you today?")
 console.log(responseToPrompt)

 h1.innerText = responseToPrompt /* the h1 will be changed to the response to the "how are 
 you today?" prompt
 
 We are able to extract the value from the <input> box element and place it into a variable

 -- When we look at forms, we are able to do things with forms based off the values inputted

 e.g. if you input your name, you are able to run conditional statements which say "does
 the value of (name inputted inside the input box) meet the requirements of xyz?" it will then
 print "true" or "false" e.g.
 */


//  button.addEventListener("click", function(e){
//     console.log(inputName.value.trim()) /*.value gives you the value inside of input (goes inside the 
//         textbox and finds the value) you can run some conditional statements here too e.g.*/
//         if (inputName.value.trim() === ""){
//             console.log("error")//when nothing is input into the input box, console will log "error"
//         }else{
//             alert(`welcome ${inputName.value}`)
//             body.style.backgroundColor = "pink" 
//         }

//     inputName.value = ""//empty string resets the box back to blank after you press the button

//  })
/* (inputName.value = "") what happened? It started off as an empty string, you added the string
(name), pressed the button, and it reverted back to an empty string again

.trim() method: every time it sees an empty space at the start or end of a string
e.g. "    Ramzan    " it cuts it off (trims it) so it would just be "Ramzan" 

Our small webpage is starting to have some logic around it i.e. "when I do this, this 
should happen", "when this is not done, don't do anything"


Another example (input colour):

if the colour exists inside of an array I create of colours, when I press the button, 
based on whichever colour has been written inside the input box, change it to that colour

*/

// var array = ["green","blue", "pink", "red", "brown"]

// button.addEventListener("click", function(e){
//     console.log(inputName.value.trim())
//         if (inputName.value.trim() === ""){//basically if nothing is input
//             console.log("error")
//         }else{
//             if (array.includes(inputName.value.trim().toLowerCase())){
//                 body.style.backgroundColor = inputName.value.trim().toLowerCase()
//             }// (if array includes the colour inputted, change background to that colour)
            
//         }

//     inputName.value = ""//resets back to empty after pressing button
    
// })

/* "click" is not the only mouse event. Another mouse event is "keypress" e.g.*/

inputName.addEventListener("keyup", (e) => {
    console.log(inputName.value)

})

/* "keypress" event vs "keydown" vs "keyup", although they are literally doing the same thing,
they are done in a different way

"keydown" gives you the value (in the console) when you hold the button down

"keyup" doesn't do a console log until you let go of the key*/

