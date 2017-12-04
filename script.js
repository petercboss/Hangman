// Declaring general variables
// Getting HTML elements by id and declaring them as variables
var	wins = 0;
var	bands = ["burzum", "mayhem", "immortal", "emperor", "bathory", "darkthrone", "gorgoroth"];
var screenWins = document.getElementById("wins");
var screenGuesses = document.getElementById("guesses");
var screenWrong = document.getElementById("wrong");
var screenWord = document.getElementById("word");

// resets everything but wins to 0
var reset = function() {
	guesses = 10;
	answer = [];
	currentBand = bands[Math.floor(Math.random() * bands.length)];
	for (var i = 0; i < currentBand.length; i++) {
		if (currentBand[i] === " ") {
			answer.push(" ")
		}
		else {
			answer.push("_")
		}
	}
	screenWord.innerHTML = answer.join("");
	screenWins.innerHTML = wins;
	screenGuesses.innerHTML = guesses;
	screenWrong.innerHTML = "";
}

// decides if a letter is in the current word
var rightorwrong = function(letter) {
	console.log(currentBand);
	if (currentBand.indexOf(letter) > -1) {
		right(letter);
	}
	else {
		wrong(letter);
	}
}

var right = function(letter) {
	for (var j = 0; j < currentBand.length; j++) {
		if (currentBand[j] === letter) {
			answer[j] = letter;
			screenWord.innerHTML = answer.join("");
		};
	};
	if (answer.indexOf("_") < 0) {
		wins++;
		reset();
	};	
}

var wrong = function(letter) {
	if (guesses >= 1) {
		guesses--;
		screenWrong.innerHTML += `${letter}, `;
		screenGuesses.innerHTML = guesses;
	}

	else {
	screenWord.innerHTML = "YOU LOST!!";
	};
}

//begin the events
reset();

document.onkeyup = function(event) {
	var letter = event.key.toLowerCase();
	rightorwrong(letter);
}