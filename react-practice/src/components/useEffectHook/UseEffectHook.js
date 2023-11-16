/*
useEffect hook is a side hook
- a hook you can couple with useStates 

- When a component is re-rendered it forces a change or re-render to happen when a specific change
is required

- ONLY RE-RENDERS WHEN NECESSARY

- Mainly used for handling data. Allows us to process large amounts of data we get from databases/APIs and put
it into an app such as a weather app

-it is different to a usestate hook. useState hooks force an update on a variable whereas with useEffect, if
a variable hasn't changed, it won't re-render e.g.

in a useState, if the variable was "21" and it was then updated to "21" again, the useState would force it to
re-render but with a useEffect, if the variable which equalled to "21" was updated to "21" again, it would see
that there was no change therefore, it wouldn't re-render

When doing onClicks on buttons:

You can either write the function inside the braces with the onClick 
OR
You can use the arrow function inside the button itself

-----------------------------------------------------
An API is a database/data source which contains items already made up for us which we can then "fetch"

We have to "fetch" from an online source. "Fetching" grabs data from an online source and then "pastes"
it onto our website.

e.g. With a weather API, it is pretty much impossible for one person to hold all the info of the 
weather in every single city/country in the world. When we use the weather app on our phones/computers, 
the info for the weather is stored on a database which is regularly updated. All the apps do is "fetch" that
data and paste it into the app

*/

import React, { useEffect, useState } from "react";

function UseEffectHookApp() {

    const [type, setType] = useState("")

    const [items, setItems] = useState([]) //forcing the useState to be in an array

    function handleUsers(){
        setType("Users")
        console.log(type)

    }
    
    /*
    Another way of writing this but in the arrow method is:
    - NOTE: This works EXACTLY the same way as the above method

    const handleUsers = () => {
        console.log("User button pressed")
    }
    */
    //This is where the function runs (fetch statement), it will fetch what we need from the API:
   useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(json => setItems(json))
   }, [type])//This is what the "dependancy" is going to be

/* All this is doing is when we press the "Users" button, it sets the type to users and then the useEffect 
FETCHES (goes to the url and says get me the info for the "type"(users), puts the response into a json file,
then console log the json)

The dependancy allows you to only refresh when you press on the "type" (users, posts, comments)
e.g. when you press on users, it refreshes the component because there has now been a change, if you then
press on comments, it would refresh because it is changing from users to comments. If you click on
comments again, it wouldn't refresh (wouldn't fetch the API) because a change hasn't been made as you 
were already on comments. The useEffect recognises if a change has been made or not
--If you don't have the "type" dependancy set, it will make changes every single time you press on a button
--if you don't have a dependancy set at all, it will constantly create a fetch call, it will tell
the API to continue fetching something.  
  -- If you do something like that, you will come across a "rate limiter" which means you're making too many
  calls to the API and it can't keep up, this slows the app down.
    -- e.g. if someone rings your doorbell constantly even after you've told them you're not at home. They 
    continue to ring the doorbell until it eventually breaks

    --If you don't have a dependancy set, because we are using the mapping function and it is running in a
    for loop and is mapping one item at a time, it will continuously make a fetch call. The way to stop this
    is by setting a dependancy. This will cause the fetch call to only happen if the type is changed (i.e
        you clicked on posts or comments and changed the "type")
    

-------------------------------------------------------------------------------

NOW how do we display the information onto the website?

- We can do another state


*/ 

  return (
    <div>
        <button onClick = {handleUsers}>Users</button>
        <button onClick = {() => {setType("Posts")}}>Posts</button>
        <button onClick = {() => {setType("Comments")}}>Comments</button>

        <h1>{type}</h1>

        {
            items.map(content =>{
                return(
                    /*<p>{content.id}</p>Because users, Posts, and Comments all have ids, calling on
                    content.id will display the id number for users, posts, and comments. (10 for users, 100
                        for posts, and 500 for comments) but it won't display the actual content. If you
                        want to display the actual content, you would use a different method called 
                        JSON.stringify(content) inside a div e.g.*/ 
                        <div>{JSON.stringify(content)}</div>//This shows all the info due to the mapping function
                )
                })
        }
       
        

    </div>
  )
}

export default UseEffectHookApp