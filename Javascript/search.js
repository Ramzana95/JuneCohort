const body = document.body
const list = document.querySelector("ol")
const button = document.querySelector("button")
const newButton = document.getElementById("newCar")
const input = document.querySelector("input")//car


button.addEventListener("click", function(e){

    let carInList = false /* we set this to false because we only want it to pass as true if the requirements
    are met. This forces the form to respond the way we want it to. We set the form up to fail originally
    and it only passes if conditions are met*/


    let isInputValid = stringRegex(input.value) 
    console.log(isInputValid)//returns false if it isn't a string
    
    // console.log(input.value)
    // console.log(list.children)
    /* list is the parent (ol), children are the items in the list (li) 
    all parents in html are "collections", e.g. body, head, they all have collections (a list of children)
    console.log(body.children)
    " .children " - this property in javascript gives us a collection of child elements inside whichever
     parent tag that we are looking inside*/

    if (input.value.length > 0 && isInputValid){/*for loop will run if the input box is not empty and if 
        it meets the requirement of being a string. (4. if empty, do nothing)*/

        for (let i=0; i<list.children.length; i=i+1){
            console.log(list.children[i].innerHTML.toLowerCase())//console logs the list as it loops through it
            if (input.value.toLowerCase() === list.children[i].innerHTML.toLowerCase()){
                carInList = true 
                
                //it's true if the car is already in the list or if the input.value is higher than 0
            }/* " .toLowerCase() " is an important validation step becuase whatever is in the 
            list .toLowerCase() will be compared to whatever is inputted .toLowerCase().
            If we didn't add the .toLowerCase(), it would've differentiated between "BMW" and "bmw". It would've
            added "bmw" to the list as if it was different to "BMW" which was already in the list*/
        }
        if (carInList){// basically saying if carInList is true
            alert ("car is already in the list")//(3. if car is already in the list, don't add it again)
    
        }else{// have to add new items from the false section ("false section" meaning car was not found in list)
            // alert ("Add car to the list")
            const newItem = document.createElement("li")
            newItem.innerHTML = input.value //whatever was input into the box is what will be added to the list
            list.append(newItem)
        }
    }else{
        alert("Invalid input")

    }

    input.classList.add("dontDisplay") /*"classList.add" adds a new class on top of the input.
    In this case, what is going to happen is: the input tag (box) should disappear when we press the "add" 
    button (due to the "display: none" in the css file) 
    
    With getElementById you can grab an element, you can edit properties such as className or classList (a 
        list of class names that you can edit. you can add and remove class names from that list). When you
        add class names to an element, it will then apply the css bound to that class name.

        First, you get the element, then you check if the text matches the search term. If you have a match,
        then you get that element whose id is known to you. I would bind unique IDs. You get the id from the
        element you are iterating over with the for loop and then apply the class name.

        In the code when you use a for loop, you check innerText to check the text in the element. You can use
        the id selector to check the name of id. If you get a match in the for loop (if text matches search term)
        then you can do getElementById.classList.add
    */
    
    /* using a for loop to sift through every item inside the list. 
    Then we can couple that with whatever is inside the input box and compare the two. So it will recognise if
    something is already in the list or not e.g. you type "BMW" in the input box, and the first item in the
    ol is equal to whatever is in the input, that would mean you have found that item in the list and the
    loop ends.
    
    if a car is input and it goes through the loop and it doesn't match anything already in the list, then
    you can add it to the list*/
})

newButton.addEventListener("click", function (e){
    input.classList.remove("dontDisplay")
    // input.classList.add("display")
})


function stringRegex(param){//param = parameter
    const pattern = /^[a-zA-Z]+$/;
    return pattern.test(param)//2. error message if numbers are added (regex)
}









/* we want to add to the list of cars or search through the list of cars

1. if the car is not in the original list, add it to the list

2. error message if numbers are added (regex)

3. if car is already in the list, don't add it again

4. if empty, do nothing

*/