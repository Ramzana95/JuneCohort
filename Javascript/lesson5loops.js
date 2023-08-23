//LOOPS = something which keeps going around in a circle
 /* You have a starting point and you keep repeating it (coming back to the start point 
    constantly until the end)

    Loops save time

    Automating the computer to do things for us so we don't spend time repeating things
    again and again.

    e.g. if everyday when you clocked in to work you had to write 100 "hello worlds" and
    print them in the console, this would take a long time

    console.log("Hello world") x 100 would be tedious and boring

    this is where loops come into play! A loop takes away the need to repeat the same 
    statement.
    
    A loop executes the same statement until the endpoint (we set the endpoint before
        the line gets executed)

    If you don't set an endpoint, it results in an infinite loop - LOGIC ERROR
    
    EXAMPLE OF HOW TO WRITE A LOOP
    
    for loop (eg of how to print 100 "hello worlds" at once*/

    /*for (let i = 0; i <=50; i++){
        console.log("Hello World! " + i) 
    }*/

    /* console.log() is the executing line which will be 
        executed 100 times as shown in the line above it
    }
loops can be used for searching algorithms, sorting, linear searches
2 types of loops, "for loops" and "while loops"

"for" loops have multiple conditions to pass
"while" loops only have one condition to pass

once the conditions have been set on the top line, you cn write your executing line 
below it using console.log

- Loops are broken down into 3 parts:

for (conditions to pass){
    doSomething here
}

-- conditions to pass in "for" loops are split up into 3:
"Initialisation"; "condition"; and "what next/iterator"

Using the example above (let (i = 0; i <=100; i++))

let i = 0 is the initialisation portion - initial starting point. Variable doesn't have to
be called "i", you can change it to anything. 

let i=0 just means let the initial starting point be equal to 0

i <=100 is the condition;
This just means the starting point "i" is less than or equal to the endpoint
(100 is the endpoint (the loop will be repeated and printed 100 times))

i++ is the what next/iterator
The iterator is doing something called a "step through", every time it executes a 
statement, it has completed one loop. The iterator defines how many times you need to
continue to do that loop.

i++ just means i is equal to the old "i" +1
i++ = i +1 || i++ = 1+1 = 2 - all this means is the iterator will step through one by one
(Don't have to write it as "i++", i = i+1 is exactly the same. i = i+2 would
step through in twos, i=i+3 in threes etc)
--- NOTE: if an endpoint is not set or if the endpoint doesn't make sense logically, 
you will end up with an infinite loop

The way to break out of an infinite loop is by clicking on your terminal
holding down ctrl and pressing C */

/*for (let i=0; i<= 50; i = i+5){ // start point = 0, endpoint = 50, goes up in 5s
    console.log("Hello Ramzan! " +i)
}*/

//adding a conditional statement to a loop

/*for (let i = 10; i >= 0; i = i-1){
    if (i === 0){
        console.log("blast off!")//instead of 0, "blast off!" will be printed
    }else{
        console.log(i)
    }
}*/

//-------------------

var array = ["milk", "oranges", "apples", "bread", "butter", "cheese"]

/* if you wanted to print each item of the array individually, you would do something like

console.log(array [0]) and then copy/paste as many times as needed for every position

with loops, this is made easier. If you had 100+ items in an array, you wouldn't
want to use that method, instead you can do something like:*/

/*for (let i = 0; i<array.length; i=i+1){
    console.log(array[i])// Remember to put the [i] in!
}*/

//[i] is the positions. the square brackets are needed to print off the positions
//in short lists, i<array.length is not necessary, this would be more suitable for long lists

/* This method of using loops with arrays can be used to search. 
e.g. imagine you are looking through an infinite list with many items,
say you're looking for butter, the way you would do this is by doing a 
conditional statement:*/

for (let i = 0; i<array.length; i=i+1){
    if (array[i] === "butter"){
        console.log("found it!")
    }
}

//----------------

/* Modulus symbol (%)
- This symbol finds the remainder between numbers*/

console.log(15%4)




