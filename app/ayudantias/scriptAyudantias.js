$(document).ready(function(){
	createDivs(info);
	crearModalLogin()
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
	img = $('<img/>').addClass('img-responsive center-block').attr({'src': obj.img, 'alt': 'imagen de ta', 'id' : 'imgAyudante'});
	var panelImg = $('<div/>').addClass('panel panel-default panel-img');
	var panelImgBody = $('<div/>').addClass('panel-body panel-body-img');
	panelImgBody.append(img);
	panelImg.append(panelImgBody);
	colImg.append(panelImg);
	
	var colInfo = $('<div/>').addClass('col-md-8');
	var nombre = $('<p/>').text(obj.nombre);
	var correo = $('<p/>').text(obj.correo);
	var panelInfo = $('<div/>').addClass('panel panel-default panel-info');
	var panelInfoBody = $('<div/>').addClass('panel-body panel-body-info');
	panelInfoBody.append(nombre, correo);
	
	var horario;
	for (var i = 0; i < obj.horario.length; i++) {
		horario = obj.horario[i] + ' en ' + obj.aula[i];
		panelInfoBody.append($('<p/>').text(horario));
	}
	panelInfo.append(panelInfoBody);
	colInfo.append(panelInfo);


	row.append(colImg, colInfo);
	$(container).append(row);
}


function crearModalLogin(){
	var modalLogin = $('<div/>').addClass('modal fade');
	modalLogin.attr({'id' : 'loginModal', 'role' : 'dialog'});

	var modalDialog = $('<div/>').addClass('modal-dialog');
	var modalContent = $('<div/>').addClass('modal-content');

	//HEADER
	var modalHeader = $('<div/>').addClass('modal-header').attr('id', 'modalHeaderLogin');
	var title = $('<h3/>').addClass('modal-title words');
	title.text('Login');
	
	modalHeader.append(title);
	
	//BODY
	var modalBody = $('<div/>').addClass('modal-body');
	var form = $('<form/>');
	
	var formGroupUsuario = $('<div/>').addClass('form-group');
	var lblUsuario = $('<label/>').attr({'for' : 'usr', 'class' : 'words', 'text-align' : 'left'}).text('Usuario:');
	var inputUsuario = $('<input/>').attr({'type' : 'text', 'class' : 'form-control', 'id' : 'usr'});
	formGroupUsuario.append(lblUsuario, inputUsuario);

	var formGroupPass = $('<div/>').addClass('form-group');
	var labelPass = $('<label/>').attr({'for' : 'pwd', 'class' : 'words'}).text('Contraseña:');
	var inputPass = $('<input/>').attr({'type' : 'password', 'class' : 'form-control', 'id' : 'pwd'}); 
	formGroupPass.append(labelPass, inputPass);

	var checkBox = $('<div/>').addClass('checkbox');
	var lblCheck = $('<label/>');
	var inputCheck = $('<input/>').attr({'type' : 'checkbox', 'value' : '', 'class' : 'words'});
	lblCheck.append(inputCheck, 'No cerrar sesion');
	var formEstProf = $('<div/>').attr({'action' : ''});
	var radioEst = $('<input/>').attr({'type' : 'radio', 'name' : 'tipo', 'value' : 'male'});
	var radioProf = $('<input/>').attr({'type' : 'radio', 'name' : 'tipo', 'value' : 'female'});
	
	formEstProf.append(radioEst, ' Estudiante', $('<br/>'), radioProf, ' Profesor', $('<br/>'));
	
	checkBox.append(lblCheck, $('<br/>'), formEstProf);

	form.append(formGroupUsuario, formGroupPass, checkBox);
	
	modalBody.append(form);
	
	//FOOTER
	var modalFooter = $('<div/>').addClass('modal-footer');
	var btnLogin = $('<button/>').attr({'type' : 'button', 'class' : 'btn btn-default inline pull-left', 'id' : 'entrar'});
	btnLogin.text('Login');
	var btnClose = $('<button/>').attr({'type' : 'button', 'class' : 'btn btn-default inline pull-right', 'data-dismiss' : 'modal'});
	btnClose.text('Close');
	var hr = $('<hr/>').addClass('clearer');
	var aCrearCuenta = $('<a/>').attr({'href' : '#', 'class' : 'words'});
	var aText1 = $('<h6/>').text('Crear una cuenta');
	aCrearCuenta.append(aText1);
	var aOlvidarPass = $('<a/>').attr({'href' : '#', 'class' : 'words'});
	var aText2= $('<h6/>').text('¿Olvidaste tu contraseña?');
	aOlvidarPass.append(aText2);
	
	modalFooter.append(btnLogin, btnClose, hr, aCrearCuenta, aOlvidarPass);

	modalContent.append(modalHeader, modalBody, modalFooter);
	modalDialog.append(modalContent);
	modalLogin.append(modalDialog);

	$('#myNavbar').append(modalLogin);
}