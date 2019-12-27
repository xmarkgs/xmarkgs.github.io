const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const username = document.querySelector("#username");
const usernick = document.querySelector("#usernick");
const userrepos = document.querySelector("#userrepositories");
const userlink = document.querySelector("#userlink");

const client_id = "66933062d61178e80d5a";
const client_secret = "db3dcacd7470eedcc701438277930d25fdd053ec";

// ?client_id=${client_id}&client_secret=${client_secret}

const findUser = async (user) => {
	const api_call = await fetch(`https://api.github.com/user/${user}?client_id=${client_id}&client_secret=${client_secret}`);
	const data = await api_call.json();
	return {data}; 
};

const showData = () => {
	findUser(inputValue.value).then((result) => {
		console.log(result);
	});
};

searchButton.addEventListener("click", () =>{
	showData();
});