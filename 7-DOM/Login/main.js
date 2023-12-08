let user = "a@gmail.com";
let code = "1234"

let username = document.getElementById("username");
let password = document.getElementById("password");
let btn = document.getElementById("submit");
let text = document.querySelector(".text");

function handleSubmit(e) {
    e.preventDefault();
    let usernameValue = username.value;
    let passwordValue = password.value;
    if (usernameValue === user && passwordValue === code){
        window.location = "/7-DOM/Login/Interface.html"
    }
    else {
        text.innerHTML = "Usuario o contraseña incorrectos"
    }
}

btn.addEventListener("click", (e) => handleSubmit(e))