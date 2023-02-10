var password = 'TUFDVUxB';
var username = 'nathanArcher';
var corruptedPassword = 'T1JDSEVTVFJB';
var corruptedUsername = 'MACULA';
var place = 'Kenton Lake'
var correctDate = new Date(Date.UTC(2006, 05, 14));

function signin(){
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    if(user.value == username && pass.value == password){
        window.location = "./system0.html";
        document.querySelector(".worked").textContent = "";
    } else {
        document.querySelector(".worked").textContent = "Username or Password are invalid.";
    }
}

function corruptedSignin(){
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    if(user.value == corruptedUsername && pass.value == corruptedPassword){
        window.location = "https://www.youtube.com/watch?v=ecQW1etKrFs";
        document.querySelector(".worked").textContent = "";
    } else if(user.value == username && pass.value == password){
        window.location = "./system0.html";
        document.querySelector(".worked").textContent = "";
    } else {
        document.querySelector(".worked").textContent = "Username or Password are [CORRUPTED DATA].";
    }
}

function forgot(){
    var where = document.getElementById("where");
    var when = document.getElementById("when");
    var date = new Date(when.value);
    if(where.value == place && date.toDateString() == correctDate.toDateString()){
        document.querySelector(".password").textContent = password;
        document.querySelector(".worked").textContent = "";
    } else {
        document.querySelector(".worked").textContent = "Wrong answers.";
    }
}

function corruptedForgot(){
    var where = document.getElementById("where");
    var when = document.getElementById("when");
    var date = new Date(when.value);
    if(where.value == place && date.toDateString() == correctDate.toDateString()){
        document.querySelector(".password").textContent = corruptedPassword;
        document.querySelector(".worked").textContent = "";
    } else {
        document.querySelector(".worked").textContent = "Wrong answers.";
    }
}
