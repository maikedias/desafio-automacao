package br.com.desafio.cadastro.previsaotempo.incluir;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith( Cucumber.class )

@CucumberOptions( features = "src\\test\\resources\\features\\bdddesafio\\previsaotempo", tags = "@incluir", plugin = {
                "pretty",
                "html:target/selenium/cucumber/previsaotempo" } )
public class RunCucumber {

}