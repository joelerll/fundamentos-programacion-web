$(document).ready(function(){
	createDivs(info);
});

function createDivs(JSON){
	var arrayTA = JSON.TA;
	arrayTA.forEach(function(ta){
		createRow(ta, '.container', 'ta');
	});
}

function createRow(obj, container, clase){
	var row = $('<div/>').addClass('row');
	var colImg = $('<div/>').addClass('col-md-4');
	var colInfo = $('<div/>').addClass('col-md-8');
	var horario;
	img = $('<img/>').addClass('img-responsive center-block').attr({src: obj.img, alt: 'imagen de ta'});
	colImg.append(img);

	var nombre = $('<p/>').text(obj.nombre);
	var correo = $('<p/>').text(obj.correo);
	colInfo.append(nombre, correo);
	for (var i = 0; i < obj.horario.length; i++) {
		horario = obj.horario[i] + ' en ' + obj.aula[i];
		colInfo.append($('<p/>').text(horario));
	}

	row.append(colImg, colInfo);
	$(container).append(row);
}