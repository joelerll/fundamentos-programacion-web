$(document).ready(function(){
	var obj = JSON.parse(localStorage.getItem('temp'))
	var flag = obj.flag;
	editarNavbar(flag);
	console.log(JSON.parse(localStorage.getItem('temp')));
});

function editarNavbar(flag){
	if(flag==='estudiante'){
		var sandbox = $('<li/>').addClass('espol');
		var sandboxLink = $('<a/>').attr({
			'href' : '../../app/sandbox/index.html'
		});
		sandboxLink.text('Sandbox');
		sandbox.append(sandboxLink);
		var perfil = $('<li/>').addClass('espol');
		var perfilLink = $('<a/>').attr({
			'href' : '../../app/perfil/perfil.html'
		});
		perfilLink.text('Perfil');
		perfil.append(perfilLink)
		$('#pestanas').append(sandbox, perfil);
	}else if(flag==='profesor'){
		var sandbox = $('<li/>').addClass('espol');
		var sandboxLink = $('<a/>').attr({
			'href' : '../../app/sandbox/index.html'
		});
		sandboxLink.text('Sandbox');
		sandbox.append(sandboxLink);
		var proyectos = $('<li/>').addClass('espol');
		var proyectosLink = $('<a/>').attr({
			'href' : '../../app/proyectos/index.html'
		});
		proyectosLink.text('Proyectos');
		proyectos.append(proyectosLink);
		var perfil = $('<li/>').addClass('espol');
		var perfilLink = $('<a/>').attr({
			'href' : '../../app/perfil/perfil.html'
		});
		perfilLink.text('Perfil');
		perfil.append(perfilLink)
		$('#pestanas').append(sandbox, proyectos,perfil);
	}else{

	}
}