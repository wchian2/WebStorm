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
    sleep(2000);
    count++;
}
console.log("WHAT'S THAT SPELL???");
sleep(2000);
console.log(name + "!!!");