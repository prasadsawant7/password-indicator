const password = document.getElementById("pass");
const weak = document.getElementById("weak");
const medium = document.getElementById("medium");
const strong = document.getElementById("strong");

function checkLength() {
    if(password.value.length <= 0) {
        weak.style.backgroundColor = "darkgrey";
        medium.style.backgroundColor = "darkgrey";
        strong.style.backgroundColor = "darkgrey";
    }
    else if(password.value.length < 8) {
        weak.style.backgroundColor = "red";
        medium.style.backgroundColor = "darkgrey";
        strong.style.backgroundColor = "darkgrey";
    } else if(password.value.length >= 8 && password.value.length < 16) {
        weak.style.backgroundColor = "rgb(240,191,76)";
        medium.style.backgroundColor = "rgb(240,191,76)";
        strong.style.backgroundColor = "darkgrey";
    } else if(password.value.length >= 16){
        weak.style.backgroundColor = "rgb(158,235,71)";
        medium.style.backgroundColor = "rgb(158,235,71)";
        strong.style.backgroundColor = "rgb(158,235,71)";
    }
}