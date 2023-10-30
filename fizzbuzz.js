function HI() {
const Fizz = 3
const Buzz = 5

for (let Index = 1; Index<=100; Index++){
    let Num = Index.toString();
    
    if((Num % Fizz === 0) && (Num % Buzz === 0)) {
        if ((Num.includes(Fizz)=== true) && (Num.includes(Buzz) === true)) {
            console.log ("FizzFizzBuzzBuzz")
        }
        if (Num.includes(Fizz) === true) {
            console.log("FizzFizzBuzz")
        } 
        if (Num.includes(Buzz) === true) {
            console.log("FizzBuzzBuzz")    
        }      
    }
    else if (((Num % Fizz === 0) && (Num % Buzz === 0) ) || ((Num.includes(Fizz) === true) && (Num.includes(Buzz) === true))) { 
       console.log("FizzBuzz")
    }
    
    else if ((Num % Fizz === 0) && ((Num.includes(Fizz) === true) || (Num.includes(Buzz) === true))) {
        if (Num.includes(Fizz) === true) {
            console.log("FizzFizz")
        }
        if (Num.includes(Buzz) === true) {
            console.log("FizzBuzz")
        }
    }     
    else if ((Num.includes(Fizz) === true) || (Num % Fizz === 0))
 {
        console.log ("Fizz")
    }
    else if ((Num % Buzz === 0) && ((Num.includes(Fizz) === true) || (Num.includes(Buzz) === true))) {
        if (Num.includes(Buzz) === true) {
        console.log ("BuzzBuzz")
        }
        if (Num.includes(Fizz) === true) {
            console.log("FizzBuzz")
        }
        } 
    else if ((Num.includes(Buzz) === true) || (Num % Buzz === 0)) {
        console.log ("Buzz")
    } 
   
    else {
        console.log(Num)
        }

}
}
module.exports = { HI: HI }         


 