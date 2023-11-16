/*
React does NOT re-render if it doesn't need to

- It renders one component, if any chages are made to a component, only that component will re-render

In order for React to create event listeners, 

- In vanilla JS we used to do button.addEventListener("click", function(e)){}

  -essentially, the event listener would run a function and do whatever we wanted it to do.

  --- In React, it's similar, but instead of adding an eventListener, we add a "Handler"

    --- a "Handler" handles the changes that will happen.

     ---Instead of button.addEventListener and telling it to listen out for the click event, the event handler
     is saying the button will have a handler and it will automatically add the event on top of it

     --- When writing a handler, it starts with "on" in order to specify what handle you are looking for e.g.
     "onClick = {}", this handles the click event. The function goes inside the braces
*/