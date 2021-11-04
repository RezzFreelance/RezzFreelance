setInterval(function(){
    if (innerWidth <= 600){
        document.querySelector(".header-text").style.margin = "0"
        document.querySelector(".ht2").style.margin = "0"
        document.querySelector(".portfolio").style.margin = "0"
    }
    if (innerWidth <= 400){
        document.querySelector("header").style.padding = "10px"
        document.querySelector(".hh2").style.padding = "10px"
        document.querySelector(".hh3").style.padding = "10px"
        document.querySelector(".portfolio").style.padding = "0px"
    }
}, 1)

let verumen = document.querySelector("#ver-umen").getContext("2d");

verumen.fillStyle = "green"
verumen.fillRect(0, 0, 270, innerHeight)

let frontumen = document.querySelector("#front-umen").getContext("2d");

frontumen.fillStyle = "green"
frontumen.fillRect(0, 0, 240, innerHeight)

let backumen = document.querySelector("#back-umen").getContext("2d");

backumen.fillStyle = "#FF9300"
backumen.fillRect(0, 0, 150, innerHeight)

let copyumen = document.querySelector("#copy-umen").getContext("2d");

copyumen.fillStyle = "green"
copyumen.fillRect(0, 0, 210, innerHeight)