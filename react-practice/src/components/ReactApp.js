/*

How many components do we need to create?

1. nav component
2. footer component
3. card component

- We know we need to create 3 extra files for these 3 components. The application file is going to be passing
all 3 of these components in

All files must exist in src folder

components hold multiple elements

React components are there to divide your project/website into smaller subsections. These components can be
reusable

shortcut key = rfce - names function after filename

ternary conditional statement:

condition ? true statement : false statement

import to index.js to see the changes you make

creating a website which contains multiple card components so we can understand props

./ = inside the folder you are currently in

In the card component, the title, description, price, image (all the text inside the card) can be passed in
as data which is read by the card function and then placed accordingly in the correct position on the card

PROPS

function addNumbers(a, b){
    return 3+7
}
addNumber(10, 20)

 -- This function is written incorrectly as it would only answer 3+7, it wouldn't answer a+b. 

  --- It's a specific function, not generic. Instead of the user providing the numbers, the numbers have been
  predefined and hardcoded. The numbers that will be added will be 3 and 4 regardless of whatever
  parameter/argument is passed.

   --- We would need to change it to return a+b to turn it into a generic function

   Generic functions are good for utilising specific info but not holding specific info.
     -- The specific info is passed in as an argument/parameter which then manipulates the argument 
     to do what the developer wants it to do.

     SIMILARLY, props are like arguments/parameters

  The text in the card components has been hardcoded in, it is not dependent on what the user inputs
   --- We are able to extract the data from the card component and pass the data in through arguments
    --- The way we do this is by taking out all the stuff that makes it hardcoded so that we're left
    with a template of a card component.
    --- We can replace this with props
    --- We say the function is going to pass in info (props) that will be passed through when called upon -
    "function Card(props)"




*/


import React from 'react'
import Nav from './Nav.js'
import Footer from './Footer.js'
import Card from './Card.js'
import './ReactApp.css'

function ReactApp() {
  return (//going to return our html and css
    <div>
      <header>
        <Nav /> 
        </header>
        <main>
          <Card 
              image = "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg"
              title = "6 bedroom"
              description = "Beautiful 6 bedroom home with a pool"
              price = "£450 p/n"
              alt = "image of a home"

          />
          <Card 
              image = "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
              title = "4 bedroom"
              description = "pool + wifi + amenities"
              alt = "image of a home"
          />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </main>

        <footer>
          <Footer />
        </footer>


    </div>
  )
}

export default ReactApp


