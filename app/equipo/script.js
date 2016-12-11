array = ['hola', 'mundo']


$(document).ready(function(){
	console.log('hola');
	createDivs('.profesores', array, 'profesor')
	createDivs('.ayudante-clases', array, 'ayudante-clases')
	createDivs('.ayudante-deberes', array, 'ayudante-deberes')
})


function createDivs(contenedor, array, nombreClase){
	
	
	//array va a tener los objetos de profesores, ayudantes de deberes o ayudantes de clases
	var obj;
	var nombre, img;
	for(obj in array){
		//nombre = obj.nombre;	//Esto va a cambiar dependiendo de como sea el objeto que reciba
		//img = obj.img;
		var clase = 'panel panel-default panel-' + nombreClase
		var panel = $('<div/>').addClass(clase)
		var panelBody = $('<div/>').addClass('panel-body')
		var imgProf = $('<img/>').addClass('img-responsive center-block').attr({src: '#', alt: 'profesor'})
		var pProf = $('<p/>').text('Nombre')
		panelBody.append(imgProf, pProf)
		panel.append(panelBody)
		$(contenedor).append(panel);
	}
	
}