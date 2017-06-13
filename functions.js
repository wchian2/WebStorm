// FUNCTIONS and moar!!!

// Playground... if this IDE had something like Apple's xCode...

function chant() {
    console.log("Hey there!!!");
};


for(i=2;i<=5;i++) {
    chant(i);
};

function sayHelloTo(name) {
  console.log("Hello " + name + "!!!");
}

sayHelloTo("William");

function acquirePatientData(name, medications, insurance) {
    console.log(medications);

    console.log(name + " with the insurance called: " + insurance);
}

acquirePatientData("William", ["drug", "drug2"]);

var square = function(num) {
    return num * num;
}

console.log(square(2));


// Functional problem sets... pun intended ... :P

// isEven()

function isEven(number) {
    if(number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
// piece of cake...


// factorial
// Write a function which takes a single numeric argument and returns the factorial of that number...
// oh boy.......

function factorial(ofNumber) {
    if(ofNumber == 0) {
        return 1;
    }

    if(ofNumber != Math.floor(ofNumber)) {
        return "Give me an integer please!!!";
    }

    var totalValue = 1;
    for(integer = 1; integer <= ofNumber; integer++) {
        totalValue *= integer;
    }
    return totalValue;
}
console.log("*****") ;
console.log(factorial(10)); // i did it, yay :] !!!


// kebabToSnake ... huh???
// Write a function which takes a single kebab-based string argument and returns the snake_cased version

function kebabToSnake(string) {
    return string.replace(/-/g, "_");
}
console.log(kebabToSnake("hello-world")); //easy like pie


// Scope

function hidingVariable() {
    var mysteryVariable = 50;
    return mysteryVariable;
}

var mystery = 40;
console.log(mystery);
console.log(hidingVariable());


// More Scope

function greetNow() {
    var greetings = "HI THERE";
    console.log(greetings);
}

var greetings = "I am greeting later";

function greetLater() {
    console.log(greetings);
}

greetNow();
greetLater(); // functions cannot see internal variables of other functions