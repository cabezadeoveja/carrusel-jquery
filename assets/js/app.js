$(document).ready(function() {
	//para que se vayan agregando circulos a medida que vaya agregando imagenes
	var imgItems = $('.carrusel li').length;
	var imgbefore = 1;

	for (var i = 1; i <= imgItems; i++) { //valor del numero de img que tenemos
	$('.changepages').append('<li><span class="fa fa-circle"></span></li>');
	//append para agregar elementos
	} //cierre llave for

	//------------------------

	$('.carrusel li').hide(); //ocultando todos los slider
	$('.carrusel li:first').show(); //llamar al primer slider
	$('.changepages li:first').css({'color': '#140718'}); //para que circulos cambien de color

	//ejecutando todas las funciones

	$('.changepages li').click(changepages);
	$('.row-rigth span').click(afterslider);
	$('.row-left span').click(beforelider);

	//funciones

	function changepages(){
		var pageposition = $(this).index()+1;
		$('.carrusel li').hide();
		$('.carrusel li:nth-child('+ pageposition +')').fadeIn(); //numero de la posicion al que le hemos dado click.

		$('.changepages li').css({'color': '#858585'});
		$(this).css({'color': '#140718'});
	}

	function afterslider(){
		if (imgbefore >= imgItems){
			imgbefore = 1;
		}
		else{
			imgbefore++;
		}

		$('.changepages li').css({'color': '#858585'});
		$('.changepages li:nth-child('+ imgbefore +')').css({'color': '#140718'})

		$('.carrusel li').hide();
		$('.carrusel li:nth-child('+ imgbefore +')').fadeIn();
	}

		function beforelider(){
		if (imgbefore <= 1){
			imgbefore = imgItems;
		}
		else{
			imgbefore--;
		}

		$('.changepages li').css({'color': '#858585'});
		$('.changepages li:nth-child('+ imgbefore +')').css({'color': '#140718'})

		$('.carrusel li').hide();
		$('.carrusel li:nth-child('+ imgbefore +')').fadeIn();
	}
});

