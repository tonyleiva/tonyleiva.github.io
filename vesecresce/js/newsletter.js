/*tonyleivah*/
$("#name").on("input", () => validateName())
$("#email").on("input", () => validateEmail())
$("#send").click((event) => sendClick(event))

function validateInput() {
	if(isValidName() && isValidEmail()) {
		$("#send").removeClass("disabled")
	} else {
		$("#send").addClass("disabled")
	}
}
function validateEmail() {
	validateInput()
	if (isValidEmail())
		$("#email").removeClass("inputError")
	else
		$("#email").addClass("inputError")
}
function isValidEmail() {
	var email = $("#email").val();
	if (email === "") {
		return false
	} else {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(email)
	}
}
function validateName() {
	validateInput()
	if (isValidName()) {
		$("#name").removeClass("inputError")
	} else {
		$("#name").addClass("inputError")
	}
}
function isValidName() {
	var name = $("#name").val();
	return !(name === "")
}
function sendClick(event) {
	event.preventDefault()
	addMyEmail()
}
function addMyEmail() {
	$.ajax({
		url : "/programa/addMyEmail/",
		type : "post",
		data : {
			name: $("#name").val(),
			email: $('#email').val()
		},
		success: () => { successAddMyEmail() },
		error: () => { successAddMyEmail() }
	})
}

function successAddMyEmail() {
    var button = document.getElementById('send')
    button.value = "ENVIADO"
	$("#send").addClass("disabled")
}
