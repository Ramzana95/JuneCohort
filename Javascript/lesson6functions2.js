function multiply(num1, num2){
    answer = num1*num2
    return answer
} 

function addition (num){// num = argument
    var answer = multiply (5, 10) // calling upon 2 arguments (5 and 10)
    console.log(answer + num)
}
// you can pass the solution from "answer" inside the argument if you wanted to
addition(multiply(25,10))// new argument
/* what this is doing is multiplying 25 and 10 and working backwards. Sees answer(line 7) and
sees the multiply function, runs 5 and 10 through the function multiply above (line 2) to get
the answer and then runs the console.log(answer + num) 
answer = 50 num = 250. addition(multiply(25,10)) = 300*/