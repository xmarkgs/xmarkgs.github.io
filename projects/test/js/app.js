const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const username = document.querySelector("#username");
const usernick = document.querySelector("#usernick");
const userrepos = document.querySelector("#userrepositories");
const userlink = document.querySelector("#userlink");
const profile_pic = document.querySelector("#profile_pic");
const usersite = document.querySelector("#usersite");

const client_id = "66933062d61178e80d5a";
const client_secret = "db3dcacd7470eedcc701438277930d25fdd053ec";

const findUser = async (user) => {
	const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
	const data = await api_call.json();
	return {data}; 
};

const showData = () => {
	findUser(inputValue.value).then((result) => {
		console.log(result);
		username.innerHTML = `Name: ${result.data.name}`;
		usernick.innerHTML = `Nickname: ${result.data.login}`
		userrepos.innerHTML = `The quantity of repositories: ${result.data.public_repos}`
		userlink.innerHTML = `Link to his acc: ${result.data.html_url}`;
		userlink.setAttribute("href", `${result.data.html_url}`);
		profile_pic.setAttribute("src", `${result.data.avatar_url}`);
		usersite.innerHTML = `His website: ${result.data.blog}`;
		usersite.setAttribute("href", `${result.data.blog}`);
	});
};

searchButton.addEventListener("click", () =>{
	showData();
});