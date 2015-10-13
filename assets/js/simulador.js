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

			setInterval(set_gigante_vermelha(massa_estrela), 5000);
		}
	});
});



function set_gigante_vermelha(massa_estrela) 
{
	console.log('Gigante vermelha');
	$('#estrela').earth3d('destroy');
	$('#estrela').replaceWith($('<canvas id="estrela" width="500" height="500"></canvas>'));

	// Começa a troca de estágios da estrela
	// Gigante vermelha
	$('#estrela').earth3d( 
	{
	  texture: 'assets/images/estrelas/gigante_vermelha.jpg', // Textura usada na estrela
	});
	
	if(massa_estrela < 5) 
	{ // Anã branca
		setInterval(set_ana_branca(massa_estrela), 5000);
	} 
	else if(massa_estrela >= 5) 
	{// Supernova
		setInterval(set_super_nova(massa_estrela), 5000);
	}
}

function set_ana_branca(massa_estrela) 
{
	console.log('Anã branca');
	$('#estrela').earth3d('destroy');
	$('#estrela').replaceWith($('<canvas id="estrela" width="500" height="500"></canvas>'));

	// Anã branca
	$('#estrela').earth3d( 
	{
	  texture: 'assets/images/estrelas/ana_branca.jpg', // Textura usada na estrela
	});
}

function set_super_nova(massa_estrela) 
{
	console.log('Supernova');
	$('#estrela').replaceWith($('<canvas id="estrela" width="400" height="400"></canvas>'));

	// Supernova
	$('#estrela').earth3d( 
	{
	  texture: 'assets/images/estrelas/supernova.jpg', // Textura usada na estrela
	});

	if(massa_estrela < 2) 
	{ // Estrela de nêutrons
		setInterval(set_estrela_neutrons(massa_estrela), 5000);
	} 
	else if(massa_estrela > 2) 
	{// Buraco negro
		setInterval(set_buraco_negro(massa_estrela), 5000);
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