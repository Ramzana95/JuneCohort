// DOMs

/* How to create Javascript variables:

When we want to make changes to our html page, we need to specify where the changes are going 
to happen. e.g. html is broken down into 2 main semantics, the head and the body.

If we want to make changes to the body, we have to say this specifically in Javascript by doing:
document.body

"document.body" means it's taken the html document and is looking for the "body" element of the 
document 

"document.head" is the same thing except now it's looking for the "head" element */

document.body

document.head

/* the <script> tags don't necessarily need to be at the bottom of the page. You can use
attributes such as "defer" e.g. <script src="doms.js" defer> </script> which will render the JS
last. The only reason you would want JS to be at the bottom is because you would want the website
(page) to render and then you want the script to render afterwards so that the webpage loads
quicker and to prevent unknown behaviours on the webpage

-- If you have the script tags at the top e.g. in the <head> part, and you make style changes 
to the page such as setting the background colour to blue but the script tags are above this 
style change, the JS style changes will be applied instead. e.g.

Basically, if you put the <script> tag higher up on the page, it will render first and apply 
those JS changes to the page. This is why we want the JS to be rendered last so we put the 
<script> tags at the bottom of the body.

-------------------------------------------------------------------------------------------------

If we want to make changes to our html page, we can create html element tags in Javascript and
apply them to the body e.g. */

// document.body.style.backgroundColor = "pink" remember to use camelCase, even though this is css


// "in the html document, on the body, add a style that will change the background colour to pink"

// you can assign document.body as a variable to make it shorter to type out e.g.

const body = document.body;
const head = document.head;
/*this makes it easier because now rather than writing one long line of code, you can break it 
down into chunks.

NOTE: anytime you do DOM work, when you create a new variable, write them at the top of
the page because it makes it easier to read and you can always refer back to them. (ORGANISED) */

body.style.backgroundColor = "red"; // making direct style changes to the body

/* Even though this is a Javascript file, we don't need to run node ./Javascript/doms.js in 
the terminal. Node was only for when we wanted to see our changes to the javascript*/

console.log("hello javascript file is connected")//just to check that the js is connected

/*IF YOU WANT TO CREATE AN ELEMENT, there is a predefined property in Javascript that states you
can create an element. If you wanted to create a title, this is how it would work: */

const title = document.createElement("title")
title.innerText = "DOMs LESSON 1"

/* createElement = creates an element e.g. <title> </title> 
innerText / innerHTML = adds text in between the tags

To combine these two and to add them onto the html page in the designated section,
we have to come up with another method that will allow us to force this title variable to be 
added on to a specific section. 

This method is called the APPEND METHOD. We want to add the title to the head section: */

head.append(title);

/* similarly, if you want to add this to the body, you would do:

body.append(title);

if you do not write these 3 lines, you would need to write it like this:

document.head.append(document.createElement("title").innerText = "DOMs LESSON 1")

After making these changes, you will notice the html file is still the same but changes have 
been made. (A title has been added despite there being no title tags in the html file). The virtual
DOM has been updated to include a title

5 different ways to select an element from the html page and make direct changes to it:
1. querySelector
2. querySelectorAll
3. getElementById
4. getElementByClassName
5. getElementByTagName

If we want to update a html element, there are many ways that we can specifically choose
that html element through Javascript */ 

//==================================================================================================

/* HOW TO UPDATE AN ELEMENT

When an element already exists on a webpage, we can specifically choose that element in our
Javascript file.

If you wanted to identify a h1 or a title or xyz, you would create a variable*/

// FIRST METHOD: querySelector() picks the first element it sees which matches what it is looking for e.g. 

//const pageHeading = document.querySelector("h1")// looking for anything that has h1 in it

/* This will see the first <h1> and pick it immediately. (Doesn't get to choose which one it picks)

"=" means you are assigning something to something

When assigning something in html, you need to specifically say that you want to change 
the innerText
(the innerText in the h1 is currently "...")

Here's how we change it:
*/

//pageHeading.innerText = "Tuesday" // changes from "..." to "Tuesday"

/* same as when we assign a new value to something in JS e.g.
var age = 25
age = 28

age = 28 is the one that would be printed*/

//===================================================

/* if we wanted to ignore the first <h1> (<h1>...</h1>) and make changes to the 
second <h1> (<h1>Monday</h1>), we would apply an id to the one we want to make changes to in the 
html file itself e.g. 

<h1 id="heading">Monday</h1>
("heading" is the id)

*/

const pageHeading = document.getElementById("heading")
pageHeading.innerText = "Wednesday" //changes from Monday to Wednesday

/* 1. create an element p and add anything inside

       2.  make some style changes to the first h1

       3.  create a container and make style changes to it

       4.  make text changes to the first h1 */

       //1.

       const paragraph = document.createElement("p")
       paragraph.innerText = "this is part of the paragraph tag we just created in JS"
       body.append(paragraph);/*remember: Javascript works in chronological order, 
       looks at the order in which things are appended*/

       //2.

       const firstHeading = document.querySelector("h1");//"identify the first h1 on the page"

       firstHeading.style.color = "white"// chages ellipsis to white

       //3.

       const container = document.createElement("div"); 
       container.style.width = "200px"
       container.style.height = "200px"
       container.style.backgroundColor = "white"
       container.style.border = "1px"
       container.style.borderBlock = "solid" 
       container.style.borderColor = "blue"
       body.append(container)

       //when making style changes in JS, you have to do everything separately
       //if it already exists on the page, you don't need to append it, if it doesn't exist, you do

       //4.

       firstHeading.innerText = "this has been updated from the ellipsis to this text"






       












