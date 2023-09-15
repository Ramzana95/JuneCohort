/* OBJECTS

AN OBJECT IS A COLLECTION OF PROPERTIES.

A PROPERTY IS AN ASSOCIATION BETWEEN A NAME(KEY) AND A VALUE. (KEY-VALUE PAIRS)

DEFINES SUBSTRUCTURES OF A VARIABLE

Objects are set out in braces e.g.:*/

const car = {
    name: "bmw", //this is a property
    colour: "black",
    year: 2015,
    model: ["1 series","m sport"]
}// ^ this is an example of an object
console.log(car)

/* Any website you buy things from contains objects. e.g.

const item = {
    img: "set", //img will be set to something
    title: "title of product",
    price: "price of product"
}

Objects can hold arrays, functions, and variables.
- The value part of a key-value pair can hold arrays, functions, and variables.

You can modify, update, add, and delete properties within objects using "dot notations"

To call on a specific property inside an object, you can use dot notations e.g.*/

console.log(car.name) //expected outcome: bmw
console.log(car.year) //expected outcome: 2015

// Updating, deleting, and adding to an object

// How to delete:

// delete car.model
// console.log(car) //expected outcome: it will delete the car model "1 series" and "m sport"

// How to update:

car.model[1] = "m135i" //updates the model from "m sport" (position 1 in the array) to "m135i"
//car.colour = "white" - this will update the colour from black to white
console.log(car)

// How to add something new:

car.owner = "Ramzan" // "owner" is the new key we added to the object, "Ramzan" is the new value
console.log(car)

// Objects are able to hold methods/functions e.g.

// const person = { //person is the object
//     firstName: "John",
//     lastName: "Smith",
//     age: 45,
//     fullName: function(){
//         return person.firstName+ " " +person.lastName
// /* can also use "this.firstName"/"this.lastName" because "this" is predefined. You can use "this"
// inside an object to call on the object i.e. instead of "person" in this example*/

//     }
// }
// //console.log(person) // this will print "fullName: [function: fullName]"
//console.log(person.fullName()) // this will print "John Smith"

/* This may seem like a long winded way of printing the full name but this method is used
for objects in which things are constantly changing. This method is used more in constructors.

When things are constantly changing you want to set it up in a way where the object is doing
most of the work for you rather than you having to set variables manually.

"this" notation can access an object you are already inside 
"this" = "this object I am currently inside of"*/

//CREATING A CONSTRUCTOR

function Person(name, lastName, age, gender){ // function name starts with a capital in a constructor
    this.firstName = name,
    this.lastName = lastName,
    this.age = age
    this.fullName = function(){
        return this.firstName + " " + this.lastName
    }
    
    if (gender){ //"if gender is defined"
        this.gender = gender // it will be equal to the gender that is passed through
    }else{
        this.gender = "male" //assumes you are a male unless you state otherwise
    }

    }

/* A constructor allows you to predefine the makings of this person object
- Using the constructor we are able to create multiple objects based off the requirements we have 
set in the constructor */ 

//CREATING AN OBJECT USING OUR CONSTRUCTOR:

const John = new Person("John", "Smith", 45);// name,lastName,age (same order as in the constructor)
// this ^ is how we fill in the gaps
console.log(John) //prints everything apart from full name
//console.log(John.fullName())// prints John Smith only


const Ramzan = new Person("Ramzan", "Ahmad", 28);// green colour tells us it's a constructor

console.log(Ramzan)

const Jane = new Person("Jane", "Doe", 56, "female")
console.log(Jane)

/*Essentially, a constructor designs and predefines an object for you, you just have to fill 
it in. It's like a FRAMEWORK that you can add stuff to

MUCH EASIER TO DO, SAVES TIME, DON'T HAVE TO WRITE OUT REPETITIVE CODE*/