$(document).ready(function ()
{
	
	/* Estrela tela inicial */
	$('#estrela').earth3d( 
	{
	  texture: 'assets/images/estrelas/estrela.jpg', // Textura usada na estrela
	  dragElement: $('#locations') 
	});
	
	
	/* FASES DA ESTRELA */
	$('#btn_comecar').on('click', function() 
	{
		var massa_estrela = $('#massa_estrela').val();

		if(massa_estrela != '') 
		{
			$('#form_entrada_massa_estrela').fadeOut(); // Esconde entrada de valor da massa
			set_gigante_vermelha(massa_estrela);
		}
	});
});


function set_gigante_vermelha(massa_estrela) 
{
	// Começa a troca de estágios da estrela
	// Gigante vermelha
	
	setTimeout(function (){
		 $( "#estrela" ).effect( "size", {
			    to: { width: 500, height: 500 }
			  }, 3000 );
		$('#estrela').earth3d( 
		{
		  texture: 'assets/images/estrelas/gigante_vermelha.jpg', // Textura usada na estrela
		});
		console.log('Gigante vermelha');
   }, 5000);
	
	
	if(massa_estrela < 5) 
	{ // Anã branca
		setTimeout(function (){
			 $( "#estrela" ).effect( "size", {
				    to: { width: 350, height: 350 }
				  }, 3000 );
			$('#estrela').earth3d( 
			{
			  texture: 'assets/images/estrelas/ana_branca.jpg', // Textura usada na estrela
			});
			console.log('Anã branca');
	    }, 10000);
	} 
	else if(massa_estrela >= 5) 
	{// Supernova
		setTimeout(function (){
			 $( "#estrela" ).effect( "size", {
				    to: { width: 350, height: 350 }
				  }, 3000 );
			$('#estrela').earth3d( 
			{
			  texture: 'assets/images/estrelas/supernova.jpg', // Textura usada na estrela
			});
			console.log('Supernova');
	    }, 10000);
	}
	
}


function set_estrela_neutrons(massa_estrela) 
{
	console.log('Estrela de nêutrons');
	$('#estrela').earth3d('destroy');
	$('#estrela').replaceWith($('<canvas id="estrela" width="400" height="400"></canvas>'));

	// Estrela de nêutrons
	$('#estrela').earth3d( 
	{
	  texture: 'assets/images/estrelas/estrela_neutrons.jpg', // Textura usada na estrela
	});
}

function set_buraco_negro(massa_estrela) 
{
	console.log('Buraco negro');
	$('#estrela').earth3d('destroy');
	$('#estrela').replaceWith($('<canvas id="estrela" width="500" height="500"></canvas>'));

	// Buraco negro
	$('#estrela').earth3d( 
	{
	  texture: 'assets/images/estrelas/buraco_negro.jpg', // Textura usada na estrela
	});
}