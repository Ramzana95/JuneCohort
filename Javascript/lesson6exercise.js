/* create 2 functions, a celsius function which outputs temp in C and a 
converter function that changes C to Fahrenheit
(0°C x 9/5 + 32 = 32°F)*/

function celsius (num){ // num is the argument/parameter
    return num // all it's going to do is return whatever was input as the argument
}
//console.log(celsius(35 + "°C"))
/* all the console.log is saying is to print off whatever variable we obtain from the argument*/

function celsiusToFahrenheit (){
    var converter = celsius(0)// the value given here will be entered into the converter
    var fahrenheit = (converter*9/5) + 32
    console.log(fahrenheit)
}
//celsiusToFahrenheit()

//ANOTHER WAY OF SETTING IT OUT WHERE YOU CAN INPUT THE NUMBER WHEN CALLING ON THE FUNCTION:
function celsiusToFahrenheit (num){
    var converter = celsius(num)// the value given here will be entered into the converter
    var fahrenheit = (converter*9/5) + 32
    console.log(fahrenheit + "°F")
}
celsiusToFahrenheit(25) 