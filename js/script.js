function register() {
    var userName = document.getElementById('userName').value;
    var userEmail = document.getElementById('userEmail').value;
    var userPass = document.getElementById('userPass').value;
    var error = document.getElementById('incorrect')

    if (!userEmail || !userName || !userPass) {
        error.textContent = "All inputs is required";
        error.style.color = "#dc3545";
        return;
    }

    var users = JSON.parse(localStorage.getItem('users')) || [];
    // console.log(users);

    if (users.some(user => user.userEmail === userEmail)) {
        error.textContent = "Email already exists";
        error.style.color = "#dc3545";
        return;
    }

    users.push({ userName, userEmail, userPass })

    localStorage.setItem('users', JSON.stringify(users));

    error.textContent = "Succuss";
    error.style.color = "28a745";
    error.style.fontWeight = "bolder";

}



function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("Password").value;
    var incorrect = document.getElementById('incorrect');


    if (!email || !password) {
        incorrect.textContent = "All inputs is required";
        incorrect.style.color = "#dc3545";
        return;
    }

    var users = JSON.parse(localStorage.getItem('users')) || [];
    // console.log("Users from storage:", users);
    var userFound = users.find(function (e) {
        return e.userEmail === email && e.userPass === password;;
    });

    if (!userFound) {
        incorrect.textContent = "incorrect email or password";
        incorrect.style.color = "#dc3545";
        return;
    }
    localStorage.setItem('loggedUser', JSON.stringify(userFound));
    window.location.href = "home.html";

}

document.addEventListener('DOMContentLoaded', function () {

    var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

    if (loggedUser) {
        var welcomMessage = document.querySelector(".box .welcomMessage")
        welcomMessage.textContent = `Welcom  ${loggedUser.userName}`;
    }

    var logoutButton = document.querySelector(".btn-outline-warning");
    if(logoutButton){
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem('loggedUser');
            window.location.href = "index.html";
        });
    }
   
});






