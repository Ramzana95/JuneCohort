import React from 'react'

function Card(props) {
    
  return (
    <div className = 'cardComponent'>
        {props.image ? <img src={props.image} alt={props.alt}/> : <img src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" alt= "not displayed"/>}
        {props.title ? <h4>{props.title}</h4> : <h4>No title available</h4>}
        {props.description ? <p>{props.description}</p> : <p>Description not available</p>}
        {props.price ? <h3>{props.price}</h3> : <h3>£POA</h3>}
    </div>// This is now a generic card component function. None of the info is hardcoded
  )
}

export default Card

/*
Because this is html, we can't use variables as we normally do in javascript. We have to create the variable
and then call on it inside a brace {}

-- Anything inside a brace in React html elements is recognised as a variable

-- In this case, props is an argument that will be passed in. We are now going to be passing in props.title 
into the relevant section etc

   -- How do we set the props? 
    -- When we call upon the card component in the app file, we can pass arguments through there 
    e.g. if we name a prop "props.title", we would cal on "title" and give it a value in the app file
    

If the card doesn't have a price or image etc, as a developer, you don't want a blank section or 
a completely blank card component e.g. you would write "price not available" or "£POA"

Props are generally used for card components or generic functions which contain card components because
you usually have multiple card components. Other functions are typically hardcoded because you only need
one of those functions eg a navbar

- if one house has a price available, you can put that in, if another house doesn't have a price available,
we wouldn't write a price down, we can do this automatically using a ternary conditional statement.

 - A ternary conditional statement is like a one line conditional statement.
  - A normal cs looks like:

  if (condition){
    do something
  }else{
    do this instead
  }

  A ternary cs looks like:

  condition ? true statement : false statement

  - In the example of the house price, we would do something like:

  props.price ? <h3>{props.price}</h3/> : <h3>£POA</h3> 
  - All this means is if the price is given (condition is true), display the given price but if the price is 
  not given (condition is false), display "£POA" instead
  - We can use this exact same model for anything
  - Remember to put the ternary cs in a brace

  instead of <h4>{props.title}</h4> we would do:

  {props.title ? <h4>{props.title}</h4> : <h4>No title available</h4>}



6 Bedroom
Beautiful 6 bedroom home with a pool</p>
£450 p/n
*/
