
// prompt the user to choose rock, paper or scissors
var userChoice = prompt("Do you choose rock, paper or scissors?");

// set computer choice variable to a random number between 0 and 1
var computerChoice = Math.random();

// assign possible range of results to either rock paper or scissors
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);


// function will take in computer and user choices and compare them to get result
var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }

    else if (choice1 === "rock") {

        if (choice2 === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";   
        }
        else {
            return "scissors wins";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        }
        else {
            return "scissors wins";
        }
    }
}

// call the function, passing in our user choice and random generated computer choice
compare(userChoice, computerChoice);