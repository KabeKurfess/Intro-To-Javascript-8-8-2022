/*

= <-- assignment operator

== <-- equality operator (don't use this, will try to type cast)

=== <-- strict equality operator (use this!)

!= <-- inequality operator

!== <-- strict inequality operator

< <-- less than operator

> <-- greater than operator

<= <-- less than or equal to operator

>= <-- greater than or equal to operator


*/

/*
const wantsDonut = confirm("Do you have a donut?");

if (wantsDonut) {

    console.log("Eat that donut!");
} else {
    console.log("Get a donut!");
    console.log("Eat that donut!");
}
*/

const number1 = prompt ("Pick a number");
const number2 = prompt ("Pick anohter number");

const num1 = parseInt(number1);
const num2 = parseInt(number2);
/*
or

console.log(parseFloat(number1));\

will log decimals as well

*/
console.log(num1);
console.log(num2);

if (Number.isNaN(num1)|| Number.isNaN(num2)){
    
    alert ("Please enter a valid number!")
    const number1 = prompt ("Pick a number");
const number2 = prompt ("Pick anohter number");

const num1 = parseInt(number1);
const num2 = parseInt(number2);
/*
or

console.log(parseFloat(number1));\

will log decimals as well

*/
console.log(num1);
console.log(num2);

if (Number.isNaN(num1)|| Number.isNaN(num2)){
    
    alert ("Please enter a valid number!")
} else if (num1 === num2){
    
    alert ("both numbers are equal")
} else if (num1 < num2){
    
    alert (`number ${num2} is larger`)
} else if (num1 > num2){
    
    alert (`number ${num1} is larger`)
}

} else if (num1 === num2){
    
    alert ("both numbers are equal")
} else if (num1 < num2){
    
    alert (`number ${num2} is larger`)
} else if (num1 > num2){
    
    alert (`number ${num1} is larger`)
}





