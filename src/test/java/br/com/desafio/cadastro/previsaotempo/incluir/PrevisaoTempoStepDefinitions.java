package br.com.desafio.cadastro.previsaotempo.incluir;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;



public class PrevisaoTempoStepDefinitions {

    private ManterPrevisaoTempoPageObjects manterPrevisaoTempoPageObjects;
    public String valorProbabilidadeGoogle;
    public String valorUmidadeGoogle;
    public String valorProbabilidadeClimaTempo;
    public String valorUmidadeMinima;
    public String valorUmidadeMaxima;

    public PrevisaoTempoStepDefinitions() {
    	manterPrevisaoTempoPageObjects = new ManterPrevisaoTempoPageObjects();
    }

    @Dado("^que estou no site da google\\.$")
    public void que_estou_no_site_da_google() {
    	manterPrevisaoTempoPageObjects.acessarPaginaGoogle();
    }

    @Quando("^que estou no site do climatempo\\.$")
    public void que_estou_no_site_do_climatempo() {
    	manterPrevisaoTempoPageObjects.acessarPaginaClimaTempo();
    }
    
    @Quando("^pesquiso a previsão do tempo de pato branco\\.$")
    public void pesquiso_a_previsão_do_tempo_de_pato_branco(){
           	manterPrevisaoTempoPageObjects.preencheBarraPesquisaGoogle("Previsão do tempo para pato branco");
        	manterPrevisaoTempoPageObjects.clicaBtnPesquisaGoogle();
     }

    @Quando("^armazeno o valor da probabilidade para o site da google\\.$")
    public void armazeno_o_valor_da_probabilidade_para_o_site_da_google(){
    	valorProbabilidadeGoogle = manterPrevisaoTempoPageObjects.getValorProbabilidadeGoogle();
    }


    @Quando("^pesquiso a previsão do tempo no climatempo para \"([^\"]*)\"\\.$")
    public void pesquiso_a_previsão_do_tempo_no_climatempo_para(String dado){
    	manterPrevisaoTempoPageObjects.clicaBtnPesquisaCidade();
    	manterPrevisaoTempoPageObjects.preencheBarraPesquisaClimaTempo(dado);
    	
    }

    @Quando("^armazeno o valor da probabilidade para o site do climatempo\\.$")
    public void armazeno_o_valor_da_probabilidade_para_o_site_do_climatempo(){
    	valorProbabilidadeClimaTempo = manterPrevisaoTempoPageObjects.getValorProbabilidadeClimaTempo();
    }

    @Então("^comparar os valores de probabilidade de chuva\\.$")
    public void comparar_os_valores_de_probabilidade_de_chuva(){
    	System.out.print("No site da google a probalidade de chuva é:" + valorProbabilidadeGoogle );
    	System.out.print("No site da climatempo a probalidade de chuva é:" + valorProbabilidadeClimaTempo );
    }

    @Quando("^armazeno o valor da umidade para o site da google\\.$")
    public void armazeno_o_valor_da_umidade_para_o_site_da_google(){
    	valorUmidadeGoogle = manterPrevisaoTempoPageObjects.getValorUmidadeGoogle();
    }

    @Quando("^armazeno o valor da umidade para o site do climatempo\\.$")
    public void armazeno_o_valor_da_umidade_para_o_site_do_climatempo(){
    	valorUmidadeMaxima = manterPrevisaoTempoPageObjects.getValorUmidadeMaxima();
    	valorUmidadeMinima = manterPrevisaoTempoPageObjects.getValorUmidadeMinima();
    }

    @Então("^comparar os valores de umidade de do tempo\\.$")
    public void comparar_os_valores_de_umidade_de_do_tempo(){
    	System.out.print("No site da google a umidade está em:" + valorUmidadeGoogle);
    	System.out.print("No site da climatempo a umidade mínima será de:" + valorUmidadeMinima);
    	System.out.print("No site da climatempo a umidade máxima será de:" + valorUmidadeMaxima);

    }

  
}