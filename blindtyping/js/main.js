const input = document.querySelector("input");
const userinput = document.querySelector("#userinput");

let randomizer;
let rand;
let randomletter;
let randomLetterValue;

let letters = [
	["q", "a", "z", "Q", "A", "Z"],
	["w", "s", "x", "W", "S", "X"],
	["e", "d", "c", "E", "D", "C"],
	["r", "f", "v", "R", "F", "V", "t", "g", "b", "T", "G", "B"],
	[" "],
	[" "],
	["u", "j", "n", "y", "h", "b", "Y", "H", "B", "U", "J", "N"],
	["i", "k", "m", "I", "K", "M"],
	["o", "l", "O", "L"],
	["P", "p"]
];

randomNumbers();

function randomNumbers() {
	randomizer = Math.round(Math.random());
	if (randomizer == 0) {
		rand = Math.floor(Math.random() * 10 + 1);
		input.value = `Введіть символ англійського алфавіту який відповідає пальцю номер "${rand}"`;
	} else if (randomizer == 1) {
		randomletter = Math.round(Math.random() * (90 - 64) + 64);
		if (randomletter == 64) {
			randomletter = 32;
		}
		randomLetterValue = String.fromCharCode(randomletter);
		input.value = `Введіть палець який відповідає символу "${randomLetterValue}"`;
	}

}

function caseShorter() {
	userinput.setAttribute("readonly", "");
	setTimeout(() => {
		document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #5B1D82, #7D00CA)";
		userinput.removeAttribute("readonly");
		randomNumbers();
		userinput.value = "";
	}, 2000);
}

// function caseShorter1() {
// 	userinput.setAttribute("readonly", "");
// 	setTimeout(() => {
// 		document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #5B1D82, #7D00CA)";
// 		userinput.removeAttribute("readonly");
// 		randomNumbers();
// 		userinput.value = "";
// 	}, 2000);
// }

userinput.oninput = () => {
	gameFunction();
};

function gameFunction() {
	let isGreen;
	if (randomizer == 0) {
		isGreen = false;
		letters[rand-1].forEach(function(item){
			if (userinput.value == item){isGreen = true;}
		});
		
		if (isGreen == true){
			document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
		} else if(isGreen == false){
			document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
		}
		caseShorter();
		/*
		switch (rand) {
			case 1:
				if (userinput.value == "q" || userinput.value == "a" || userinput.value == "z" || userinput.value == "Q" || userinput.value == "A" || userinput.value == "Z" || userinput.value == "1") {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
				} else {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
				}
				caseShorter1();
				break;
			case 2:
				if (userinput.value == "w" || userinput.value == "s" || userinput.value == "x" || userinput.value == "W" || userinput.value == "S" || userinput.value == "X" || userinput.value == "2") {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
				} else {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
				}
				caseShorter1();
				break;
			case 3:
				if (userinput.value == "e" || userinput.value == "d" || userinput.value == "c" || userinput.value == "E" || userinput.value == "D" || userinput.value == "C" || userinput.value == "3") {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
				} else {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
				}
				caseShorter1();
				break;
			case 4:
				if (userinput.value == "r" || userinput.value == "f" || userinput.value == "v" || userinput.value == "R" || userinput.value == "F" || userinput.value == "V" || userinput.value == "4" || userinput.value == "5" || userinput.value == "t" || userinput.value == "T" || userinput.value == "g" || userinput.value == "G" || userinput.value == "b" || userinput.value == "B") {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
				} else {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
				}
				caseShorter1();
				break;
			case 5:
				if (userinput.value == " ") {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
				} else {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
				}
				caseShorter1();
				break;
			case 8:
				if (userinput.value == "i" || userinput.value == "k" || userinput.value == "," || userinput.value == "I" || userinput.value == "K" || userinput.value == "8") {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
				} else {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
				}
				caseShorter1();
				break;
			case 7:
				if (userinput.value == "y" || userinput.value == "h" || userinput.value == "n" || userinput.value == "Y" || userinput.value == "H" || userinput.value == "N" || userinput.value == "6" || userinput.value == "7" || userinput.value == "u" || userinput.value == "U" || userinput.value == "j" || userinput.value == "J" || userinput.value == "m" || userinput.value == "M") {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
				} else {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
				}
				caseShorter1();
				break;
			case 9:
				if (userinput.value == "o" || userinput.value == "l" || userinput.value == "." || userinput.value == "O" || userinput.value == "L" || userinput.value == "9") {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
				} else {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
				}
				caseShorter1();
				break;
			case 6:
				if (userinput.value == " ") {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
				} else {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
				}
				caseShorter1();
			case 10:
				if (userinput.value == "0" || userinput.value == "p" || userinput.value == "P" || userinput.value == "[" || userinput.value == "]" || userinput.value == "}" || userinput.value == "{" || userinput.value == "-" || userinput.value == "'" || userinput.value == "|" || userinput.value == ";" || userinput.value == ":" || userinput.value == "/" || userinput.value == "?") {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
				} else {
					document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
				}
				caseShorter1();
				break;
		}
	*/
	} else if (randomizer == 1) {
		isGreen = false;
		letters[userinput.value-1].forEach(function(item){
			if (randomLetterValue == item){isGreen = true;}
		});
		
		if (isGreen == true){
			document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
		} else if(isGreen == false){
			document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
		}
		caseShorter();
	// 	switch (randomLetterValue) {
	// 		case "Q":
	// 		case "A":
	// 		case "Z":
	// 			if (userinput.value == "1") {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
	// 			} else {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
	// 			}
	// 			caseShorter2();
	// 			break;
	// 		case "W":
	// 		case "S":
	// 		case "X":
	// 			if (userinput.value == "2") {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
	// 			} else {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
	// 			}
	// 			caseShorter2();
	// 			break;
	// 		case "E":
	// 		case "D":
	// 		case "C":
	// 			if (userinput.value == "3") {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
	// 			} else {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
	// 			}
	// 			caseShorter2();
	// 			break;
	// 		case "R":
	// 		case "F":
	// 		case "V":
	// 		case "T":
	// 		case "G":
	// 		case "B":
	// 			if (userinput.value == "4") {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
	// 			} else {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
	// 			}
	// 			caseShorter2();
	// 			break;
	// 		case " ":
	// 			if (userinput.value == "5" || userinput.value == "6") {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
	// 			} else {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
	// 			}
	// 			caseShorter2();
	// 			break;
	// 		case "Y":
	// 		case "H":
	// 		case "N":
	// 		case "U":
	// 		case "J":
	// 		case "M":
	// 			if (userinput.value == "7") {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
	// 			} else {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
	// 			}
	// 			caseShorter2();
	// 			break;
	// 		case "I":
	// 		case "K":
	// 			if (userinput.value == "8") {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
	// 			} else {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
	// 			}
	// 			caseShorter2();
	// 			break;
	// 		case "O":
	// 		case "L":
	// 			if (userinput.value == "9") {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
	// 			} else {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
	// 			}
	// 			caseShorter2();
	// 			break;
	// 		case "P":
	// 			if (userinput.value == "10") {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
	// 			} else {
	// 				document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
	// 			}
	// 			caseShorter2();
	// 			break;
	// 	}
	// }
	// randomizer = Math.round(Math.random());
}
}