$(document).ready(function(){
	createDivs(info);

});

function createDivs(JSON){
	var arrayTA = JSON.TA;
	var i = 0;
	arrayTA.forEach(function(ta){
		var id = 'map-canvas-' + ta.nombre;
		createRow(ta, '.container', 'ta', i, id);
		i++;
	});
}

function createRow(obj, container, clase, i, idMapa){
	var row = $('<div/>').addClass('row featurette');
	var colImg, colInfo, colMap;
	colImg = $('<div/>').addClass('col-md-4 col-xs-12 col-sm-12');
	colInfo = $('<div/>').addClass('col-md-4 col-xs-12 col-sm-12');
	colMap = $('<div/>').addClass('col-md-4 col-xs-12 col-sm-12').attr({'id' : idMapa});

	var img = $('<img/>').addClass('img-responsive center-block').attr({'src': obj.img, 'alt': 'imagen de ta', 'id' : 'imgAyudante'});
	colImg.append(img);
	var nombre = $('<p/>').text(obj.nombre);
	var correo = $('<p/>').text(obj.correo);
	colInfo.append( $('<h4/>').text('Nombre'), nombre,  $('<h4/>').text('Correo'), correo, $('<h4/>').text('Horarios'));

	var horario;
	for (var i = 0; i < obj.horario.length; i++) {
		horario = obj.horario[i] + ' en ' + obj.aula[i];
		colInfo.append($('<p/>').text(horario));
	}

	row.append(colImg, colInfo, colMap);
	var hr = $('<hr/>').addClass('featurette-divider');
	$(container).append(hr, row, hr);
	/*FALTA CREAR EL MAPA*/

	var map = L.map(idMapa,{
	    center: [43.64701, -79.39425],
	    zoom: 20
	});

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	   	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	map.setView(new L.LatLng(obj.lat[0], obj.lng[0]), 20);
		var marker, lat, lng, aula;
		for (var j = 0; j < obj.lat.length; j++) {
			lat = obj.lat[j];
			lng = obj.lng[j];
			marker = L.marker([lat, lng]).addTo(map);
			aula = obj.aula[j];
			marker.bindPopup(aula).openPopup();
		}	
}

function crearModal(){
	var modal = $('<div/>').addClass('modal fade');
	modal.attr({ 'id' : 'mapModal', 'role' : 'dialog'});

	var modalDialog = $('<div/>').addClass('modal-dialog modal-lg');

	var modalContent = $('<div/>').addClass('modal-content text-center');

	//BODY
	var modalBody = $('<div/>').addClass('modal-body').attr('id', 'modalBodyPanel');
	
	modalContent.append(modalBody);
	modalDialog.append(modalContent);
	modal.append(modalDialog);
	
	$('body').append(modal);
}
