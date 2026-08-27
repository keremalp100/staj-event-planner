const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const savedUsername = sessionStorage.getItem("username") || "admin";
    const savedPassword = sessionStorage.getItem("password") || "1234";

    if (username === savedUsername && password === savedPassword) {

        window.location.href = "dashboard.html";

    } else {

        alert("Kullanıcı adı veya şifre yanlış!");

    }

});