$(document).ready(function(){
	createDivs(info);
	$('#mapModal').on('show.bs.modal', function(){
		setTimeout(function() {
		    map.invalidateSize();
		}, 10);
	});

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
	colImg = $('<div/>').addClass('col-md-4');
	colInfo = $('<div/>').addClass('col-md-4');
	colMap = $('<div/>').addClass('col-md-4').attr({'id' : idMapa});

	var img = $('<img/>').addClass('img-responsive center-block').attr({'src': obj.img, 'alt': 'imagen de ta', 'id' : 'imgAyudante'});
	colImg.append(img);

	var nombre = $('<p/>').text(obj.nombre);
	var correo = $('<p/>').text(obj.correo);
	colInfo.append(nombre, correo);

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

	/*
	var row = $('<div/>').addClass('row featurette');
	var colImg, colInfo;
	if(i%2==0){
		colImg = $('<div/>').addClass('col-md-4');
		colInfo = $('<div/>').addClass('col-md-8');
	}else{
		colImg = $('<div/>').addClass('col-md-4 col-md-push-8');
		colInfo = $('<div/>').addClass('col-md-8 col-md-pull-4');
	}
	img = $('<img/>').addClass('img-responsive center-block').attr({'src': obj.img, 'alt': 'imagen de ta', 'id' : 'imgAyudante'});
	colImg.append(img);
	
	var nombre = $('<p/>').text(obj.nombre);
	var correo = $('<p/>').text(obj.correo);
	colInfo.append(nombre, correo);
	
	var horario;
	for (var i = 0; i < obj.horario.length; i++) {
		horario = obj.horario[i] + ' en ' + obj.aula[i];
		colInfo.append($('<p/>').text(horario));
	}
	var mapLink = $('<p/>').attr({
		'id' : 'mapLink',
		'data-toggle' : 'modal',
		'data-target' : '#mapModal'
	}).text('Ver mapa');

	mapLink.click(function(){
		//crearModal();
		//crearMapa();
		map.setView(new L.LatLng(obj.lat[0], obj.lng[0]), 15);
		var marker, lat, lng, aula;
		for (var j = 0; j < obj.lat.length; j++) {
			lat = obj.lat[j];
			lng = obj.lng[j];
			marker = L.marker([lat, lng]).addTo(map);
			aula = obj.aula[j];
			marker.bindPopup(aula).openPopup();
		}
	});


	colInfo.append(mapLink);*/
	

	
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


function crearMapa(){
	var map = L.map('map',{
		    center: [43.64701, -79.39425],
		    zoom: 15
	});

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

}