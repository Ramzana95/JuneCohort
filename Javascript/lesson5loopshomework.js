/* Palindrome Challenge:

Given a word check to see if the reverse of the word is correct 
(i.e is the word a palindrome). Example words;

eye in reverse is eye thus a palindrome

madam in is reverse is madam thus a palindrome*/
//pseudo code:

/*variable 1 = originalWord
variable 2 = reversedWord

if v1 = v2
then v1 is a palindrome

if not
then v1 is not a palindrome*/

var word = "madam"
var reversedWord = ""

for (let i = word.length-1; i>=0; i=i-1){ /* i = word.length-1 just means the starting point is 
the top(end) of the word i.e. the n in "Ramzan" "-1" because:
the amount of positions in a word = length of word -1 i.e. 
ramzan (6 letters)
012345 (5 positions)
i>=0 means the end point is equal to position 0 (the first letter because we're going backwards)
i=i-1 means we are going backwards from the end to the beginning */
reversedWord += word [i] 
} /* += word[i] will add the current letter we are on in the loop onto the
reversedWord string we created*/

console.log(reversedWord)// this prints out the word in reverse. Checks to see if the loop works
//it's then passed into the conditional statement below which will determine if it is a palindrome or not

if (word === reversedWord){ // if the word is the same as the reversedWord
    console.log(`${word} is a palindrome`)
}else{
    console.log(`${word} is not a palindrome`)
}
//----------------------------------------------------------------------------------------------
// q2. Palindrome in a function

function palindrome(word){
    if (word === word.split('').reverse().join('')){/* 
(All this is saying is if the word is the same as the word after it has been split/reversed/joined)
    ".join" concatenates or joins all the
    elements within an array and separates them by commas or whatever separator string 
    you choose. In this case, the elements will just be joined without any spaces because of
    the (''), there are no spaces between the qt marks. It would be (' ') if you wanted a space
    ".reverse" reverses an array (makes the last item the first and the first item the last)
    SPLIT ('') splits the letters into an array
    REVERSE () reverses the order of the letters in the array
    JOIN() joins the letters back together*/
    console.log(`${word} is a palindrome`)
    }else{
        console.log(`${word} is not a palindrome`)
    }
}
palindrome("ramzan")

//----------------------------------------------------------------------------------------
/*q3. pin generator
Create a pin that is generated from a length given. 
E.g Length of 6 the generator must create a pin of length 6 characters */

var pinLength = 6

function pinGenerator(length){
    var pinGenerator = []// initiating that this is an empty array

    for (let i=0; i<pinLength; i=i+1){//pinLength is 4 so 4 is the endpoint
        pinGenerator.push(Math.floor(Math.random()*10))
/* ".push" adds another item onto the array, in this case, it adds the pin which is generated 
onto the array
- Math.floor() = rounds down a decimal and returns the largest integer (whole number) less than
or equal to a given number e.g. console.log(Math.floor(7.99) would output "7" in the console.
-Math.random() = returns a psedo random number greater than 0 and less than 1. (you can multiply
to get bigger numbers)*/
    }
    console.log(`length is ${pinLength}`)
    console.log(pinGenerator.join(''))
    //JOIN() joins the numbers together in the array without spaces
}
pinGenerator()

//---------------------------------------------------------------------------------------

/* q3. sleep debt calculator
pseudo code:
ideal hours (of sleep) vs actual hours
actual hours
ideal hours = 56

sleep debt calculation = ideal hours - actual hours*/

var age = 4

function idealHours(){
    var idealSleep //idealSleep just gives a value for the function "idealHours()"

    if (age <5){
        idealSleep = 84 //hours per week
    }else if (age >5 && age <18){
        idealSleep = 70
    }else{
        idealSleep = 56
    }
    return idealSleep // this tells you how much you should ideally sleep
}// this return statement will return a value for idealSleep
// the ideal amount of sleep according to age will be stored in the idealSleep variable

function actualHours(){
    var actualSleep = 60 //actualSleep just gives a value for the function "actualHours()"
    return actualSleep // this returns a value for actualSleep (how much you actually sleep)
}// the amount of sleep you actually get is stored inside the actualSleep variable

function sleepDebt (){
    var actualSleep = actualHours()
    var idealSleep = idealHours()
    
    if (actualSleep > idealSleep){
        console.log(`you have overslept by ` + (actualSleep - idealSleep) + " hours")
    }else{
        console.log(`you have underslept by ` + (idealSleep-actualSleep) + " hours")
    }
}

sleepDebt(age)

/* 
-- when "(age)" is passed through the function, first it passes through the 
"idealSleep" function which returns the amount of time you should ideally sleep for at
whichever age you input. 

-- The value (ideal amount of sleep) is stored in this "idealSleep" variable. 

-- Then the "actualSleep" function runs. 

-- Whichever value is input into the "actualSleep" variable is stored in this variable. 

-- Then the values are passed through  the "sleepDebt" function to see how much you 
over/under sleep.*/
