<!doctype html>
	<!--[if lt IE 7]><html lang="en" class="no-js ie6"><![endif]-->
	<!--[if IE 7]><html lang="en" class="no-js ie7"><![endif]-->
	<!--[if IE 8]><html lang="en" class="no-js ie8"><![endif]-->
	<!--[if gt IE 8]><!-->
<html lang="en" class="no-js">
	<!--<![endif]-->

	<head>
	    <base href="<?=base_url();?>" />
	    <title><?php echo $title;?></title>
	    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	    <link rel="shortcut icon" href="">
		<meta charset="UTF-8" />
		
		<link rel="stylesheet" href="assets/css/reset.css">
		<link href="assets/css/font-awesome.min.css" rel="stylesheet">
		
		<script src="assets/js/jquery.min.js"></script>
		
		<link rel="stylesheet" href="assets/css/style.css">
		<link rel="stylesheet" href="assets/css/bootstrap.min.css">
		
	</head>
	
	

	<body>
		<div class="nav-side-menu col-md-2">
		    <div class="brand">Singularidade</div>
		    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
		
		        <div class="menu-list">
		
		            <ul id="menu-content" class="menu-content collapse out">
		                <li>
		                  <a href="#">
		                  	<i class="fa fa-home"></i> Home
		                  </a>
		                </li>
		
		                <li  data-toggle="collapse" data-target="#products" class="collapsed active">
		                  <a href="#"><i class="fa fa-certificate"></i> Buraco negro <span class="arrow"></span></a>
		                </li>
		
		                <ul class="sub-menu collapse" id="products">
		                    <li class="active"><a href="#">Etapa 01</a></li>
		                    <li><a href="#">Etapa 02</a></li>
		                </ul>
		
		
		                <li data-toggle="collapse" data-target="#service" class="collapsed">
		                  <a href="#"><i class="fa fa-globe fa-lg"></i> Conceitos Físicos <span class="arrow"></span></a>
		                </li>
	
		                <ul class="sub-menu collapse" id="service">
		                  <li>Terms 1</li>
		                  <li>Terms 2</li>
		                  <li>Terms 3</li>
		                </ul>
		
		                 <li>
			                 <a href="creditos">
			                 	<i class="fa fa-users fa-lg"></i> Créditos
			                 </a>
						</li>
		            </ul>
		     </div>
		</div>


		<?php echo $content;?>
	</body>

    <script type="text/javascript" src="assets/js/requestanimationframe.polyfill.js"></script>
    <script type="text/javascript" src="assets/js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="assets/js/sphere-hacked.js"></script>
    <script type="text/javascript" src="assets/js/jquery.earth-3d.js"></script>

	<script src="assets/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="assets/js/bootbox.js"></script>
	<script src="assets/js/jcanvas.min.js"></script>
	<script src="assets/js/simulador.js"></script>

</html>