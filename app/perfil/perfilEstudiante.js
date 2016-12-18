$( document ).ready(function() {
    console.log( ejercicio );

    cargar(1);
});

function cargar(){
    $(".recent ul .row").append(
		$("<li>",{"id":"id1"}).append(
			$("<div>",{"class":"col-md-8 col-xs-8"}).append(
				$("<a>",{"href":"#"}).text("Ejercicio3:")
			)
		)
	);
	difficulty(2,1)
}

function difficulty(dificultad, id){
	var cont = 0;
	$("#id"+ id).append(
		$("<div>",{"class":"col-md-4 col-xs-4"}));
	//Se agregan estrellas dependiendo de la dificultad
	for(x = 1; x<=dificultad; x++){
		$("#id1 .col-md-4").append(
			$("<span>",{"class":"glyphicon glyphicon-star"})
			);
		cont++;
	}
	for(y = cont; y<5;y++){
	$("#id"+ id +" .col-md-4").append(
		$("<span>",{"class":"glyphicon glyphicon-star-empty"})
		);
	}
}

/*
var artistas = "https://api.spotify.com/v1/search?q="+artista+"&type=artist";
	$.getJSON(artistas, function(resp)
*/