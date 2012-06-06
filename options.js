function init() {
	loadOptions();
	document.getElementById("save").addEventListener("click", saveOptions, false);
	document.getElementById("reset").addEventListener("click", resetOptions, false);
}
function loadOptions() {
	hostInput = document.getElementById("host");
	portInput = document.getElementById("port");
	usernameInput = document.getElementById("username");
	passwordInput = document.getElementById("password");
	if(host) {
		hostInput.value = host;
	}
	portInput.value = port;
	if(username && username.length > 0) {
		usernameInput.value = username;
	}
	if(password && password.length > 0) {
		passwordInput.value = password;
	}
}
function saveOptions() {
	console.log(document.getElementById("host").value);
	localStorage.host = document.getElementById("host").value;
	localStorage.port = document.getElementById("port").value;
	localStorage.username = document.getElementById("username").value;
	localStorage.password = document.getElementById("password").value;
}
function resetOptions() {
	localStorage.removeItem("user");
	localStorage.removeItem("port");
	localStorage.removeItem("username");
	localStorage.removeItem("password");
	location.reload();
}

window.addEventListener("load", init, false);