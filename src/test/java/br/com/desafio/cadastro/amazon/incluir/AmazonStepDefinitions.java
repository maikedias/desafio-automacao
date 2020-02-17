package br.com.desafio.cadastro.amazon.incluir;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class AmazonStepDefinitions  {
    private ManterAmazonPageObjects manterAmazonPageObjects;
  
    public AmazonStepDefinitions() {
    	manterAmazonPageObjects= new ManterAmazonPageObjects();
    	 }
    

    @Dado("^que possuo um usuário cadastrado no site da amazon\\.$")
    public void que_possuo_um_usuário_cadastrado_no_site_da_amazon() {
    	//email cadastrado testeautomatizadodesafio@gmail.com
    }

    @Dado("^que estou na tela de login do site da amazon\\.$")
    public void que_estou_na_tela_de_login_do_site_da_amazon() {
    	manterAmazonPageObjects.acessarPaginaAmazon();

    }

    @Quando("^informar email cadastrado\\.$")
    public void informar_email_cadastrado() {
    	manterAmazonPageObjects.preencheLoginEmail("testeautomatizadodesafio@gmail.com");
    }	

    @Quando("^clicar em continuar\\.$")
    public void clicar_em_continuar() {
    	manterAmazonPageObjects.clicaBtnContinue();
    }

    @Quando("^informar senha do usuário cadastrado\\.$")
    public void informar_senha_do_usuário_cadastrado() {
    	manterAmazonPageObjects.preencheSenha("testedesafio50");
    }

    @Quando("^clicar em fazer login\\.$")
    public void clicar_em_fazer_login() {
    	manterAmazonPageObjects.clicaBtnLogar();
    }

    @Quando("^ser logado\\.$")
    public void ser_logado() {
    	  manterAmazonPageObjects.verificarLogou("Olá, teste" );
    }

    @Quando("^na tela de minha conta\\.$")
    public void na_tela_de_minha_conta() {
    	manterAmazonPageObjects.clicaBtnConta();
    }

    @Quando("^clicar em endereços\\.$")
    public void clicar_em_endereços() {
    	manterAmazonPageObjects.clicaBtnEndereco();
    }

    @Quando("^clicar em adicionar endereço\\.$")
    public void clicar_em_adicionar_endereço() {
    	manterAmazonPageObjects.clicaBtnAdicionarEndereco();
    }
    
    @Quando("^informar nome \"([^\"]*)\"\\.$")
    public void informar_nome(String dado) {
    	manterAmazonPageObjects.preencheNomeCompleto(dado);
    }

    @Quando("^informar cep \"([^\"]*)\"\\.$")
    public void informar_cep(String dado) {
        manterAmazonPageObjects.preencheCep(dado);
    }

    @Quando("^informar número \"([^\"]*)\"\\.$")
    public void informar_número(String dado){
    	manterAmazonPageObjects.preencheNumero(dado);
    }

    @Quando("^informar telefone \"([^\"]*)\"\\.$")
    public void informar_telefone(String dado) {
    	manterAmazonPageObjects.preencheTelefone(dado);
    }

    @Quando("^clicar em validar CEP\\.$")
    public void clicar_em_validar_CEP() {
    	manterAmazonPageObjects.clicaBtnValidarCep();
    }

    @Quando("^clicar salvar endereço\\.$")
    public void clicar_salvar_endereço() {
    	manterAmazonPageObjects.clicaBtnSalvarEndereco();
    }
    
    @Então("^deve ser salvo endereço\\.$")
    public void deve_ser_salvo_endereço() {
    	manterAmazonPageObjects.verificarEndereco("Endereço salvo");
    }

    @Quando("^informar senha incorreta do usuário cadastrado\\.$")
    public void informar_senha_incorreta_do_usuário_cadastrado() {
    	manterAmazonPageObjects.preencheSenha("testeSenhaIncorreta");
    }

    @Então("^deve exibir mensagem que senha está incorreta\\.$")
    public void deve_exibir_mensagem_que_senha_está_incorreta() {
    	manterAmazonPageObjects.verificarSenhaIncorreta("Sua senha está incorreta");
    }

    @Então("^deve ser logado\\.$")
    public void deve_ser_logado() {
  	  manterAmazonPageObjects.verificarLogou("Olá, teste" );
      System.out.println( "Logado com sucesso!" );
    }

}