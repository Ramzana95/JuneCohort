/*
<MoviesCard 
            image = 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
            title = "Avengers"
            genre = "Action"
            description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
---------------------------------------------------------------------------------------------------------------
    MAPPING

    - A quick way for us to be able to get through all the data we have by "mapping" it against something else

    - The mapping function is essentially like a for loop. All it does is run through all your data and map
    the items it finds against the props that you have set.

    - The mapping function offers another way of looping through an array. Essentially, it loops through the 
    array and matches the items in the data/array to the props you have set

    The way we would do it is by importing data from a json file e.g. 

    import data from './data.json'; (This is technically a database)

    and then we would create a variable for the data e.g.

    const moviesList = data.map((item) =>{ 
        return (
            <MoviesCard 
               image = {item.image}
               title = {item.title}
               year = (item.year)
               genre = {item.genre}
               description = {item.description}
            />

        )
    }

    -- For this to work, you have to call the variable (moviesList) in the <main> section

    -- To put a space between genres (if films have more than one genre eg action comedy), we would do
    .join(" ")

    -- doesn't have to be called "item", can name it anything. Item is just referring to the position that 
    the array is currently on (like the iterator [i] in a for loop)

    -- In theory, the mapping function needs to have an id or a "key" for every single component created so it can 
    differentiate between components. If no id is set and you make a change, it doesn't know which component
    you're making a change to.

      -- The way we would add an id/key to many pieces of data is by setting a variable (var) called "number"
      and set it to 0 and in the card component, we would add a key prop

      e.g. var number = 0

      return(
        <MoviesCard 

        key = {number ++} -- this will iterate through every single card component and increase the number 
        by 1 each time

        in the Card file, we would do:

        <h6>{props.key}</h6>
        
        />
      )


*/

import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import '../ReactApp.css'
import MoviesCard from './MoviesCard'

function App() {


  return (
    <div>
        <header>
            <h2>Movies.io</h2>
            <Nav />
        </header>

        <main>
           
        </main>

        <footer>
            <Footer />
        </footer>

    </div>
  )
}

export default App