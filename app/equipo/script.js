
$(document).ready(function(){
	crearModal();
	createDivs(info);
})

function createDivs(objJSON){	
	var clasePanel;	//nombre completo de la clase del panel
	var panel, panelBody, imgPanel, pPanel;
	//DIV DE COORDINADOR
	crearPanel('.row-coordinador', 'coordinador', objJSON.profesores[1]);
	//DIV DE PROFESORES
	var arrayProf = objJSON.profesores;
	arrayProf.forEach(function(profesor){
		crearPanel('.row-profesor', 'profesor', profesor);
	});
	//DIVS DE AYUDANTES DEBERES
	var arrayGraders = objJSON.graders;
	arrayGraders.forEach(function(grader){
		crearPanel('.row-deberes', 'ayudante-deberes', grader);
	});
	//DIVS DE TAs
	var arrayTA = objJSON.TA;
	arrayTA.forEach(function(ta){
		crearPanel('.row-clases', 'ayudante-clases', ta);
	});	
}

function crearPanel(contenedor, clase, obj){
	clasePanel = 'panel panel-default panel-' + clase;
	panel = $('<div/>').addClass(clasePanel);
	panelBody = $('<div/>').addClass('panel-body');
	var infoAlt = 'imagen ' + clase
	var imgsrc = obj.img;
	if(imgsrc===''){
		imgsrc = 'https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/no-avatar_3.jpg';
	}

	imgPanel = $('<img/>').addClass('img-responsive center-block').attr({src: imgsrc, alt: infoAlt});
	pPanel = $('<p/>').text(obj.nombre);
	panelBody.append(imgPanel, pPanel);
	/*panelBody.append(imgPanel);*/
	panel.append(panelBody);
	//Para que cada panel abra un modal
	panel.attr({
		'data-toggle' : 'modal',
		'data-target' : '#myModal'
	});
	//Para editar la informacion que se muestra al abrir el modal
	panel.click(function(){
		if(obj.tipo==='grader'){
			editarModalAyudantes(obj.nombre, obj.img,'', obj.correo, obj.profesor, obj.paralelo, obj.tipo);
		}else if(obj.tipo==='TA'){
			editarModalAyudantes(obj.nombre, obj.img, obj.correo, null, obj.horario, obj.aula, obj.tipo);
		}else{
			editarModalProfesor(obj.nombre, obj.correo, obj.aula, obj.paralelo, obj.dia, obj.hora, obj.img);
		}
	});
	var col;
	if(clase==='coordinador'){
		col = $('<div/>').addClass('col-md-12');	//Como solo hay 1 coordinador, este tiene que estar centrado
	}else{
		col = $('<div/>').addClass('col-md-4');
	}
	
	
	col.append(panel);
	$(contenedor).append(col);
}

function crearModal(){
	var modal = $('<div/>').addClass('modal fade');
	modal.attr({ 'id' : 'myModal', 'role' : 'dialog'});

	var modalDialog = $('<div/>').addClass('modal-dialog modal-sm');

	var modalContent = $('<div/>').addClass('modal-content text-center');
	//HEADER
	var modalHeader = $('<div/>').addClass('modal-header');
	var header = $('<h4/>').addClass('modal-title');
	header.text('Modal Header');
	modalHeader.append(header);
	//BODY
	var modalBody = $('<div/>').addClass('modal-body');
	var p = $('<p/>').text('hola');
	p.attr('id', 'texto');
	modalBody.append(p);

	modalContent.append(modalHeader, modalBody);
	modalDialog.append(modalContent);
	modal.append(modalDialog);
	$('body').append(modal);
}

function editarModalAyudantes(name, imgSrc, mail, arrayMail, array1, array2, tipo){
	$('.modal-body').empty()	//Vacio el popup
	var img = $('<img/>').addClass('img-responsive center-block').attr({src: imgSrc, alt : 'imagen'});
	var nombre = $('<p/>').text(name);
	$('.modal-body').append(img, nombre);
	//Para anadir la informacion de los mails
	if(mail!=''){	//Solo si es TA se le pasa algo en mail
		$('.modal-body').append($('<p/>').text(mail));
	}else{		//Si no es TA entonces mail esta vacio y se usa arrayMail
		arrayMail.forEach(function(email){
			$('.modal-body').append($('<p/>').text(email))
		});
	}
	//Para anadir informacion de horarios, paralelos, profesores y aulas
	for(var i = 0 ; i < array1.length ; i++){
				var texto = array1[i] + " : " + array2[i];
				$('.modal-body').append($('<p>').text(texto));
	}
	//Cambiar el header
	$('.modal-header').empty();
	var header = $('<h4/>').text(tipo);
	$('.modal-header').append(header);
}

function editarModalProfesor(name, arrayMail, arrayAula, arrayParalelo, arrayDia, arrayHora, img){
	$('.modal-body').empty();
	var img = $('<img/>').addClass('img-responsive center-block').attr({src: img, alt : 'imagen'});
	var nombre = $('<p/>').text(name);
	$('.modal-body').append(img, nombre);
	arrayMail.forEach(function(email){
				$('.modal-body').append($('<p/>').text(email))
	});
	/*for(var i = 0 ; i < arrayHorarios.length ; i++){
				var texto = arrayHorarios[i] + " : " + arrayAulas[i];
				$('.modal-body').append($('<p>').text(texto));
	}*/
	$('.modal-header').empty();
	var header = $('<h4/>').text('Profesor');
	$('.modal-header').append(header);
}
