// spot the issue
/*it isn't in order, you have to write conditional statements that are going to pass 
before the ones that will fail*/

/*const age = 22
var occupation = "student"

if (age > 21 && occupation === "student"){ 
    console.log("no stable income so you do not qualify")
} else if(age > 21){ //had to move this down because both if statements included the condition of being 21 and the other condition had to pass before this one.
        console.log("stable income and you qualify")
}else{
    console.log("sorry you are too young")
} */ 

/* Create a conditional statement for grading papers.
A score of 90 and over is an A*
Score above 80 is an A
Score above 70 is a B
Score abover 60 is a C
And anything below 60 is a fail*/

/*var score = 90

if (typeof score === "number"){ //typeof is a property to check the makings of a variable
    if (score >= 90 && score <= 100){
        console.log("A*")
    }else if (score >= 80 && score < 90){
        console.log("A")
    }else if (score >=70 && score < 80){
        console.log("B")
    }else if (score >=60 && score < 70){
        console.log("C")
    }else{
        console.log("fail")
    }
}else{
    console.log("Error")
}*/

//IN SWITCH CASE FORM

/*var score = 90

switch (true){ 
    case (score > 90 && score < 100):
        console.log("A*")
        break;
    case (score > 80 && score < 90):
        console.log("A")
        break;
    default:
        console.log("fail")    
     
}*/

/*if you want to include a range of scores, you have to change what is in the 
brackets in switch() to be equal to "true" 

The switch has to be equal to true when there is a case that matches the
scenario (variable) you are looking for.
 e.g. 90 matches the first case therefore it works

 switch(score) was looking for a score that matches the variable e.g.
 if the var was 91, switch (score) was only looking for 91 which would print 
 "fail" as the case as it doesn't match "90"*/

 function examGrader(score){

    if (typeof score === "number"){
        switch (true){ 
            case (score => 90 && score <= 100):
                console.log("A*")
                break;
            case (score > 80 && score <= 89):
                console.log("A")
                break;
            default:
                console.log("fail")    
             
        }
    }else{
        console.log("Error")
    }
 }
examGrader(90)