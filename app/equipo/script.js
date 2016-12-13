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
		crearPanel('.profesores', 'profesor', profesor);
	});
	//DIVS DE AYUDANTES
	var arrayAyudantes = objJSON.ayudantes;
	arrayAyudantes.forEach(function(ayudante){
		if(ayudante.tipo==='grader'){
			//DIV AYUDANTE DEBERES
			/*clasePanel = 'panel panel-default panel-ayudante-deberes';
			panel = $('<div/>').addClass(clasePanel);
			panelBody = $('<div/>').addClass('panel-body');
			imgPanel = $('<img/>').addClass('img-responsive center-block').attr({src: 'http://placehold.it/350x150', alt: 'imagen ayudante de deberes'});
			pPanel = $('<p/>').text(ayudante.nombre);
			panelBody.append(imgPanel, pPanel);
			panel.append(panelBody);
			$('.ayudante-deberes').append(panel);*/
			crearPanel('.ayudante-deberes', 'ayudante-deberes', ayudante);
		}else if(ayudante.tipo==='ta'){		
		//DIV AYUDANTE CLASES
			/*clasePanel = 'panel panel-default panel-ayudante-clases';
			panel = $('<div/>').addClass(clasePanel);
			panelBody = $('<div/>').addClass('panel-body');
			imgPanel = $('<img/>').addClass('img-responsive center-block').attr({src: 'http://placehold.it/350x150', alt: 'imagen ayudante de clases'});
			pPanel = $('<p/>').text(ayudante.nombre);
			panelBody.append(imgPanel, pPanel);
			panel.append(panelBody);
			$('.ayudante-clases').append(panel);*/
			crearPanel('.ayudante-clases', 'ayudante-clases', ayudante);
		}else{
			console.log('error en tipo de ayudante');
		}
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
	$(contenedor).append(panel);
}