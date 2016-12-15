obj = {
	'graders' : [{
			'matricula' : '7777777777',
			'nombre' : 'grader1',
			'correo' : ['correo1@espol.edu.ec', 'correo2@espol.edu.ec'],
			'profesor' : ['profesor1', 'profesor2'],
			'paralelo' : ['paralelo1', 'paralelo2'],
			'tipo' : 'grader' 
		},
		{
			'matricula' : '8888888888',
			'nombre' : 'grader2',
			'correo' : ['correo1@espol.edu.ec', 'correo2@espol.edu.ec'],
			'profesor' : ['profesor1', 'profesor2'],
			'paralelo' : ['paralelo1', 'paralelo2'],
			'tipo' : 'grader' 
		},
		{
			'matricula' : '9999999999',
			'nombre' : 'grader3',
			'correo' : ['correo1@espol.edu.ec', 'correo2@espol.edu.ec'],
			'profesor' : ['profesor1', 'profesor2'],
			'paralelo' : ['paralelo1', 'paralelo2'],
			'tipo' : 'grader'  
		},
		{
			'matricula' : '0000000000',
			'nombre' : 'grader4',
			'correo' : ['correo1@espol.edu.ec', 'correo5@espol.edu.ec'],
			'profesor' : ['profesorA', 'profesorB'],
			'paralelo' : ['paraleloA', 'paraleloB'],
			'tipo' : 'grader'  
		}
	],
	'TA' : [
		{
			'matricula' : '1111111111',
			'nombre' : 'ayudanteTA1',
			'correo' : ['correo1@espol.edu.ec', 'correo2@espol.edu.ec'],
			'horarios' : ['horario1', 'horario2'],
			'aula' : ['aula1', 'aula2'],
			'tipo' : 'ta' 
		},
		{
			'matricula' : '2222222222',
			'nombre' : 'ayudanteTA2',
			'correo' : 'correo',
			'horarios' : ['horario1', 'horario2'],
			'aula' : ['aula3', 'aula4'],
			'tipo' : 'ta'  
		},
		{
			'matricula' : '3333333333',
			'nombre' : 'ayudanteTA3',
			'correo' : ['correo1@espol.edu.ec', 'correo2@espol.edu.ec'],
			'horarios' : ['horario1', 'horario2'],
			'aula' : ['aula5', 'aula6'],
			'tipo' : 'ta'  
		},
		{
			'matricula' : '4444444444',
			'nombre' : 'ayudanteTA4',
			'correo' : ['correo1@espol.edu.ec', 'correo2@espol.edu.ec'],
			'horarios' : ['horario1', 'horario2'],
			'aula' : ['aula7', 'aula8'],
			'tipo' : 'ta'  
		},
		{
			'matricula' : '5555555555',
			'nombre' : 'ayudanteTA5',
			'correo' : ['correo1@espol.edu.ec', 'correo2@espol.edu.ec'],
			'horarios' : ['horario1', 'horario2'],
			'aula' : ['aula9', 'aula10'],
			'tipo' : 'ta'  
		},
		{
			'matricula' : '6666666666',
			'nombre' : 'ayudanteTA6',
			'correo' : ['correo1@espol.edu.ec', 'correo2@espol.edu.ec'],
			'horarios' : ['horario1', 'horario2'],
			'aula' : ['aula11', 'aula12'],
			'tipo' : 'ta'  
		},
	],
	'profesores' : [
		{
	      "nombre": "AVENDAÑO SUDARIO ALLAN ROBERTO",
	      "aula": [
	        "A-210",
	        "24C-205 FIMCP",
	        "COMP A FIMCP"
	      ],
	      "paralelo": [
	        "37",
	        "34"
	      ],
	      "dia": [
	        "LUNES",
	        "MI�RCOLES",
	        "JUEVES",
	        "MARTES"
	      ],
	      "hora": [
	        "7:30:00-9:30:00",
	        "15:30:00-17:30:00"
	      ],
	      "correo": [
	        "aavendan@fiec.espol.edu.ec",
	        "aavendan@espol.edu.ec"
	      ],
	      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/javiles.jpg"
	    },
		{
	      "nombre": "BONILLA RAFAEL IGNACIO",
	      "aula": [
	        "15A-05",
	        "A-208",
	        "LPU1",
	        "LPU2"
	      ],
	      "paralelo": [
	        "8",
	        "7"
	      ],
	      "dia": [
	        "JUEVES",
	        "MARTES"
	      ],
	      "hora": [
	        "14:30:00-16:30:00",
	        "11:30:00-13:30:00"
	      ],
	      "correo": [
	        "rabonilla@espol.edu.ec"
	      ],
	      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/rafael%20bonilla.jpg"
	    },
		{
	      "nombre": "CALDERON ARGUELLO MARCO ANTONIO",
	      "aula": [
	        "IC-27",
	        "IL02 - LABORATORIO BETA"
	      ],
	      "paralelo": [
	        "4"
	      ],
	      "dia": [
	        "JUEVES",
	        "MARTES"
	      ],
	      "hora": [
	        "14:30:00-16:30:00"
	      ],
	      "correo": [
	        "ancalder@espol.edu.ec"
	      ],
	      "img": "https://www.fiec.espol.edu.ec/sites/fiec.espol.edu.ec/files/mcalderon.jpg"
	    }
	]
}
$(document).ready(function(){
	//console.log(info);
	createDivs(info);
	crearModal();

})

