/*

function ????(INPUTS HERE){


    return OUTPUTHERE;
}

To use it: we invoke or call it

????(PASS THINGS TO THE INSIDE HERE)

*/


/* Function declaration format
function sentenceBuilder(adjective, noun, emoji) {

    //console.log(adjective);
    //console.log(noun);
    
    const sentence = `A ${adjective} ${noun} ${emoji}.`;

    //console.log(sentence)

    return sentence; // output
}

// Invoke a function with parentheses ()
const flowerSentence = sentenceBuilder("beautiful", "flower" , "🌸");
const mouseSentence = sentenceBuilder("small", "mouse" , "🐁");

console.log(flowerSentence);
console.log(mouseSentence);
*/

/*
// function expression format
const addThree = function (num) {
    const result = num + 3;

    return result;
}

const finalResult = addThree(97);

console.log(finalResult)


// arrow function, fat arrow function
const addTen = (num) => {
    const result = num + 10;

    return result;
}
*/

// daily challenge
/*
const number = (parseInt(prompt("pick a number")));
console.log (number);


if (number % 2 === 0){
    alert ("the number is even")
} else {
    alert ("the number is odd")
}

/*
function alertEvenOrOdd(num){
    const result = "";

    if (num % 2 === 0){
        result = ("the number is even");
    } else {
        result = ("the number is odd");
    }

    alert (result);
};
alertEvenOrOdd (2);



const sayGreeting = function (firstName) {
    //body

    alert (`Good morning ${firstName}`);
};

sayGreeting ("kabe")
*/
/*

function startsWithLetter (word){
    const letter = word.charAt(0).toUpperCase();

    return "ABCDEFGHIJKLMOPQRSTUVWXYZ".includes(letter)
}

function isInRange (length, lowerBound, UpperBound) {
    return length >= lowerBound && length <= UpperBound
}

function validatePassword(password){
    //must be 6-20 characters long
    const passwordLength = password.length;

    if (!isInRange(passwordLength, 6, 20)){
        alert("bad password, not in range!")
        return;
    }
    
    // must start with a letter
    if (!startsWithLetter(password)) {
        alert ("Bad password, must start with letter!")
        return;
    };

    alert ("password is good!")
}

validatePassword("letmein!")
*/
// 3 ways
// old way var <--- function scoped
// new way const/let <-- block scoped
/*
const numOfPets = 20;

function YOLO(){
    // block

    console.log(numOfPets)
}

YOLO()
*/


// CREATING A PROMISE
const myTurkeyMarinatedOvernightPromise = function () {
    return new Promise(function(goodNews, badNews) {
        // 2. marinate and leave overnight (8 hours) [long process]
        setTimeout(function () {
            console.log("marinate and leave overnight :full_moon:");
            action = "start cooking";

            // goodNews(action);
            badNews("the turkey spoiled! :(")

        }, 4000);

    })
};

let action = "";

// 1. go to the store and buy a turkey (10mins)
console.log("go to the store and buy a turkey :car:");


// 2. marinate and leave overnight (8 hours) [long process]
// CONSUMING A PROMISE with then/catch

myTurkeyMarinatedOvernightPromise().then(function (verb) {
    // Good news (fulfilled)
    // 4. Cook turkey (5 hours) (long process) (depends on step 2)
    console.log(`${verb} turkey :turkey:`)
}).catch(function (theBadNews) {
    // bad news (rejected)
    console.log(`Awwwww ${theBadNews}`)
}).finally(function () {
    console.log("News update complete");
});


// OR

/*
// 2. marinate and leave overnight (8 hours) [long process]
// CONSUMING A PROMISE with async/await
// async function startProcess() {
    try {
        const verb = await myTurkeyMarinatedOvernightPromise();
        // Good news (fulfilled)
        // 4. Cook turkey (5 hours) (long process) (depends on step 2)
        console.log(`${verb} turkey :turkey:`)
    } catch (theBadNews) {
        // bad news (rejected)
        console.log(`Awwwww ${theBadNews}`)
    } finally {
        console.log("News update complete");
    }
}

startProcess();
*/



// 3. make mac and cheese (1 hour)
console.log("make mac and cheese :cheese_wedge:")

// 5. Make gravy (1 hour)
console.log("make gravy :bowl_with_spoon:")
// 6. mash potatoes (1 hour)
console.log("mash potatoes :potato:")