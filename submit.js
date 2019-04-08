function login(){
	var username = document.getElementById("username").value;
	var pass = document.getElementById("pass").value;
	if (validation()){
		alert("Datos correctos")
	}
}

function validation(){
	var name = document.getElementById("username").value;
	var pass = document.getElementById("pass").value;
	if(name == pass){
		return true;
	}
	else{
		alert("Username y Password no son iguales")
	}
}
