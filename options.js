var _host		= localStorage.host 	!= undefined ? localStorage.host : '127.0.0.1';
var _port 		= localStorage.port 	!= undefined ? localStorage.port : '9091';
var _username 	= localStorage.username != undefined && localStorage.username.length>0 ? localStorage.username : false;
var _password 	= localStorage.password != undefined && localStorage.password.length>0 ? localStorage.password : false;

var hostInput;
var portInput;
var usernameInput;
var passwordInput;

function init() {
	hostInput = document.getElementById("host");
	portInput = document.getElementById("port");
	usernameInput = document.getElementById("username");
	passwordInput = document.getElementById("password");
	loadOptions();
	document.getElementById("save").addEventListener("click", saveOptions, false);
	document.getElementById("reset").addEventListener("click", resetOptions, false);
}
function loadOptions() {
	
	hostInput.value = _host;
	portInput.value = _port;
	if(username) {
		usernameInput.value = _username;
	}
	if(password) {
		passwordInput.value = _password;
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
	localStorage.removeItem("host");
	localStorage.removeItem("port");
	localStorage.removeItem("username");
	localStorage.removeItem("password");
	location.reload();
}

window.addEventListener("load", init, false);