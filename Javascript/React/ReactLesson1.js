/* React is just a framework within Javascript.

- Does everything HTML, CSS, and Javascript do but rolled into one

WHAT IS THE TECHNICAL USE FOR HAVING A FRAMEWORK LIKE REACT?

- React produces work much quicker, this is the whole point of a framework.

-With HTML, CSS, and Javascript combined, you are able to create single page applications, websites,
intelligent apps however, it can take a while to create these apps, especially when working with DOMs.

- The idea of React was to implement a new structure/new codebase which eliminates having to code through DOMs
which makes it slower to produce a project.

One of the key factors about React is that every property created in React can be split up into components.

A page, navbar, img, div can be their own components.
(components meaning ISOLATED CONTAINERS)
-These isolated containers can be shifted around and remodelled the way you want them to be depending
on how you want to design/structure your website.

e.g. imagine there is a big box (container) with many smaller boxes inside and you want to organise it in
a certain way. We are able to do so by dividing the page into smaller subsections and having one page holding 
all the different subsections. 

-The reason for doing this is because each component(container) can be reusable meaning that when designing 
a website, we're able to reshape/redesign the website as many times as we want in different shapes/forms/
structures. 

e.g. if a website has a navbar component, we are able to extract that navbar and import it into a different 
page/project/website by saying something like "import navbar from x folder". This speeds up the process 
of creating a website.

- we pass information using props

React looks like Javascript and HTML in one

React components live inside a function

The entire app/website is produced inside of a function and then displayed in the DOM (Document Object Model)

Traditionally, when making a website, the HTML, CSS, and Javascript would all be in separate files, With React,
HTML and Javascript are in the same file. You can add CSS on top if you want.

Logics are at the top of the page, HTML underneath

When we are creating our React components, it is split up like so:

- function functionName(nameOfComponent)(){

}

- You have the function which has the name of the component. The name of the component tends to contain the
name of the page it is on e.g. if your website contains social media links, you can name the component
which contains the social media links "socials"

- When we create our component, it has to live inside a function. Components are technically functions in React

- When displaying components on a website through HTML, we HAVE to use a return statement
  - The return statement is the outcome of the component, this is what will be displayed on the website
    - it will be displayed in HTML (technically displayed in JSX which is the React framework)

    - In JS, when we call on a function and we want to access that function by another function, we use a
    return statement. (RETURN STATEMENT MAKES A PRIVATE VARIABLE/PRIVATE PROPERTY INSIDE A FUNCTION ACCESSIBLE
    TO OTHER FUNCTIONS), in React, it allows us to access a function from a different page by exporting 
    the function and importing it elsewhere

- CREATE ONCE, USE EVERYWHERE - create a component once and you can use it whenever you want
  - You can pick apart and recreate a website very quickly 

  - If you wanted to use a component elsewhere, you wouldn't have to recreate the function or copy/paste it, 
  because it has already been created. All you have to do is call upon it (import) and it will then be displayed from 
  somewhere else

  - With HTML you have to use <link> element to show that you are using a CSS file:

  <link rel = 'stylesheet' href = './folder'></link>
  
  In Javascript, there is no link element. It is called the "import" element in JS. All you would do is 
  say you are importing something from a folder (you have to name the folder)

  - You call on the function you want to import, it gets imported to the new file. The page reads the 
  new function that was imported. If the function you are importing also has a css page imported onto it, that
  gets read too. (The CSS file doesn't technically get exported)

  - The CSS is not difficult to keep track of hence why React just has JS and HTML 

  - It is displayed onto a page using DOMs, React has its own virtual DOM

  - To create a new root element/ make(render) a React element, pass the DOM element to
  ReactDOM.createRoot(), and then pass the React element to root.render() e.g.

  const root = ReactDOM.createRoot(document.getElementById('root')); 
  root.render()

     - All this^ is saying is that we are creating a root element, the new root is being created inside the 
     React DOM

     - The "root" DOM node looks like this:
     
       <div id="root">  
       
       </div>

         -- everything inside this div will be managed by React DOM
         -- ALL of your Javascript and ALL of your HTML (JSX = Javascript and HTML together) is displayed on
            just one single line in HTML inside this root DOM node. (line 100)

        -- ALL you need is an id called "root", it doesn't even have to be in a div, the id can be anywhere,
        even <body id = "root"> </body>
          --Obviously, you need the <html> tags and the <body> tags

        -- Don't need to touch ANYTHING in the PUBLIC FOLDER


 - To run a React project, we have to run it through a server, doesn't run the way a HTML page does, you have 
 to live run it through a server

 SOME RULES TO FOLLOW ON REACT:

 - <img> tags require alt

 -React is very strict in how it works
  - a return statement can only return ONE thing meaning it can't return more than one div (It can't extract 
  something from a function and make it visible elsewhere more than once at a time)
    - The loophole to work around this is by putting the entire component inside a div
      - The reason why we don't put the component inside the body element is because that is already being
      used. Body contains the div element which has the root, and the root contains the entire React app.
       - plus, you can have multiple divs - parent divs which contain child divs etc



 - Don't require "index.css"

 - In React, if it finds there to be an error eg you are importing something that doesn't exist,
 it will crash the entire application. Your application can't run if there is an import that doesn't exist

- "class" in React couldn't exist in the same manner as it did in HTML so one of them had to change.
  - "class" was changed to "className" in HTML.
    - You still call on a className in CSS the same way though (with a fullstop followed by the class name)






EXAMPLE OF HOW TO WRITE A COMPONENT:

function App(){
    var name = "Ramzan"

    return(
        <div>
            <h1>hello first React lesson!</h1>
            <h1>[name]</h1> This is how we pass in a variable in React (JSX)
        </div>
        
    );

}

export default App;


-REMEMBER, FUNCTION NAME MUST BE EXPORTED UNDERNEATH THE FUNCTION (IN THIS EXAMPLE, WE WOULD EXPORT (APP))
 - Name of function must start with a capital letter.
- Name the file you're creating something the function can actually exist on
- Can't have two divs which are siblings (i.e. both on the same line) You can ONLY have ONE parent div at a time
- Return element can't return more than one element at a time

- All logics go before the return statement like in normal Javascript. (variables etc.)
- to pass in a variable, we DON'T need to use the method we used in DOMs i.e 
   const h1 = document.querySelector ("h1")
   h1.innerText = name

   can name files .js or .jsx - they both work the same

   npm start runs the index.js file
*/







