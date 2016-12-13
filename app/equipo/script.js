
/*
ayudanteClases = {
	matricula: 201304614,
	nombre: Edison
	correo: edanmora@espol.edu.ec,
	horarioS1: 14h30-16h30,
	aulaS1: 24A-103,
	horarioS2: 10h30-12h30,
	aulaS2: 24A-104,
	horarioC1: 14h30-16h30,
	aulaC1: 24A-103,
	horarioC2: 10h30-12h30,
	aulaC2: 24A-104,
	profAsignado: Marco Antonio Calderon
	paralelo: 1
}*/
var ayudantesDeberes = [
	{
		'matricula': '201304614',
		'nombre': 'Edison',
		'correo': 'edanmora@espol.edu.ec',
		'profAsignado': 'Marco Antonio Calderon',
		'paralelo': '1'
	},
	{
		'matricula': '2013123456',
		'nombre': 'Xavier',
		'correo': 'xidrovo@espol.edu.ec',
		'profAsignado': 'Marco Antonio Calderon',
		'paralelo': '2'
	},
	{
		'matricula': '201304614',
		'nombre': 'Jaminson',
		'correo': 'jamytafy@espol.edu.ec',
		'profAsignado': 'Marco Antonio Calderon',
		'paralelo': '3'
	}
];


var ayudantesClases = [
	{
		'matricula': '201304614',
		'nombre': 'Edison',
		'correo': 'edanmora@espol.edu.ec',
		'profAsignado': 'Marco Antonio Calderon',
		'paralelo': '1', 
		'horarioS1': '14h30-16h30',
		'aulaS1': '24A-103',
		'horarioS2': '10h30-12h30',
		'aulaS2': '24A-104',
		'horarioC1': '14h30-16h30',
		'aulaC1': '24A-103',
		'horarioC2': '10h30-12h30',
		'aulaC2': '24A-104',
	},
	{
		'matricula': '2013555555',
		'nombre': 'Julio',
		'correo': 'julyguilinder@espol.edu.ec',
		'profAsignado': 'Marco Antonio Calderon',
		'paralelo': '2', 
		'horarioS1': '14h30-16h30',
		'aulaS1': '24A-103',
		'horarioS2': '10h30-12h30',
		'aulaS2': '24A-104',
		'horarioC1': '14h30-16h30',
		'aulaC1': '24A-103',
		'horarioC2': '10h30-12h30',
		'aulaC2': '24A-104',
	},
	{
		'matricula': '2013444444',
		'nombre': 'Joel',
		'correo': 'joel@espol.edu.ec',
		'profAsignado': 'Marco Antonio Calderon',
		'paralelo': '3', 
		'horarioS1': '14h30-16h30',
		'aulaS1': '24A-103',
		'horarioS2': '10h30-12h30',
		'aulaS2': '24A-104',
		'horarioC1': '14h30-16h30',
		'aulaC1': '24A-103',
		'horarioC2': '10h30-12h30',
		'aulaC2': '24A-104',
	},
	{
		'matricula': '2013333333',
		'nombre': 'Lenin',
		'correo': 'lenin@espol.edu.ec',
		'profAsignado': 'Marco Antonio Calderon',
		'paralelo': '4', 
		'horarioS1': '14h30-16h30',
		'aulaS1': '24A-103',
		'horarioS2': '10h30-12h30',
		'aulaS2': '24A-104',
		'horarioC1': '14h30-16h30',
		'aulaC1': '24A-103',
		'horarioC2': '10h30-12h30',
		'aulaC2': '24A-104',
	}

];
var array = ['hola', 'mundo']

$(document).ready(function(){
	//console.log('hola');
	//createDivs('.profesores', array, 'profesor')
	createDivs('.ayudante-clases', ayudantesClases, 'ayudante-clases')
	createDivs('.ayudante-deberes', ayudantesDeberes, 'ayudante-deberes')
})


function createDivs(contenedor, array, nombreClase){
	//contenedor -> el div en el cual se van a crear los divs
	//array -> el array JSON
	//nombreClase -> nombre de la clase para el nuevo panel a crear dentro del contenedor
	
	//array va a tener los objetos de profesores, ayudantes de deberes o ayudantes de clases
	var clasePanel;	//nombre completo de la clase del panel
	var panel, panelBody, imgPanel, pPanel;
	array.forEach(function(obj){
		//console.log(obj.nombre)
		//console.log(obj.matricula)
		clasePanel = 'panel panel-default panel-' + nombreClase
		panel = $('<div/>').addClass(clasePanel)
		panelBody = $('<div/>').addClass('panel-body-')
		imgPanel = $('<img/>').addClass('img-responsive center-block').attr({src: '#', alt: nombreClase})
		pPanel = $('<p/>').text(obj.nombre)
		panelBody.append(imgPanel, pPanel)
		panel.append(panelBody)
		$(contenedor).append(panel)
	});



	
	
}