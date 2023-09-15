//DOMS LESSON 1 HOMEWORK, EDITING A WEBSITE THROUGH JAVSCRIPT + DOMS LESSON 2 - EVENT LISTENERS
const body = document.body;
const head = document.head;
let pageHeading = document.getElementById("title");
let updateName = document.getElementById("dom");
const dateHolder = document.querySelector("h3");
/*The reason we are using querySelector() for this one is because it doesn't have an id and
because it is the only h3*/
const h4 = document.createElement("h4");
const orderedList = document.createElement("ol");
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");
const listItem3 = document.createElement("li");
const button = document.createElement("button");





const date = new Date()
console.log(date.getMonth()+1)//months are based off of an array, i.e. January would be "month 0"



dateHolder.innerText = `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()}`

h4.innerText = "Coding languages I am currently learning"
orderedList.append(h4) //h4 exists inside the ol, this is how it got its padding
body.append(orderedList)

listItem1.innerText = "HTML"
orderedList.append(listItem1)
listItem2.innerText = "CSS"
orderedList.append(listItem2)
listItem3.innerText = "JS"
orderedList.append(listItem3)

button.innerText = "Click Me"
body.append(button)


updateName.innerText = "My Name is Ramzan"

pageHeading.innerText = "Homework 1 is all about Document Object Manipulation (DOMs)"

body.style.backgroundColor = "Coral";




//==============================================================================================
//==============================================================================================

// DOMS LESSON 2 - EVENT LISTENERS

/* Every website has a form of an event listener

EVENT LISTENERS LISTEN OUT FOR AN EVENT

If you are on a website and you press a button, you would expect (or want) some changes to happen.
The changes that are meant to happen are indicated by the creator of the website.

E.g. if you create a button that says "click me", a user is going to press that and expect
something to happen. 
- What the button (or event handler) does is entirely up to what the developer wants it to do
but it has to be meaningful to the website, can't be random. It has to correlate with the 
website.

Event listeners - if you click on any part of the website, you can do something.
The most basic event listener would be an alert box (when you press on it, the website
responds by giving an alert). An alert is just a console log on a website (when something
happens, it responds back. Essentially just telling you that the website is responding to you)

There are hundreds of events that are possible in JS but we're focusing on the "click" event
Here's how to apply that event onto the page: (depends on where the event listener is)*/

//-first say where the event listener is going to be on the page e.g. body or head
// body.addEventListener("click", function(){
//     alert("Welcome to the website")// alert goes inside a string
//     console.log("Welcome to the website")

// })
/* have to define the event in the brackets i.e.("click") and the follow it up with what is 
going to happen, (the function is what you want to happen after the click) in this case, 
after clicking anywhere in the body element of the webpage, an alert will appear and 
say "This page says: Welcome to the website". The alert won't appear if you click
anywhere other than on the body

 NOTE: The height of the body is dependent on how many elements there are inside the body
 
 So essentially what is happening is we're running an event listener, we're looking out
 for a click, when a click is detected, the function will come into play*/

 /* if you want this event to happen when you do something else, you can do that by removing
 the function from this eventListener (body event listener) 
 The "response" function is not private to the body event listener because it was taken out of 
 the body event listener.
 
You can make some bigger changes as a result of the event listeners if you want e.g.*/

 function response(){ //(same function, just a different name)
    button.innerText = "Body has been clicked"
    body.style.backgroundColor = "blue"
    body.style.color = "white"

 }

 body.addEventListener("click", response)

 /*WHAT WILL HAPPEN? 

 When a click is detected in the body, it will send the response function out which will set
 the various style changes (rather than creating an alert and doing a console.log like
 in the first method) */


 /*PROMPTS

 Computer asks something to the user, and the user is able to respond back through a PROMPT.
 omes up just like an alert box but you can input something into the alert box
 e.g. */

 // prompt("How are you today?")
 /*after inputting something inside the box, nothing happens BUT you are able to take the 
 answer you obtain from the prompt and store it inside a variable e.g.*/

//  var responseToPrompt = prompt("How are you today?")
//  console.log(responseToPrompt)
/* your answer is stored inside the variable (responseToPrompt)

 (stores the value we get from the prompt)

 We can take this fundamental understanding of storing values from prompts and reshape it 
 for anything we want to do within the website e.g. forms or textboxes used throughout the
 website*/








