const express = require("express");
const path = require("path");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const app = express();


const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre",
    "noviembre", "diciembre"];

function getTime(req, res) {
    const date = new Date();
    const day = date.getDate();
    const year = date.getFullYear();
    const month = meses[date.getMonth()];
    const hours = date.getHours();
    const minutes = date.getMinutes();

    res.send(hours + ":" + minutes + "\n" + day + "/" + month + "/" + year);



    console.log("El usuario ha pedido la hora y la fecha")
}
function getStars(req, res){
	loadJSON('https://api.github.com/repos/luislombardis/PaginaLuis',
         function(data) { res.send(data); },
         function(xhr) { console.error(xhr); }
   );     
   console.log("El usuario ha pedido las estrellas del respositorio");
}


function loadJSON(path, res)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                    var myParsed = JSON.parse(xhr.responseText);
				    res("Mis estrellas son: "+myParsed.stargazers_count);
            }  
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}


app.get("/fecha", getTime);
app.get("/estrellas", getStars)

app.listen(3000);
console.log("La app está funcionando");