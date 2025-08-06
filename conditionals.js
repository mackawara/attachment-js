/*
operators
== equality operator





if , if else and switch statements are conditional statements which 
are used to make decisions in the logic i.e if condition is met or true (truthy)
*/
// if value is 
let firstName;
console.log(firstName)

let lastName = "james";
// if the logic or if the comparison in the parenthisis is true or truthy then the code will run and if not it will notrun
if (5 == 5) {
    console.log("yaita")
}

if (4 == 0) {
    console.log("fail")//this will not run
}

if (firstName) {
    console.log("present")
}
else if (lastName) {
    console.log("code in else if block")
}
else {

    console.log("code in else block")
}

if (5 === 5) {
    console.log("5===\"5\":ernest")// backwards slash (\) is used for escaping special characters
}
else if (true) {
    console.log("else if block :nothando")
}
else {
    console.log("else block")
}
// switch statement 
// used when we are only checking one condition but with multiple possible values
switch (5 + 5) { //checking if expression 
    case 55:
        console.log("case one")
        break
    case 25:
        console.log("case three")
        break
    case 10:
        console.log("case two nothandoernest")
        break
    default:
        console.log("default log")
        break

}