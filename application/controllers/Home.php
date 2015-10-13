<?php
defined( 'BASEPATH' ) OR exit( 'No direct script access allowed' );

class Home extends CI_Controller 
{
	function __construct()
	{
		parent::__construct();
	}


	/**
	 *
	 * function index()
	 *
	 * Função principal do controller da Home
	 *
	 * @author LetíciaYanaguya
	 * @param  void
	 * @return void
	*/
	public function index()
	{
		// Seta título da página
		$data['title'] = 'Singularidade';
		
		// Carrega layout base e conteúdo da homepage
		$data['content'] = $this->load->view ('home/index', '', true);
		$this->load->vars ($data);
		$this->load->view ('layouts/layout_base');
	}


}