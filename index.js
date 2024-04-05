#! usr/bin/env node
// ............Problem..........................
//  Using conditional statements, check if the number is:
//  ...- Even or Odd.
//  ...- Positive, Negative, or Zero.
//  ...- Whether it is divisible by both 2 and 3 or anyone of them or ..
// .....not divisible by both check all the cases and print statement for each case.
//..............Solution.........................
// For taking input from user inquirer is utilized
import inquirer from "inquirer";
// defined a boolean variable to check if the program is to run again..
// ....based on user choice
// defined a function for asking user about test another number
async function testAgain() {
    const option = await inquirer.prompt([{
            name: "this",
            type: "string",
            message: "Do you want to test another number? press 'y' for yess or press anyother key otherwise"
        }]);
    if (option.this == "y") {
        return true;
    }
    else {
        return false;
    }
}
var again = true;
//while loop to run program again based on user choice
do {
    const userInput = await inquirer.prompt([{
            name: "number",
            type: "number",
            message: "Enter a number to test its type: "
        }]);
    console.log(`${userInput.number} is:`);
    if (isNaN(userInput.number) || !(Number.isInteger(userInput.number))) {
        console.log("-> Not a valid number");
        console.log("Number must be an Integer!");
        again = await testAgain();
    }
    else if (userInput.number == 0) {
        console.log(` -> Zero`);
    }
    else if (userInput.number != 0) {
        if (userInput.number > 0) {
            console.log(`-> A Positive Number`);
        }
        else {
            console.log(`-> A Negative Number`);
        }
        if (userInput.number % 2 == 0) {
            console.log("-> An Even Number");
            console.log("-> Not a Prime Number");
            again = await testAgain();
        }
        else {
            console.log("-> An Odd Number ");
            // if (userInput.number==1){
            //     console.log("->is not a Prime Number")
            // }
            if ((userInput.number % 3 != 0) && (userInput.number != 1)) {
                console.log("-> A prime Number i-e Niether divisible by 2 nor by 3!");
                again = await testAgain();
            }
            else {
                console.log("-> Not a Prime Number! ");
                again = await testAgain();
            }
        }
    }
    else {
        console.log("Not a Valid Number");
        again = await testAgain();
    }
} while (again);
