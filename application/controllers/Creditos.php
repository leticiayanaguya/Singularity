<?php
defined( 'BASEPATH' ) OR exit( 'No direct script access allowed' );

class Creditos extends CI_Controller 
{
	function __construct()
	{
		parent::__construct();
	}


	/**
	 *
	 * function index()
	 *
	 * Função principal do controller da página Créditos
	 *
	 * @author LetíciaYanaguya
	 * @param  void
	 * @return void
	*/
	public function index()
	{
		// Seta título da página
		$data['title'] = 'Simulador BlackHole .:. Créditos';
		
		// Carrega layout base e conteúdo da page Créditos
		$data['content'] = $this->load->view ('creditos/index', '', true);
		$this->load->vars ($data);
		$this->load->view ('layouts/layout_base');
	}


}