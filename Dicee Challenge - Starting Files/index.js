let randomNumber1 = Math.floor(Math.random() * 6) + 1; // Math.floor (rounds to nearest integer) Math.random * 6) + 1 (to round it to the nearest 1) = generates random num in  the range of 1 - 6

let randomDiceImage = "dice" + randomNumber1 + ".png"; //rolling dice image using randomNumber1 var to roll from 1 - 6 dice.png

let randomSourceImage = "images/" + randomDiceImage; // selecting random from 1 - 6 dice.png

let image1 = document.querySelectorAll("img")[0]; // creating new var with image1 to replace img tag

image1.setAttribute("src", randomSourceImage); // setting new attributes iwth randomSourceImage 

// 2nd Dice on right hand side for player #2

let randomNumber2 = Math.floor(Math.random() * 6) + 1; //same values as randomNumber1

let randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; // var created to draw dice imgs 1-6.png using randumNumber2 generator
                                                                //images/ accesses the folder dice is the name of the .png file

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2); // index [1] = selects the second img in the array replacing the src"" link with folder dice img 1 - 6.png

//If/else statement for when player #1 wins or player #2 wins

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!"; //if statement for when player #1 wins 
                                                                 //instead of getElementById (querySelector) is used
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!"; // else if statement for if player #2 wins
}
else {
    document.querySelector("h1").innerHTML = "DRAW!";           // else statement for when two players 'Draw'
}





