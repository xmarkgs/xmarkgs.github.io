const input = document.querySelector("input");
const userinput = document.querySelector("#userinput");

let randomizer,
	rand,
	randomletter,
	randomLetterValue,
	isGreen,
	userStatsInput = document.querySelector('#userstats'),
	userCorrectAns = 0,
	userWrongAns = 0,
	letters = [
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
		userStatsInput.value = Math.round(userCorrectAns / (userCorrectAns + userWrongAns) * 100) + "%"; 
	}, 2000);
}

userinput.oninput = () => {
	gameFunction();
};

function gameFunction() {
	if (randomizer == 0) {
		isGreen = false;

		letters[rand - 1].forEach(function (item) {
			if (userinput.value == item) {
				isGreen = true;
			}
		});

		if (isGreen == true) {
			document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
			userCorrectAns++;
		} else if (isGreen == false) {
			document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
			userWrongAns++;
		}
		caseShorter();
	} else if (randomizer == 1) {
		isGreen = false;
		if (userinput.value.match(/^[-\+]?\d+/) === null) {
			isGreen = false;
		} else {
			letters[userinput.value - 1].forEach(function (item) {
				if (randomLetterValue == item) {
					isGreen = true;
				}
	
			});
		}
		if (isGreen == true) {
			document.getElementById("game_section").style.background = "linear-gradient(23.39deg, #269e4e, rgb(20, 199, 79))";
			userCorrectAns++;
		} else if (isGreen == false) {
			document.getElementById("game_section").style.background = "linear-gradient(23.39deg, rgb(194, 40, 40), rgb(240, 61, 61))";
			userWrongAns++;
		}
		caseShorter();
	}
}