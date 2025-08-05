
const firstName="Ernest "//this is a string
console.log(firstName);
// firstName is a variable name and Ernest is a variable
const number=2;
console.log(number.toString())
console.log(number+number)
//keywords for declaring a viariable are let, const, and var
let array=["ernest","james"]
console.log(array.find(()=>"ernest"))
// data types
//strings e.g let name= "Ernest" it should be in qoutes " " ,' ' and ` `
//integers e.g let age=10 
//there is a difference btwn 10 and "10" 10  +10 =20 but "10"+10= "1010"

console.log(10+"10")
console.log(10+10)
"enerst"+" jAVAS"
const enesr= "Ernest"+ " Javaz" //Ernest javaz
console.log(enesr)
//arrays are for storing multiple values 
const students=['james','john','peter'];

//objects are sets with key value sets
const student={
    //key:value
    grade:"1B",
    age:30,
    hobies:["singing","journaling","reading"],
    friends:{best:"james",
        bff:"john",
        girl:"tatenda"
    }
}

//methods
/* functions or ways we can work or manipulate data types 
e.g*/
firstName.toUpperCase();
number.toString()
students.find(()=>'james')
student.age
//declaration
// keyword function
// function nme is a vriable
function add (number1,number2){
    console.log(number1)
    console.log(number2)
console.log(number1+number2)
}
add(4,10)

function divide(number1,number2){
console.log(number1)
console.log(number2)
console.log(number1/number2)
}
divide(10,2)

function multiply(number1,number2){
console.log(number1)
console.log(number2)
console.log(number1*number2)
}
multiply(10,2);


function remainder(number1,number2){
console.log(number1)
console.log(number2)
console.log(number1 % number2)
}
remainder(10,3)