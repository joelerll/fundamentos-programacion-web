var express = require('express');
var myParser = require("body-parser");
var app = express();

app.use(express.static(__dirname + '/'))
console.log("Escuchando al puerto http://127.0.0.1:8125/")

app.listen(process.env.PORT || 8125)

app.use(myParser.urlencoded({extended : true}));
 app.post("/post/index3.html", function(request, response) {
     console.log(request.body); //This prints the JSON document received (if it is a JSON document)
});

app.use(myParser.urlencoded({extended : true}));
 app.post("/app/sandbox/ejercicio-detalle/ejercicio-detalle.template.html", function(request, response) {
     console.log(request.body); //This prints the JSON document received (if it is a JSON document)
});
