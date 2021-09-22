// $= query selector e benziyor
$(document).ready(function() {
    setTimeout(fillFormInput,1000) 
})
// window.onload = function () {
        // setTimeout(fillFormInput,1000)}

const fillFormInput = ()=> {
    let email = document.getElementById("email").value="eve.holt@reqres.in";
    let password = document.getElementById("psw").value= "pistol";
    localStorage.setItem("email",email);
}

// eski yöntem

const apiRegister = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("psw").value;
    const bodyData = {
        email : email,
        password : password
    }
}