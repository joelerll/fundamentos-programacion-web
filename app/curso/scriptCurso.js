$(document).ready(function(){
	crearCarousel();
	/*
	$('#writeBtn').click(function(){
		/*
		var obj = {
		    name: 'Dhayalan',
		    score: 100
		};

		localStorage.setItem('gameStorage', JSON.stringify(obj));
		console.log(JSON.parse(localStorage.getItem('gameStorage')))
	//});*/
	/*
	});
	var obj = JSON.parse(localStorage.getItem('temp'))
		var flag = obj.flag;
		editarNavbar(flag);
	console.log(JSON.parse(localStorage.getItem('temp')));*/
});

function crearCarousel(){
	var carousel = $('<div/>').attr({'class' : 'carousel slide', 'id' : 'myCarousel', 'data-ride' : 'carousel'})



	var indicators = $('<ol/>').addClass('carousel-indicators');
	var li0 = $('<li/>').attr({'data-target' : '#myCarousel', 'data-slide-to' : '0', 'class' : 'active'});
	var li1 = $('<li/>').attr({'data-target' : '#myCarousel', 'data-slide-to' : '1'});
	var li2 = $('<li/>').attr({'data-target' : '#myCarousel', 'data-slide-to' : '2'});
	var li3 = $('<li/>').attr({'data-target' : '#myCarousel', 'data-slide-to' : '3'});
	var li4 = $('<li/>').attr({'data-target' : '#myCarousel', 'data-slide-to' : '4'});
	indicators.append(li0, li1, li2, li3, li4);

	var wrapper = $('<div/>').attr({'class' : 'carousel-inner', 'role' : 'listbox'});
	anadirSlides(wrapper, 'active', '../../public/data_fundamentos1/libros/tutorialpython3.jpg', '', 'El Tutorial de Python', 'Guido van Rossum', '../../public/data_fundamentos1/libros/1_tutorialpython3-textoguia.pdf');
	anadirSlides(wrapper, null, '../../public/data_fundamentos1/libros/thinkcspy3.jpg', '', 'How to Think Like a Computer Scientist: Learning with Python 3 Documentation', 'Peter Wentworth', '../../public/data_fundamentos1/libros/2_thinkcspy3.pdf');
	anadirSlides(wrapper, null, '../../public/data_fundamentos1/libros/python_data-analysis.jpg', '', 'Introduction to Python for Econometrics, Statistics and Data Analysys', 'Kevin Sheppard', '../../public/data_fundamentos1/libros/3_python_data-analysis.pdf');
	anadirSlides(wrapper, null, '../../public/data_fundamentos1/libros/numpy_tutorial.jpg', '', 'An Introduction to Numpy and Scipy', '', '../../public/data_fundamentos1/libros/5_numpy_tutorial.pdf');
	anadirSlides(wrapper, null, '../../public/data_fundamentos1/libros/python_programacion_v2_5.jpg', '', 'Python Programacion', 'Luis Rodriguez Ojeda', '../../public/data_fundamentos1/libros/python_programacion_v2_5.pdf');

	/*CONTROLS*/
	var left = $('<a/>').attr({'class' : 'left carousel-control',
								'href' : '#myCarousel',
								'role' : 'button',
								'data-slide' : 'prev'});
	var leftSpan = $('<span/>').attr({'class' : 'glyphicon glyphicon-chevron-left',
										'aria-hidden' : 'true'});
	var prevSpan = $('<span/>').addClass('sr-only');
	prevSpan.text('Previous');
	left.append(leftSpan, prevSpan);

	var right = $('<a/>').attr({'class' : 'right carousel-control',
								'href' : '#myCarousel',
								'role' : 'button',
								'data-slide' : 'next'});
	var rightSpan = $('<span/>').attr({'class' : 'glyphicon glyphicon-chevron-right',
										'aria-hidden' : 'true'});
	var nextSpan = $('<span/>').addClass('sr-only');
	nextSpan.text('Next');
	right.append(rightSpan, nextSpan);

	carousel.append(indicators, wrapper, left, right);
	$('.container').prepend(carousel);
}

function anadirSlides(container, flag, imgSrc, imgAlt, nombre, autor, ref){
	var item = $('<div/>').addClass('item');
	if(flag==='active'){
		console.log('hola');
		item = $('<div/>').addClass('item active');
	}
	var img = $('<img/>').attr({'src' : imgSrc, 'alt' : imgAlt, 'class' : 'img-responsive center-block libro'});
	var caption = $('<div/>').addClass('carousel-caption');
	caption.append($('<h3/>').text(nombre), $('<p/>').text(autor));
	var link = $('<a/>').attr({'href' : ref, 'target' : '_blank'});
	link.text('Descargar');
	caption.append(link);
	item.append(img, caption);
	container.append(item);
}