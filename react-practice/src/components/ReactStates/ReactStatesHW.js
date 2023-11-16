import React, {useState} from 'react'
import '../ReactApp.css'

function ReactStatesHW() {

    var [age, setAge] = useState(28)//setAge is a function which holds the beginning age e.g. function setAge(age)
    //Anything inside useState brackets i.e.("here") is going to be placed in the initial variable set
    //const [age, setAge] = useState(21) means age = 21
    const [numberSiblings, setNumberSiblings] = useState(3)
    // var age = 21;
    // var numberSiblings = 4

    const [name, setName] = useState("Ramzan")// means name = "Ramzan"

    function handleOlder(e){
        console.log("New age rendered")
        //setAge updates the age variable
        // setAge(age+1)
        setAge(prevAge => prevAge+1)//This is the correct method to use
    }
 /*
- prevAge holds a snapshot of the previous age e.g. prevAge holds 21 and then does 21+1 and then holds 
the updated number too. setAge(age+1) just holds what is in the useState brackets and doesn't know what it used
to be
*/

    function addMoreSiblings(e){
        console.log("Sibling added")
        setNumberSiblings(prevSiblings => prevSiblings+1)
    }


    function handleNameChange(e){
        if (e.key === "Enter"){
            setName(e.target.value)//"e" refers to the event which is when something is entered into the input box
        }
    }

  return (
    <div>
        <input 
        placeholder='Enter Name'
        onKeyDown={handleNameChange}
        />

        <h1>My name is {name}</h1>
        <h1>Today I am {age} years old</h1>
        <h2>I have {numberSiblings} siblings </h2>

        <button onClick = {handleOlder}>Get Older!</button>

        <button onClick = {addMoreSiblings}>More Siblings!</button>


    </div>
  )
}

export default ReactStatesHW