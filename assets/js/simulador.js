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
	
	
	
	
//	// Desenhando primeira estrela (HOME)
//	var canvas = document.getElementById('animacao-estrela-home'); // Contexto em que será desenhado
//
//	// Redimensiona o canvas para adequar ao tamanho da janela
//	window.addEventListener('resize', resizeCanvas, false);
//
//	function resizeCanvas() 
//	{
//	    canvas.width = window.innerWidth; // Pega largura
//	    canvas.height = window.innerHeight; // Pega altura
//	
//	    /**
//	     * Os desenhos ficam dentro de uma função, porque se não, será redesenhado todas as vezes em que 
//	     * a janela for redimensionada
//	    **/
//	    drawEstrela(); 
//	}
//
// 	resizeCanvas(); // Calcula tamanho da tela
//
//	function drawEstrela() 
//	{
//		if (canvas.getContext) // Verifica se pegou o contexto a ser desenhado
//		{
//			var context = canvas.getContext('2d'); // Configura como sendo um elemento 2D
//			var centerX = canvas.width / 2; // Calcula o centro da tag canvas
//			var centerY = canvas.height / 2; // Calcula o centro da altura da tag canvas 
//			var radius = 70; // Tamanho da estrela. Definido pelo radio
//
//			context.fillStyle = 'rgba(0,0,0,0.5)'; // Definição da cor do elemento a ser desenhado
//
//            context.beginPath(); // Começo da renderização
//			context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false); // Define propriedades do desenho (posição X, posição Y, radiano, ??, não faço ideia)
//
//			var grd = context.createLinearGradient(0, 0, centerX, centerY);
//
//			grd.addColorStop(0.14, '#FF7700');
//			grd.addColorStop(0.8, '#FFFFFF');
//			grd.addColorStop(1.0, '#FF7700');
//
//			context.fillStyle = grd;
//			context.fill();
//			
//	    }
//	}
//	draw();
//	
//	function draw() {
//	  var ctx = document.getElementById('animacao-estrela-home').getContext('2d');
//	
//	  // Create gradients
//	  var radgrad = ctx.createRadialGradient(45,45,10,52,50,30);
//	  radgrad.addColorStop(0, '#A7D30C');
//	  radgrad.addColorStop(0.9, '#019F62');
//	  radgrad.addColorStop(1, 'rgba(1,159,98,0)');
//	  
//	  var radgrad2 = ctx.createRadialGradient(105,105,20,112,120,50);
//	  radgrad2.addColorStop(0, '#FF5F98');
//	  radgrad2.addColorStop(0.75, '#FF0188');
//	  radgrad2.addColorStop(1, 'rgba(255,1,136,0)');
//	
//	  var radgrad3 = ctx.createRadialGradient(95,15,15,102,20,40);
//	  radgrad3.addColorStop(0, '#00C9FF');
//	  radgrad3.addColorStop(0.8, '#00B5E2');
//	  radgrad3.addColorStop(1, 'rgba(0,201,255,0)');
//	
//	  var radgrad4 = ctx.createRadialGradient(0,150,50,0,140,90);
//	  radgrad4.addColorStop(0, '#F4F201');
//	  radgrad4.addColorStop(0.8, '#E4C700');
//	  radgrad4.addColorStop(1, 'rgba(228,199,0,0)');
//	  
//	  // draw shapes
//	  ctx.fillStyle = radgrad4;
//	  ctx.fillRect(0,0,150,150);
//	  ctx.fillStyle = radgrad3;
//	  ctx.fillRect(0,0,150,150);
//	  ctx.fillStyle = radgrad2;
//	  ctx.fillRect(0,0,150,150);
//	  ctx.fillStyle = radgrad;
//	  ctx.fillRect(0,0,150,150);
//	}
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
	
	if(massa_estrela < 5 ) 
	{ // Anã branca
		setInterval(set_ana_branca(massa_estrela), 50);
	} 
	else if(massa_estrela >= 5) 
	{// Supernova
		setInterval(set_super_nova(massa_estrela), 50);
	}
}

function set_ana_branca(massa_estrela) 
{
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
	$('#estrela').replaceWith($('<canvas id="estrela" width="400" height="400"></canvas>'));

	// Supernova
	$('#estrela').earth3d( 
	{
	  texture: 'assets/images/estrelas/supernova.jpg', // Textura usada na estrela
	});
	
	var massa_corpo = 0;
	if(massa_corpo < 2) 
	{ // Estrela de nêutrons
		setInterval(set_estrela_neutrons(massa_estrela), 5000);
	} 
	else if(massa_corpo > 2) 
	{// Buraco negro
		setInterval(set_buraco_negro(massa_estrela), 5000);
	}
}

function set_estrela_neutrons(massa_estrela) 
{
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
	$('#estrela').earth3d('destroy');
	$('#estrela').replaceWith($('<canvas id="estrela" width="500" height="500"></canvas>'));

	// Buraco negro
	$('#estrela').earth3d( 
	{
	  texture: 'assets/images/estrelas/buraco_negro.jpg', // Textura usada na estrela
	});
}