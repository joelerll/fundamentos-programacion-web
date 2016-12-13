obj = {
	'ayudantes' : [
		{
			'matricula' : 'xxxxxxxxx',
			'nombre' : 'ayudante1',
			'correo' : ['correo1@espol.edu.ec', 'correo2@espol.edu.ec'],
			'profesor' : ['profesor1', 'profesor2'],
			'paralelo' : ['paralelo1', 'paralelo2'], 
			'tipo' : 'ta'	//puede ser grader o ta	
		},
		{
			'matricula' : 'xxxxxxxxx',
			'nombre' : 'ayudante2',
			'correo' : ['correo1@espol.edu.ec', 'correo2@espol.edu.ec'],
			'profesor' : ['profesor1', 'profesor2'],
			'paralelo' : ['paralelo1', 'paralelo2'], 
			'tipo' : 'ta'	//puede ser grader o ta	
		},
		{
			'matricula' : 'xxxxxxxxx',
			'nombre' : 'ayudante3',
			'correo' : ['correo1@espol.edu.ec', 'correo2@espol.edu.ec'],
			'profesor' : ['profesor1', 'profesor2'],
			'paralelo' : ['paralelo1', 'paralelo2'], 
			'tipo' : 'grader'	//puede ser grader o ta	
		},
		{
			'matricula' : 'xxxxxxxxx',
			'nombre' : 'ayudante4',
			'correo' : ['correo1@espol.edu.ec', 'correo2@espol.edu.ec'],
			'profesor' : ['profesor1', 'profesor2'],
			'paralelo' : ['paralelo1', 'paralelo2'], 
			'tipo' : 'ta'	//puede ser grader o ta	
		},
		{
			'matricula' : 'xxxxxxxxx',
			'nombre' : 'ayudante5',
			'correo' : ['correo1@espol.edu.ec', 'correo2@espol.edu.ec'],
			'profesor' : ['profesor1', 'profesor2'],
			'paralelo' : ['paralelo1', 'paralelo2'], 
			'tipo' : 'grader'	//puede ser grader o ta	
		}
	],
	'profesores' : [
		{
			'nombre' : 'profesor1',
			'aula' : '24A-101',
			'dias' : ['dia1', 'dia2'],
			'horarios' : ['horario1', 'horario2']
		}, 
		{
			'nombre' : 'profesor2',
			'aula' : '24A-102',
			'dias' : ['dia1', 'dia2'],
			'horarios' : ['horario1', 'horario2']
		},
		{
			'nombre' : 'profesor3',
			'aula' : '24A-103',
			'dias' : ['dia1', 'dia2'],
			'horarios' : ['horario1', 'horario2']
		},
	]
}




$(document).ready(function(){

	createDivs(obj)
})

function createDivs(objJSON){	
	var clasePanel;	//nombre completo de la clase del panel
	var panel, panelBody, imgPanel, pPanel;
	
	//PRIMERO CREAR EL DIV DE PROFESORES
	var arrayProf = objJSON.profesores;
	arrayProf.forEach(function(profesor){
		clasePanel = 'panel panel-default panel-profesor';
		panel = $('<div/>').addClass(clasePanel);
		panelBody = $('<div/>').addClass('panel-body');
		imgPanel = $('<img/>').addClass('img-responsive center-block').attr({src: 'http://placehold.it/350x150', alt: 'imagen profesor'});
		pPanel = $('<p/>').text(profesor.nombre);
		panelBody.append(imgPanel, pPanel);
		panel.append(panelBody);
		$('.profesores').append(panel);
	});
	//DIVS DE AYUDANTES
	var arrayAyudantes = objJSON.ayudantes;
	arrayAyudantes.forEach(function(ayudante){
		if(ayudante.tipo==='grader'){
			clasePanel = 'panel panel-default panel-ayudante-deberes';
			panel = $('<div/>').addClass(clasePanel);
			panelBody = $('<div/>').addClass('panel-body');
			imgPanel = $('<img/>').addClass('img-responsive center-block').attr({src: 'http://placehold.it/350x150', alt: 'imagen ayudante de deberes'});
			pPanel = $('<p/>').text(ayudante.nombre);
			panelBody.append(imgPanel, pPanel);
			panel.append(panelBody);
			$('.ayudante-deberes').append(panel);
		}else if(ayudante.tipo==='ta'){
			clasePanel = 'panel panel-default panel-ayudante-clases';
			panel = $('<div/>').addClass(clasePanel);
			panelBody = $('<div/>').addClass('panel-body');
			imgPanel = $('<img/>').addClass('img-responsive center-block').attr({src: 'http://placehold.it/350x150', alt: 'imagen ayudante de clases'});
			pPanel = $('<p/>').text(ayudante.nombre);
			panelBody.append(imgPanel, pPanel);
			panel.append(panelBody);
			$('.ayudante-clases').append(panel);
		}else{
			console.log('error en tipo de ayudante');
		}


		
	});

	
	
	
}