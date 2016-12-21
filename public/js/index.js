$("#begin").click(function() {
    $('html, body').animate({
        scrollTop: $("#title-1").offset().top
    }, 1000);
});

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
			localStorage.setItem('temp', JSON.stringify(obj))
		} else {
		    // Sorry! No Web Storage support..
		}

	}else
	{
		alert("usuario o contraseña equivocada");
	}
});

