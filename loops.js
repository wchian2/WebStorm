// The lesson below goes over loops
// Remember DRY (Do not repeat yourself)

// for-loop


// while-loop
var counter = 1;

while(counter < 6) {
    console.log("Count is: " + counter);
    counter++;

    // Console logs the following:
    // Count is: 1
    // Count is: 2
    // Count is: 3
    // Count is: 4
    // Count is: 5
}


var name = "William";
var count = 0

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

while(count < name.length) {

    console.log("Gimme a " + name[count] + "!!!");
    //sleep(2000);
    count++;
}
console.log("WHAT'S THAT SPELL???");
//sleep(2000);
console.log(name.toUpperCase() + "!!!");

    // Console logs the following:
    // Gimme a W!!!
    // Gimme a i!!!
    // Gimme a l!!!
    // Gimme a l!!!
    // Gimme a i!!!
    // Gimme a a!!!
    // Gimme a m!!!
    // WHAT'S THAT SPELL???
    // William!!!

// Problem sets

// Print all numbers between -10 and 19

var initializedNumber = -10;
while(initializedNumber < 20) {
    console.log(initializedNumber)
    initializedNumber++;
}

// Then print all even numbers between 10 and 40

var anotherNumber = 10;
while(anotherNumber < 41) {
    if(anotherNumber % 2 == 0) {
        console.log(anotherNumber)
    }
    anotherNumber++;
}

// And then print all odd numbers between 300 and 333

var moreNumbers = 300;
while(moreNumbers < 335) {
    if(moreNumbers % 2 == 1) {
        console.log(moreNumbers);
    }
    moreNumbers++;
}

// Finally, print all numbers divisible by 5 AND 3 between 5 and 50

var startingNumber = 5;
while(startingNumber <= 50) {
    if(startingNumber % 5 == 0 && startingNumber % 3 == 0) {
        console.log(startingNumber);
    }
    startingNumber++;
}