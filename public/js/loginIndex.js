$(document).ready(function(){
	var obj = JSON.parse(localStorage.getItem('temp'))
	var flag = obj.flag;
	editarNavbar(flag);
	console.log(JSON.parse(localStorage.getItem('temp')));
});

function reestablecerNavbar(){
	var inicio = $('<li/>').addClass('espol');
	var inicioLink = $('<a/>').attr({
		'href' : 'index.html'
	});
	inicioLink.text('Inicio');
	incicio.append(inicioLink);

	var curso = $('<li/>').addClass('espol');
	var cursoLink = $('<a/>').attr({
		'href' : 'app/curso/curso.html'
	});
	cursoLink.text('El Curso');
	curso.append(cursoLink)

	var semana = $('<li/>').addClass('espol');
	var semanaLink = $('<a/>').attr({
		'href' : 'app/semanal/semanal.html'
	});
	semanaLink.text('Semana a Semana');
	semana.append(semanaLink);

	var equipo = $('<li/>').addClass('espol');
	var equipoLink = $('<a/>').attr({
		'href' : 'app/equipo/equipo.html'
	});
	equipoLink.text('Equipo');
	equipo.append(equipoLink);

	var ayudantias = $('<li/>').addClass('espol');
	var ayudantiasLink = $('<a/>').attr({
		'href' : 'app/ayudantias/ayudantias.html'
	});
	ayudantiasLink.text('Ayudantias');
	ayudantias.append(ayudantiasLink)
	$('#pestanas').empty();
	$('#pestanas').append(inicio, curso, semana, equipo, ayudantias);
}


function editarNavbar(flag){
	if(flag==='estudiante'){
		//CAMBIAR LAS PESTAÑAS
		var sandbox = $('<li/>').addClass('espol');
		var sandboxLink = $('<a/>').attr({
			'href' : 'app/sandbox/index.html'
		});
		sandboxLink.text('Sandbox');
		sandbox.append(sandboxLink);
		var perfil = $('<li/>').addClass('espol');
		var perfilLink = $('<a/>').attr({
			'href' : 'app/perfil/perfil.html'
		});
		perfilLink.text('Perfil');
		perfil.append(perfilLink)
		$('#pestanas').append(sandbox, perfil);
		//CAMBIAR EL ICONO DE LOGIN
		$('#login').attr({'src' : "public/media/avatar/xidrovo.jpg"});
		//CAMBIAR EL MODULO DEL LOGIN
		editarModalLogin('public/media/avatar/xidrovo.jpg', 'Xavier Idrovo', 'xidrovo');
	}else if(flag==='profesor'){
		var sandbox = $('<li/>').addClass('espol');
		var sandboxLink = $('<a/>').attr({
			'href' : 'app/sandbox/index.html'
		});
		sandboxLink.text('Sandbox');
		sandbox.append(sandboxLink);
		var proyectos = $('<li/>').addClass('espol');
		var proyectosLink = $('<a/>').attr({
			'href' : 'app/proyectos/index.html'
		});
		proyectosLink.text('Proyectos');
		proyectos.append(proyectosLink);
		var perfil = $('<li/>').addClass('espol');
		var perfilLink = $('<a/>').attr({
			'href' : 'app/perfil/perfil.html'
		});
		perfilLink.text('Perfil');
		perfil.append(perfilLink)
		$('#pestanas').append(sandbox, proyectos,perfil);
		//CAMBIAR EL ICONO DE LOGIN
		$('#login').attr({'src' : "public/media/avatar/mcalderon.jpg"});
		//CAMBIAR EL MODULO DEL LOGIN
		editarModalLogin('public/media/avatar/mcalderon.jpg', 'Marco Calderon', 'mcalderon');
	}else{

	}
}

function editarModalLogin(headerImgSrc, name, user){
	//CAMBIAR EL HEADER
	$('.modal-header').empty();	//vacio el header del modal
	var btn = $('<button/>').attr({'type' : 'button', 'class' : 'close' , 'data-dismiss' : 'modal'})
	var headerImg = $('<img/>').attr({'src' : headerImgSrc, 'class' : 'profile-img img-responsive center-block'})
	var verPerfil = $('<a/>').attr({'href' : 'app/perfil/perfil.html'})
	var p = $('<p/>').addClass('text-center').text('Ver Perfil');
	verPerfil.append(p);
	$('.modal-header').append(btn, headerImg, verPerfil);
	//CAMBIAR EL BODY
	$('.modal-body').empty()	//Vacio el body del modal
	var form = $('<form/>');
	var formGroupNombre = $('<div/>').addClass('form-group text-center');
	var nombre = $('<h4/>').text(name);
	formGroupNombre.append(nombre);
	var formGroupUsuario = $('<div/>').addClass('form-group text-center');
	var usuario = $('<h4/>').text(user);
	formGroupUsuario.append(usuario);
	form.append(formGroupNombre, formGroupUsuario);
	$('.modal-body').append(form);
	//CAMBIAR EL FOOTER
	$('.modal-footer').empty();	//vacio el footer
	var btnSignOut = $('<button/>').attr({'type' : 'button', 'class' : 'btn btn-default inline pull-left' ,
									'id' : 'sign-out'});
	btnSignOut.text('Sign out');
	btnSignOut.click(function(){
		window.location.href = "index.html";
		var obj = {
				flag : 'generals'
			};
		localStorage.setItem('temp', JSON.stringify(obj))
		console.log('Ingreso de estudiante exitoso');
		console.log(JSON.parse(localStorage.getItem('temp')));
		reestablecerNavbar();
	})
	var btnClose = $('<button/>').attr({'type' : 'button', 'class' : 'btn btn-default inline pull-right' , 
									'data-dismiss' : 'modal'});
	btnClose.text('Close');
	$('.modal-footer').append(btnSignOut, btnClose, $('<hr/>').addClass('clearer'));
}
//EVENTOS A BOTON DE LOGIN
$("#entrar").click(function(){
	if($("#usr").val() == "user" && $("#pwd").val() == "user")
	{
		//window.location.href = "indexStudent.html";
		
		if (typeof(Storage) !== "undefined") {
		    // Code for localStorage/sessionStorage.
		    var obj = {
				flag : 'estudiante'
			};
			localStorage.setItem('temp', JSON.stringify(obj))
			console.log('Ingreso de estudiante exitoso');
			console.log(JSON.parse(localStorage.getItem('temp')));
			var obj = JSON.parse(localStorage.getItem('temp'))
			var flag = obj.flag;
			editarNavbar(flag);
		} else {
		    // Sorry! No Web Storage support..
		}

	}else if($("#usr").val() == "admin" && $("#pwd").val() == "admin")
	{
		//window.location.href = "indexTeacher.html";

		if (typeof(Storage) !== "undefined") {
		    // Code for localStorage/sessionStorage.
		    var obj = {
				flag : 'profesor'
			};
			localStorage.setItem('temp', JSON.stringify(obj));
			var obj = JSON.parse(localStorage.getItem('temp'))
			var flag = obj.flag;
			editarNavbar(flag);
		} else {
		    // Sorry! No Web Storage support..
		}

	}else
	{
		alert("usuario o contraseña equivocada");
	}
});
