import React, {useState} from 'react'
import '../ReactApp.css'
// import '../Nav.js'

function ReactStatesApp2() {

    var price = 350;


 // Have to create 2 useStates, one for the "Shopping cart" and one for "total"

 /*Instead of having 2 separate useStates, we can change it so both are in one useState.

- We can change our useState to be an object, we would change it from "setTotal" to "setState" e.g.
 */
 const [total, setTotal] = useState(0)
 var [item, setItem] = useState(0)

//Remember: when calling on an object, you need to call upon the var it is coming from

//  const [state, setState] = useState({
//     price: 0,
//     totalItems: 0
//  })
/*When we want to make changes, it will be based on the snapshot we have in our "state"
 - "state" will hold the snapshot of both the "total" and the "item" 
*/

    function handleChange(){//This function will run any changes that are meant to be happening
        setTotal(total+price)
        setItem(item=item+1)
        // setState(...prevState => {//running another function which is setting the changes
        //     return (...prevState, price: prevState.price+price, totalItems: state.totalItems++)
        // })

/* prevState takes a snapshot of price and totalItems. For price, it takes the previous price and adds on the
set price on top of that. totalItems go up one at a time. If we only want one of these to change, we
would take out the one we don't want to change from the return statement
If you only want to make changes to one thing (total or item), we would use a "spreader"
- A spreader is saying that we want to take a snapshot of both items and in any other changes we want to see
 happening, the spreader will keep track of both items or the number of items in our object
*/
    }


  return (
    <div>
        <header>
            <h3>Houses.io</h3>
            <nav>
                <ul>
                    <li><a href='https://www.w3schools.com/'>Home</a></li>
                    <li><a href='https://www.w3schools.com/'>Contact</a></li>
                    <li><a href='https://www.w3schools.com/'>Log in</a></li> 
                    <li>Total: {total}</li>    
                    <li>Basket: {item}</li>                  
                </ul>
            </nav>        
        </header>
        <main>
            <div className = "cardComponent">
                <img src = "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"/>
                <h4>4 Bedroom</h4>
                <p>Beautiful 4 bedroom home with a pool</p>
                <h3>£{price}p/n</h3>
                <button onClick = {handleChange}>BUY NOW!</button>





            </div>

        </main>

    </div>
  )
}

export default ReactStatesApp2