function createDivs(objJSON){	
	var clasePanel;	//nombre completo de la clase del panel
	var panel, panelBody, imgPanel, pPanel;
	//DIV DE PROFESORES
	var arrayProf = objJSON.profesores;
	arrayProf.forEach(function(profesor){
		crearPanel('.profesores', 'profesor', profesor);
	});
	//DIVS DE AYUDANTES DEBERES
	var arrayGraders = objJSON.graders;
	arrayGraders.forEach(function(grader){
		crearPanel('.ayudante-deberes', 'ayudante-deberes', grader);
	});
	//DIVS DE TAs
	var arrayTA = objJSON.TA;
	arrayTA.forEach(function(ta){
		crearPanel('.ayudante-clases', 'ayudante-clases', ta);
	});	
}

function crearPanel(contenedor, clase, obj){
	clasePanel = 'panel panel-default panel-' + clase;
	panel = $('<div/>').addClass(clasePanel);
	panelBody = $('<div/>').addClass('panel-body');
	var infoAlt = 'imagen ' + clase
	imgPanel = $('<img/>').addClass('img-responsive center-block').attr({src: 'http://placehold.it/350x150', alt: infoAlt});
	pPanel = $('<p/>').text(obj.nombre);
	panelBody.append(imgPanel, pPanel);
	panel.append(panelBody);
	//Para que cada panel abra un modal
	panel.attr({
		'data-toggle' : 'modal',
		'data-target' : '#myModal'
	});

	panel.click(function(){
		if(obj.tipo==='grader'){
			editarModalGrader(obj.nombre, obj.correo, obj.profesor, obj.paralelo, obj.tipo);
		}else if(obj.tipo==='ta'){
			editarModalTA(obj.nombre, obj.correo, obj.horarios, obj.aula, obj.tipo);
		}else{
			editarModalProfesor(obj.nombre, obj.correo, obj.aula, obj.paralelo, obj.dia, obj.hora, obj.img);
		}
	});
	$(contenedor).append(panel);
	
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

function editarModalGrader(name, arrayMail, arrayProfesor, arrayParalelo, tipo){
	$('.modal-body').empty();
	var img = $('<img/>').addClass('img-responsive center-block').attr({src: 'http://placehold.it/350x150', alt : 'imagen'});
	var nombre = $('<p/>').text(name);
	$('.modal-body').append(img, nombre);
	arrayMail.forEach(function(email){
				$('.modal-body').append($('<p/>').text(email))
	});
	for(var i = 0 ; i < arrayProfesor.length ; i++){
				var texto = arrayProfesor[i] + " : " + arrayParalelo[i];
				$('.modal-body').append($('<p>').text(texto));
	}
	$('.modal-header').empty();
	var header = $('<h4/>').text(tipo);
	$('.modal-header').append(header);
}

function editarModalTA(name, mail, arrayHorarios, arrayAulas, tipo){
	$('.modal-body').empty();
	var img = $('<img/>').addClass('img-responsive center-block').attr({src: 'http://placehold.it/350x150', alt : 'imagen'});
	var nombre = $('<p/>').text(name);
	$('.modal-body').append(img, nombre);
	$('.modal-body').append($('<p/>').text(mail))
	
	for(var i = 0 ; i < arrayHorarios.length ; i++){
				var texto = arrayHorarios[i] + " : " + arrayAulas[i];
				$('.modal-body').append($('<p>').text(texto));
	}
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

