
function alertMe() {
    alert("hello");
}

function bold() {
    var text = document.getElementById("hello");
    text.style.fontWeight = "bold";
    text.style.color = "green";
    text.style.textDecoration = "underline";
}

function  bigger() {
    var text = document.getElementById("hello");
    text.style.fontSize = "24pt";
}

function unbold() {
    var text = document.getElementById("hello");
    text.style.fontSize = "initial";
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = "none";
}
function upper() {
    var suffix = "-Moo"
    var text = document.getElementById("hello");
    text.style.textTransform = "uppercase";
    text.value = text.value.split('.').join('') + suffix;
}