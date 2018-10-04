const express = require("express");
const path = require("path");

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

    res.send(hours + ':' + minutes + "\n" + day + "/" + month + "/" + year);



    console.log("El usuario ha pedido la hora y la fecha")
}


app.get("/fecha", getTime);

app.listen(3000);
console.log("La app está funcionando");