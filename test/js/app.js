const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const username = document.querySelector("#username");
const usernick = document.querySelector("#usernick");
const userrepos = document.querySelector("#userrepositories");
const userlink = document.querySelector("#userlink");

const client_id = "Iv1.46f567125d0caad9";
const client_secret = "6c837de30b9e33bb60bd3fe1aba0c8f24ddad95b";

const findUser = async (user) => {
	const api_call = await fetch(`https://api.github.com/user/${user}?client_id=${client_id}&client_secret=${client_secret}`);
	const data = await api_call.json();
	return {data}; 
};

const showData = () => {
	findUser(inputValue.value).then((res) => {
		console.log(res);
	});
};

searchButton.addEventListener("click", () =>{
	showData();
});