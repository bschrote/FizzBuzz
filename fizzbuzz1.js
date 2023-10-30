function FizzBuzz(Index) {

const Fizz = 3
const Buzz = 5
const str1 = 'Fizz';
const str2 = 'Buzz';

//for (let Index = 1; Index<=100; Index++){
    let Num = Index.toString();
    
    if((Num % Fizz === 0) && (Num % Buzz === 0) && ((Num.includes(Fizz)=== true) || (Num.includes(Buzz) === true))) {
        if ((Num.includes(Fizz)=== true) && (Num.includes(Buzz) === true)) {
            return (str1.concat(str1,str2,str2))
        }
        else if (Num.includes(Fizz) === true) {
            return (str1.concat(str1,str2))
        } 
        else if (Num.includes(Buzz) === true) {
            return (str1.concat(str2,str2))    
        }    
        
    }
    else if (((Num % Fizz === 0) && (Num % Buzz === 0) ) || ((Num.includes(Fizz) === true) && (Num.includes(Buzz) === true))) { 
       return (str1.concat(str2))
    }
    
    else if ((Num % Fizz === 0) && ((Num.includes(Fizz) === true) || (Num.includes(Buzz) === true))) {
        if (Num.includes(Fizz) === true) {
            return (str1.concat(str1))
        }
        else if (Num.includes(Buzz) === true) {
            return (str1.concat(str2))
        }
    }     
    else if ((Num.includes(Fizz) === true) || (Num % Fizz === 0))
 {
        return (str1)
    }
    else if ((Num % Buzz === 0) && ((Num.includes(Fizz) === true) || (Num.includes(Buzz) === true))) {
        if (Num.includes(Buzz) === true) {
        return (str2.concat(str2))
        }
        if (Num.includes(Fizz) === true) {
            return(str1.concat(str2))
        }
        } 
    else if ((Num.includes(Buzz) === true) || (Num % Buzz === 0)) {
        return (str2)
    } 
   
    else {
        return(Num)
        }

}
//}
module.exports = FizzBuzz         


 