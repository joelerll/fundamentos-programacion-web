
$(document).ready(function(){
	crearModal();
	createDivs(info);
	//crearModalLogin();
	$('#btnLogin').click(function(){
		$('.loginModal').remove();
		crearModalLogin();
	});
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
	var imgsrc =  obj.img;
	if(imgsrc===''){
		imgsrc = "../../public/media/profesores/no-Avatar.jpg";
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
			//editarModalAyudantes(obj.nombre, obj.img,'', obj.correo, obj.profesor, obj.paralelo, 'Ayudante de deberes');
			editarModal(obj.nombre, obj.img, '', obj.correo, 'Ayudante de deberes');
		}else if(obj.tipo==='TA'){
			//editarModalAyudantes(obj.nombre, obj.img, obj.correo, null, obj.horario, obj.aula, 'Ayudante de clases');
			editarModal(obj.nombre, obj.img, obj.correo, null, 'Ayudante de clases');
		}else{
			//editarModalProfesor(obj.nombre, obj.correo, obj.aula, obj.paralelo, obj.dia, obj.hora, obj.img);
			editarModal(obj.nombre, obj.img, '', obj.correo, 'Profesor');
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
	var modalHeader = $('<div/>').addClass('modal-header').attr('id', 'modalHeaderPanel');
	//BODY
	var modalBody = $('<div/>').addClass('modal-body').attr('id', 'modalBodyPanel');
	
	modalContent.append(modalHeader, modalBody);
	modalDialog.append(modalContent);
	modal.append(modalDialog);
	$('body').append(modal);
}

function editarModal(name, imgSrc, mail, arrayMail, tipo){
	$('#modalBodyPanel').empty()	//Vacio el body del modal
	//CAMBIAR EL BODY
	var img = $('<img/>').addClass('img-responsive center-block').attr({src: imgSrc, alt : 'imagen'});
	var nombre = $('<p/>').text(name);
	$('#modalBodyPanel').append(img, $('<h5/>').text('Nombre'),nombre, $('<h5/>').text('Correo(s)'));
	//Para anadir la informacion de los mails
	if(mail!=''){	//Solo si es TA se le pasa algo en mail
		$('#modalBodyPanel').append($('<p/>').text(mail));
	}else{		//Si no es TA entonces mail esta vacio y se usa arrayMail
		arrayMail.forEach(function(email){
			$('#modalBodyPanel').append($('<p/>').text(email))
		});
	}	
	//CAMBIAR EL HEADER
	$('#modalHeaderPanel').empty();	//vacio el header del modal
	$('#modalHeaderPanel').append($('<h4/>').text(tipo));
}

