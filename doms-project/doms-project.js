/* The project is for  you to connect the js doms to make the search work so when you search for 
items it returns only 1 of the cards and not all of them. 
1. if empty, do nothing
2. error message for numbers
3. error message if that film is not in the list of films*/

const body = document.body
const button = document.getElementById("btn")
const filmInput = document.querySelector("input")
const films = document.querySelectorAll("div.cards")


console.log(films)

button.addEventListener("click", function(e){

    if (filmInput.value.length > 0){  
        
        for (let i=0; i<films.length; i++){
            let filmOutput = document.getElementById(films[i].id)
            
            if (filmInput.value.toLowerCase() === films[i].innerText.toLowerCase()){
                console.log(films[i]) 
                
                console.log(filmOutput.classList)
                filmOutput.classList.remove("dontDisplay")
                
            }else{
                filmOutput.classList.add("dontDisplay")
            }

        }

    }
})
